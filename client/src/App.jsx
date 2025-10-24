import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Quiz } from "./views/quiz";
import { Account } from "./views/account";
import { NavBar } from "./components/navbar";
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
