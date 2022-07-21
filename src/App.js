import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "../src/components/global/global.css";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import From from "./components/email/From";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/From" element={<From />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
