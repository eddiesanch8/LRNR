import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initQuestionsTable } from "./config/sqlUtils.js";
import { seedQuestions } from "./config/sqlUtils.js";
import questionRouter from "./routes/quizroutes.js";
import connectToDatabase from "./config/db.js";
// for any .env secrets
dotenv.config();
import OpenAI from 'openai';

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

// const tone = req.tone;
// const question = req.question;
// const answer = req.answer;

// input: `Evaluate this question ${question} against this answer${answer} tell me if it is correct or not in the tone of ${tone} The first word of the resposne must be a 'Yes' or 'No'`;

app.get('/', (req, res) => {
	res.send('hello');
	// response.send((result) => console.log(result.output_text));

	// try {
	// 	res.json(response);
	// } catch (err) {
	// 	console.log(`Error ${err}`);
	// }
});

//A prompt optimized to use less tokens.
const systemPrompt = `
You are a concise evaluator.
Return ONLY valid JSON with:
{"v":"Yes|No","f":"<≤80 words, 5 sentences max>"}
Do not add commentary or text outside JSON.
`;

app.post('/api/eval', async (req, res) => {
	// const { tone, question, userAnswer } = req.body;

	// 🧠 Build the prompt dynamically (no quotes around variables)
	const prompt = `
You are a precise evaluator that scores user responses on quality, relevance, and completeness.
Respond with the first word being 'Yes', 'No', 'Correct', or 'Incorrect'.
Always respond in the specified JSON format.

### Tone
pirate
### Question
What is a callback function
### User Answer
It is a variable 
### Output Format
{
  "verdict": "Yes" | "No" ,
  "feedback": "5-sentence paragraph explanation in a pirate tone."
}
`;

	try {
		const prompt = `
				Tone: pirate
				Q: What is a javascript object 
				A: A data type in javascript that holds key value pairs. It isn't in a speicic order like a array but still holds data.
				`;

		const response = await openai.responses.create({
			model: 'gpt-4o-mini',
			input: [
				{ role: 'system', content: systemPrompt },
				{ role: 'user', content: prompt },
			],
			temperature: 0,
			max_output_tokens: 120,
		});
		console.log(response);

		const outputText = response.output_text.trim();

		// Attempt to parse JSON
		let data;
		try {
			data = JSON.parse(outputText);
		} catch {
			data = { raw_output: outputText };
		}

		// res.json(response);
	} catch (err) {
		console.error('❌ OpenAI API error:', err);
		res.status(500).json({ error: err.message });
	}
});

app.listen(PORT, () => {
	console.log(`listening on Port: ${PORT}`);
});
