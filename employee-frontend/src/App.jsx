import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Navbar/footer.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";



function App() {
  

  return (
    <>
    
      <Router>
      <Navbar/>
      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      </Routes>

      </Router>
      <Footer />
    </>
  )
}

export default App
