import { useState } from "react";
import "../css/quiz.css";
export function Quiz() {
  // State for dropdown selections
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("");
  const [tone, setTone] = useState("");

  // Handle individual dropdowns
  const handleTopicClick = (e) => setTopic(e.target.value);
  const handleDifficultyClick = (e) => setDifficulty(e.target.value);
  const handleQuestionsClick = (e) => setQuestions(e.target.value);
  const handleToneClick = (e) => setTone(e.target.value);

  // Handle form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected:", { topic, difficulty, questions, tone });
  };
  return (
    <>
      <section className="top-section-container">
        <h1>Quiz Page</h1>
        <p>
          Please choose your preferences below to generate your personalized
          quiz
        </p>
      </section>

      <section className="quiz-form-section">
        <form onSubmit={handleSubmit}>
          <label for="quiz-form__topic">Topic</label>
          <select
            id="quiz-form__topic"
            name="topic"
            className="quiz-form__select"
            value={topic}
            onChange={handleTopicClick}
          >
            <option value="select">Please select a topic</option>
            <option value="javascript" className="quiz-form__option">
              JavaScript
            </option>
            <option value="aws" className="quiz-form__option">
              AWS
            </option>
            <option value="nodejs" className="quiz-form__option">
              Node.js
            </option>
            <option value="html" className="quiz-form__option">
              HTML
            </option>
          </select>

          <label for="quiz-form__difficulty">Difficulty</label>
          <select
            id="quiz-form__difficulty"
            name="difficulty"
            className="quiz-form__select"
            value={difficulty}
            onChange={handleDifficultyClick}
          >
            <option value="select">Please select a difficulty</option>
            <option value="easy" className="quiz-form__option">
              Easy
            </option>
            <option value="medium" className="quiz-form__option">
              Medium
            </option>
            <option value="hard" className="quiz-form__option">
              Hard
            </option>
          </select>

          <label for="quiz-form__questions">Number of questions</label>
          <select
            id="quiz-form__questions"
            name="questions"
            className="quiz-form__select"
            value={questions}
            onChange={handleQuestionsClick}
          >
            <option value="select">Please select a number of questions</option>
            <option value="5" className="quiz-form__option">
              5 questions
            </option>
            <option value="10" className="quiz-form__option">
              10 questions
            </option>
            <option value="15" className="quiz-form__option">
              15 questions
            </option>
          </select>

          <label for="quiz-form__tone">Style of Tone</label>
          <select
            id="quiz-form__tone"
            name="tone"
            className="quiz-form__select"
            value={tone}
            onChange={handleToneClick}
          >
            <option value="select">Please select a style of tone</option>
            <option value="Pirates" className="quiz-form__option">
              Jack Sparrow
            </option>
            <option value="Jedi" className="quiz-form__option">
              Jedi
            </option>
            <option value="Professor" className="quiz-form__option">
              Professor
            </option>
            <option value="Oogway" className="quiz-form__option">
              Master Oogway
            </option>
            <option value="Childish" className="quiz-form__option">
              Like I'm an 8 year old
            </option>
          </select>
          <button type="submit" className="quiz-form__button">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
