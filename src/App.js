import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="max-w-[1440px] m-auto overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create" element={<CreateComment />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
