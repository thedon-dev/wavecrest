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
import InspectionServices from "./pages/InspectionServices";
import ProcessControl from "./pages/ProcessControl";
import SurfaceProtection from "./pages/SurfaceProtection";
import OffshoreAndOnshore from "./pages/OffshoreAndOnshore";
import MarineSupport from "./pages/MarineSupport";
import OverhaulInstallation from "./pages/OverhaulInstallation";
import ProcurementServices from "./pages/ProcurementServices";
import EpciAndEpcm from "./pages/EpciAndEpcm";
import RopeAccess from "./pages/RopeAccess";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Layout />}>
            <Route path="about-us" element={<AboutUs />} />
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

          <Route path="/services" element={<Layout />}>
            <Route
              path="inspection-services"
              element={<InspectionServices />}
            />
            <Route path="rope-access" element={<RopeAccess />} />
            <Route
              path="process-control-and-instrumentation"
              element={<ProcessControl />}
            />
            <Route path="surface-protection" element={<SurfaceProtection />} />
            <Route
              path="Onshore-and-Offshore-Crane-Maintenance"
              element={<OffshoreAndOnshore />}
            />
            <Route
              path="marine-support-tank-and-vessel-cleaning-services"
              element={<MarineSupport />}
            />
            <Route
              path="overhaul-installation-and-commissioning"
              element={<OverhaulInstallation />}
            />
            <Route
              path="procurement-services-and-contractual-support"
              element={<ProcurementServices />}
            />
            <Route path="epci-and-epcm" element={<EpciAndEpcm />} />
            <Route
              path="intelligent-pigging-and-pipeline"
              element={<InspectionServices />}
            />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="careers" element={<Careers />} />
          </Route>

          <Route path="/partners" element={<Partners />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
