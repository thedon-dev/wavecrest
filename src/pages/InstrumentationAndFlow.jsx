import React from "react";
import headImg from "../assets/butech-products.jpg";
import ListComp from "../components/ListComp";

const InstrumentationAndFlow = () => {
  const services = [
    "We provide extensive services in Process control, instrumentation and electrical fields",
    "Provision of AutoCAD drawings services for existing systems and electrical diagram.",
    "This will allow you to know shutdown requirements and save time and manpower during maintenance.",
    "Installation and maintenance of differential pressure gauges, temperature and pressure transmitters on delivery and flow lines.",
    "Installation of instrument and control panels, enunciators panels etc",
    "Recorders, controllers on metering skids",
    "Fire detection and alarm synchronizing systems",
    "Telemeter equipment, solenoids, relays",
    "Calibration and Re-calibration of instruments",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5 text-sm">
        <ListComp services={services} showHeading={false} />
      </div>
    </section>
  );
};

export default InstrumentationAndFlow;
