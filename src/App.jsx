import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import SupportRequest from "./pages/SupportRequest";
import ClientPortal from "./pages/ClientPortal";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<SupportRequest />} />
          <Route path="/portal" element={<ClientPortal />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;