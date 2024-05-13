import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import nightsky from "./LottieFiles/night-sky.json";
import Lottie from "lottie-react";
import MoveToTop from "./Components/MoveToTop";
function App() {
  return (
    <>
      <div>
        <Lottie className="bg" animationData={nightsky} loop={true} />
        <Lottie className="bgtwo" animationData={nightsky} loop={true} />
        <Lottie className="bgtemp" animationData={nightsky} loop={true} />

        <Nav />
        <MoveToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
