import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
