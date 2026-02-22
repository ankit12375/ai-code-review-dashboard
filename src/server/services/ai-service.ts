import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const aiService = {
  async analyzeCode(code: string, language: string) {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert code reviewer. Analyze the following ${language} code and provide:
          1. Bug detection with severity levels
          2. Performance improvement suggestions
          3. Security vulnerability checks
          4. Code style and best practice recommendations
          Return as structured JSON.`,
        },
        { role: "user", content: code },
      ],
      response_format: { type: "json_object" },
    });
    return JSON.parse(response.choices[0].message.content || "{}");
  },

  async generateQualityScore(code: string) {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Rate the code quality from 0-100 across: readability, maintainability, performance, security. Return JSON.",
        },
        { role: "user", content: code },
      ],
      response_format: { type: "json_object" },
    });
    return JSON.parse(response.choices[0].message.content || "{}");
  },
};
