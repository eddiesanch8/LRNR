import "../css/home.css";
import yrnr from "../assets/turtle.png";
import bolt from "../assets/bolt.svg";
import person from "../assets/person.svg";
import payment from "../assets/payment.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <main className="home-container">
        <section className="cta-container">
          <div className="cta-logo">
            <img className="cta__img" src={yrnr} />
            <h1>Lrnr</h1>
          </div>
          <Link to="/quiz" className="cta__btn--anchor">
            Begin Learning
          </Link>
        </section>

        <section className="info-container">
          <div className="info-item">
            <img className="info__img" src={bolt} />
            <h3 className="info__header">Personalized Quizzes</h3>
            <p className="info__para">
              Experience quizzes that adapt to your unique learning style and
              knowledge level. Our AI analyzes your performance in real-time,
              adjusting question difficulty and topic focus to match exactly
              where you are in your learning journey. No more wasting time on
              material you've already mastered or feeling overwhelmed by
              concepts you're not ready for yet.
            </p>
          </div>
          <div className="info-item">
            <img className="info__img" src={payment} />
            <h3 className="info__header">Rewarding</h3>
            <p className="info__para">
              Push your limits without the frustration. Our app strikes the
              perfect balance between challenge and achievement, keeping you in
              the optimal learning zone where growth happens. Celebrate
              meaningful progress as you advance through increasingly complex
              material at a pace that works for you—not too easy to be boring,
              never too hard to be discouraging.
            </p>
          </div>
          <div className="info-item">
            <img className="info__img" src={person} />
            <h3 className="info__header">Personal SME</h3>
            <p className="info__para">
              Our AI acts as your personal tutor, breaking down complex topics,
              providing targeted explanations when you struggle, and reinforcing
              concepts until they stick. Get the individualized attention and
              expertise that would cost thousands with a private tutor, right in
              your pocket.
            </p>
          </div>
        </section>
      </main>
      ;
    </>
  );
}
