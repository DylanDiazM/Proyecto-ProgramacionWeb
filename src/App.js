import {
  HomePage,
  About,
  Support,
  Review,
  Ranking,
  OptimizedBuild,
  SelectionBuild,
  OptimizedBuildSecond,
} from "./components/pages";
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
        <Route path="/optimized-build" element={<OptimizedBuild />} />
        <Route
          path="/optimized-build-second"
          element={<OptimizedBuildSecond />}
        />
        <Route path="/selection" element={<SelectionBuild />} />
      </Routes>
    </>
  );
}

export default App;
