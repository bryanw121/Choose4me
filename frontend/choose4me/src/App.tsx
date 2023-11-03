import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Choose from "./pages/Choose/Choose";
import Adventures from "./pages/Adventures/Adventures";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
