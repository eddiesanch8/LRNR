import "../css/answers.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function AnswerCard() {
  // Hardcoded quiz settings
  const topic = "JavaScript";
  const difficulty = "easy";
  const tone = "Pirate";
  const limit = 5;

  // get questions from API, which then get stored in an array
  const [questions, setQuestions] = useState([]);
  // arrays are zero indexed so we start at index [0]
  const [currentIndex, setCurrentIndex] = useState(0);
  // user answer is empty,(our input)
  const [userAnswer, setUserAnswer] = useState("");
  // feedback is where we make a request to our ai api endpoint, currently its empty.
  const [feedback, setFeedback] = useState("");

  // these next two store amount correct and incorrect
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch questions on mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/questions?topic=${topic}&difficulty=${difficulty}&limit=${limit}`
        );
        const data = await res.json();
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      }
    };
    fetchQuestions();
  }, []);

  // Hardcoded AI evaluation function
  const evaluateAnswer = async (questionText, answer) => {
    // Simulate AI response
    const isCorrect = Math.random() > 0.5; // randomly correct/incorrect
    const message = isCorrect
      ? "Great! Your answer is correct."
      : "Not quite right. Here's why...";
    return { correct: isCorrect, message };
  };

  const handleSubmit = async () => {
    if (!userAnswer) return;
    // starts questions at first index
    const currentQuestion = questions[currentIndex];

    // at some point this is the api call
    const evaluation = await evaluateAnswer(
      currentQuestion.question_text,
      userAnswer
    );
    // now this is our response from backend.
    setFeedback(evaluation.message);
    if (evaluation.correct) setCorrectCount((prev) => prev + 1);
    else setIncorrectCount((prev) => prev + 1);
  };

  const handleNext = () => {
    setUserAnswer("");
    setFeedback("");
    setCurrentIndex((prev) => prev + 1);
  };

  if (loading) return <p>Loading questions...</p>;

  if (currentIndex >= questions.length - 1)
    return (
      <div className="answer-container">
        <div className="result__container">
          <h2 className="result__header">Quiz Complete!</h2>

          <div className="total-container">
            <p className="total__details">
              Correct: {correctCount} | Incorrect: {incorrectCount}
            </p>
            <Link to="/quiz" className="total__link">
              Take another quiz
            </Link>
          </div>
        </div>
      </div>
    );

  const currentQuestion = questions[currentIndex];

  return (
    <main className="answer-container">
      <section className="counter">
        <p>
          {currentIndex + 1} of {questions.length}
        </p>
      </section>

      <div className="question">
        <h2 className="question__header">Question</h2>
        <p className="question__para">{currentQuestion.question_text}</p>
      </div>

      <div className="answer">
        <label className="answer__prompt" htmlFor="user-response">
          Answer
        </label>
        <input
          id="user-response"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="answer goes here"
        />
        <button type="button" className="answer__btn" onClick={handleSubmit}>
          Submit Answer
        </button>
      </div>

      {feedback && (
        <div className="feedback">
          <h3 className="feedback__header">{feedback}</h3>
          {currentIndex < questions.length - 1 && (
            <button
              className="feedback__btn"
              type="button"
              onClick={handleNext}
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </main>
  );
}
