import { Link } from "react-router-dom";
import "../css/account.css";
import Growth from "../assets/book.png";

export function Account() {
  return (
    <>
      <section className="intro-paragraph--container">
        <div className="intro-paragraph--text">
          <h1>Discover Your Learning Potential</h1>
          <p>
            Unlock new skills and knowledge with our interactive learning
            platform designed to make education fun and engaging.
          </p>
          <button id="start-now--btn">
            <Link to="/quiz">Start Now</Link>
          </button>
        </div>

        <div className="intro-paragraph--image">
          <img src={Growth} alt="Plant growing" id="plant-book" />
        </div>
      </section>

      <h2>
        Explore the awesome features that inspire you to work smarter, stay
        focused, and reach your goals every day!
      </h2>
      <section className="grid-cards--container">
        {data.map((d, index) => (
          <div className="card__image--container" key={index}>
            <div className="card__image--wrapper">
              <img src={d.icon} alt="Card Icon" className="cards-image" />
            </div>

            <div className="card__paragraph--container">
              <p className="card-title">{d.title}</p>
              <p className="card-message">{d.message}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

const data = [
  {
    icon: "/assets/fire.png",
    title: "Streak",
    message: "Keep your streak going!",
  },
  {
    icon: "./src/assets/rocket.png",
    title: "Level Up",
    message: "Reach new heights every day!",
  },
  {
    icon: "./src/assets/brain.png",
    title: "Quizzes",
    message: "Engage your brain daily!",
  },
  {
    icon: "./src/assets/education.png",
    title: "Educational",
    message: "Learn as you play!",
  },
];
