import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { reviewRouter } from "./routes/review";
import { aiService } from "./services/ai-service";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: "/ws" });

app.use(express.json());
app.use("/api/reviews", reviewRouter);

wss.on("connection", (ws) => {
  console.log("Client connected for real-time review");
  ws.on("message", async (data) => {
    const { type, payload } = JSON.parse(data.toString());
    if (type === "review-code") {
      const suggestions = await aiService.analyzeCode(payload.code, payload.language);
      ws.send(JSON.stringify({ type: "suggestions", data: suggestions }));
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
