import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import CorperateSocial from "./pages/CorperateSocial";
import HseQuality from "./pages/HseQuality";
import Valves from "./pages/Valves";
import DrillingEquipment from "./pages/DrillingEquipment";
import FittingsAndFlanges from "./pages/FittingsAndFlanges";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Layout />}>
            <Route path="about-us" element={<AboutUs />} />
            <Route path="careers" element={<Careers />} />
            <Route
              path="corporate-social-responsibility"
              element={<CorperateSocial />}
            />
            <Route path="hse-quality-management" element={<HseQuality />} />
          </Route>

          <Route path="/products" element={<Layout />}>
            <Route path="valves" element={<Valves />} />
            <Route
              path="seamless-line-pipes-and-drilling-equipment"
              element={<DrillingEquipment />}
            />
            <Route
              path="fittings-and-flanges"
              element={<FittingsAndFlanges />}
            />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
