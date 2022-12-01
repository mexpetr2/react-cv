import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/competences" element={<Knowledges />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Homes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
