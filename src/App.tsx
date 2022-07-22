import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./Components/Navbar/Navbar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
