import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/about";
import Events from "./pages/Events";


/*
import About from "./pages/about";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
*/

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
