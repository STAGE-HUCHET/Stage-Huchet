import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detection from "./pages/Detection";
import ScoutingUSA from "./pages/ScoutingUSA";
import ScrollDemo from "./pages/ScrollDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detection" element={<Detection />} />
        <Route path="/scouting-usa" element={<ScoutingUSA />} />
        <Route path="/scroll-demo" element={<ScrollDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
