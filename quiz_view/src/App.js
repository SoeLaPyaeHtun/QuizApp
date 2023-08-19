import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from "./components/Question";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/question" element={<Question />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
