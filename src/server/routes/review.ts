import { Router } from "express";
import { aiService } from "../services/ai-service";

export const reviewRouter = Router();

reviewRouter.post("/analyze", async (req, res) => {
  try {
    const { code, language } = req.body;
    const analysis = await aiService.analyzeCode(code, language);
    const score = await aiService.generateQualityScore(code);
    res.json({ analysis, score });
  } catch (error) {
    res.status(500).json({ error: "Analysis failed" });
  }
});

reviewRouter.get("/history", async (_req, res) => {
  res.json({ reviews: [] });
});
