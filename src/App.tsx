import { Routes, Route } from "react-router-dom";

import "./App.css";
import Algorithms from "./components/Algorithms";
import Complexity from "./components/Complexity";
import Functions from "./components/Functions";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="container px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complexity" element={<Complexity />} />
        <Route path="/jslibrary" element={<Functions />} />
        <Route path="/algorithms" element={<Algorithms />} />

      </Routes>
    </div>
  )
}

export default App;
