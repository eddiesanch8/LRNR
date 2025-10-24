import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Quiz } from "./views/quiz";
import { Account } from "./views/account";
import { NavBar } from "./components/navbar";
import { AnswerCard } from "./views/answers";

import { Footer } from "./components/footer";
export default function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/answers" element={<AnswerCard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
