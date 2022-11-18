import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Prescription from "./pages/Prescription";
import Login from "./pages/SignUp";

import Footer from "./components/Footer";
import SignUp from "./pages/Login";
import CompanyNameSelect from "./pages/CompanyNameSelect.jsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<CompanyNameSelect />} />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
