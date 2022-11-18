import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Prescription from "./pages/Prescription";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PastPrescription from "./pages/PastPrescription.jsx";

import ProductPage from "./pages/ProductPage.jsx";
import DealerPage from "./pages/DealerPage.jsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/pastprescription" element={<PastPrescription />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/dealer" element={<DealerPage />} />
        {/* <Route path="/SignUp" element={<CompanyNameSelect />} /> */}
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
