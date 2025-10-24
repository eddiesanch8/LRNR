import express from "express";
import connectToDatabase from "../config/db.js";

const pool = (await connectToDatabase()).promise();

const questionRouter = express.Router();

// GET /api/questions?topic=JavaScript&difficulty=easy&limit=10
questionRouter.get("/", async (req, res) => {
  const { topic, difficulty, limit } = req.query;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM questions WHERE topic = ? AND difficulty = ? ORDER BY RAND() LIMIT ?",
      [topic, difficulty, Number(limit)]
    );

    res.json(rows);
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

export default questionRouter;
