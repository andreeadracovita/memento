import { Routes, Route } from "react-router-dom";

import "./App.css";
import Algorithms from "./components/Algorithms";
import Complexity from "./components/Complexity";
import Concepts from "./components/Concepts";
import DataStructures from "./components/DataStructures";
import JSLibrary from "./components/JSLibrary";
import Home from "./components/Home";
import HttpResponses from "./components/HttpResponses";
import Navbar from "./components/Navbar";
import React from "./components/React";

function App() {

  return (
    <div className="container px-5">
      <Navbar />
      <Routes>
        <Route path="/memento/" element={<Home />} />
        <Route path="/memento/complexity" element={<Complexity />} />
        <Route path="/memento/concepts" element={<Concepts />} />
        <Route path="/memento/data-structures" element={<DataStructures />} />
        <Route path="/memento/algorithms" element={<Algorithms />} />

        <Route path="/memento/js-library" element={<JSLibrary />} />
        <Route path="/memento/react" element={<React />} />
        <Route path="/memento/http-responses" element={<HttpResponses />} />
      </Routes>
    </div>
  )
}

export default App;
