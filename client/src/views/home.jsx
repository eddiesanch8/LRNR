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
            <img src={bolt} />
            <p>Here is a summary of stuff</p>
          </div>
          <div className="info-item">
            <img src={payment} />
            <p>Here is a summary of stuff</p>
          </div>
          <div className="info-item">
            <img src={person} />
            <p>Here is a summary of stuff</p>
          </div>
        </section>
      </main>
      ;
    </>
  );
}
