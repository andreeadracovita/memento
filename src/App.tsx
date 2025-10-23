import { Routes, Route } from "react-router-dom";

import "./App.css";
import Algorithms from "./components/Algorithms";
import Complexity from "./components/Complexity";
import DataStructures from "./components/DataStructures";
import Functions from "./components/Functions";
import HttpResponses from "./components/HttpResponses";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="container px-5">
      <Navbar />
      <Routes>
        <Route path="/memento/" element={<Home />} />
        <Route path="/memento/complexity" element={<Complexity />} />
        <Route path="/memento/data-structures" element={<DataStructures />} />
        <Route path="/memento/algorithms" element={<Algorithms />} />

        <Route path="/memento/js-library" element={<Functions />} />
        <Route path="/memento/http-responses" element={<HttpResponses />} />
      </Routes>
    </div>
  )
}

export default App;
