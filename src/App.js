import { HomePage, About, Support, Review, Ranking } from "./components/pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/review" element={<Review />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </>
  );
}

export default App;
