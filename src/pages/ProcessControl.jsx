import React from "react";
import headImg from "../assets/ProcessControlInstrumentation.jpg";
import ListComp from "../components/ListComp";

const ProcessControl = () => {
  const processControl = [
    "General refurbishment of electrical installations in production platform and rigs",
    "Installation of switch gear and controls",
    "Upstream Process Systems and Process Control & Instrumentation Engineering/Offshore Process Mechanical & Piping Engineering",
    "Refurbishment flow lines, onshore/offshore process facilities and other rotating equipment electrical or mechanical",
    "Design of control system packages for your company needs to save your plant downtime and ultimately increasing your production.",
    "Provision of AutoCAD drawings services for your existing systems and electrical wiring diagram. This will allow you to know shutdown requirements and save time and manpower during maintenance.",
    "Installation of transformers, distribution and control panels",
    "Laying of steel conduits and cable trays",
    "Laying of cables for lighting, switching and controls for Navigation",
    "Maintenance of same in an existing installation.",
    "Maintenance of Motor control centres in switch gears",
    "Installation and Maintenance of 3 phase induction and squirrel cage motors, etc",
    "Calibration of relays, Solenoids in generators",
    "Installation and maintenance of Cathodic protection in above-ground and under-ground pipes and vessels using magnesium oxide as sacrificial anodes or other modern technologies in use.",
    "We provide extensive services in Process control, instrumentation and electrical fields.",
    "Provision of AutoCAD drawings services for existing systems and electrical wiring diagram. This will allow you to know shutdown requirements and save time and manpower during maintenance.",
    "Installation and maintenance of differential pressure gauges, temperature and pressure transmitters on delivery and flow lines.",
    "Installation of instrument and control panels, annunciation panels, etc",
    "Installation and maintenance of differential pressure gauge pressure and temperature, transmitters, on delivery and flows lines",
    "Recorders, controllers on metering skids",
    "Fire detection and alarm synchronizing system",
    "Telemeter equipment, solenoids, relays",
    "Calibration and recalibration of instruments",
    "Supply of valves and accessories.",
    "Corrosion Control Services",
    "High Pressure (HP) and Ultra High Pressure (UHP) Hydro-blasting",
    "Corrosion survey and risk assessment",
    "Corrosion control in Process systems",
    "Protection coating and relocating",
    "Plant and tank cleaning",
    "Pipeline and storage tank maintenance",
    "High Pressure (HP) and Ultra High Pressure (UHP) Hydro-blasting – Ultra bar 10E UHP",
    "Offshore Unit",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div className="mt-5">
        <p className="text-sm text-justify">
          We specialize in supply and installation of process control
          instrumentation products and electrical products. We undertake the
          following in the electrical fields in both the Hazardous and non
          hazardous environment.
        </p>
      </div>

      <ListComp services={processControl} showHeading={false} />
    </section>
  );
};

export default ProcessControl;
