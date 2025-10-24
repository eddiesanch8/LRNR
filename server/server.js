import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initQuestionsTable } from "./config/sqlUtils.js";
import { seedQuestions } from "./config/sqlUtils.js";
import questionRouter from "./routes/quizroutes.js";
import connectToDatabase from "./config/db.js";
// for any .env secrets
dotenv.config();
import OpenAI from "openai";

// -------------------------------------------- server settings ----------------------------------------\\
const app = express();
const PORT = 8000;
connectToDatabase();
initQuestionsTable();
seedQuestions();

app.use(express.json());
app.use(cors());
app.use("/api/questions", questionRouter);

// -------------------------------------------- using routes --------------------------------------------\\
const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

app.post("/api/eval", async (req, res) => {
  const { tone, question, userAnswer } = req.body;

  //A prompt optimized to use less tokens.
  const systemPrompt = `
You are a concise evaluator.
Return ONLY valid JSON with:
{"verdict":"Yes|No","feedback":"<≤80 words, 5 sentences max>"}
Do not add commentary or text outside JSON.
`;

  try {
    const prompt = `
Tone: ${tone}
Question: ${question}
User Answer: ${userAnswer}
Respond ONLY in JSON format as specified by the system prompt.
`;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_output_tokens: 120,
    });

    const outputText = response.output_text.trim();

    // Attempt to parse JSON
    let data;
    try {
      data = JSON.parse(outputText);
    } catch {
      data = { raw_output: outputText };
    }
    res.json(data);

    // res.json(response);
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`listening on Port: ${PORT}`);
});
