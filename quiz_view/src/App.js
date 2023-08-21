import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from "./components/Question";
import Result from "./components/Result";
import NavL from "./components/NavL";
import AuthL from "./components/AuthL";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AuthL />}>
          <Route path="/" element={<NavL />}>
            <Route path="/question" element={<Question />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
