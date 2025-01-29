import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AppFooter from "../Components/Footer/Footer";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";

export default function Layout() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}
