import React from "react";
import headImg from "../assets/epci-epcm.png";
import ListComp from "../components/ListComp";

const EpciAndEpcm = () => {
  const list1 = [
    "EPC for Plant Expansion & Modifications, De-bottleneck & Re-Vamping, Refurbishment, Re-Habilitation, Hot & Cold Tie-in Projects",
    "Detailed Engineering & Procurement, Fabrication and Erection of Process piping & Steel Structure",
    "Installation, Testing, Pre-commissioning, Commissioning of Electrical & Instrumentation works EPC for Plant Expansion & Modifications, De-bottleneck & Re-Vamping, Refurbishment, Re-Habilitation, Hot & Cold Tie-in Projects",
    "Detailed Engineering & Procurement, Fabrication and Erection of Process piping & Steel Structure",
    "Installation, Testing, Pre-commissioning, Commissioning of Electrical & Instrumentation works",
  ];

  const list2 = [
    "Prepare basic layout drawing",
    "Develop process flow / P&ID",
    "Perform cycle optimization",
    "Heat & water balance dia.",
    "Sizing plant equipment",
    "Prepare specification",
    "Perform calculation & analysis",
    "Establish proper material selection to meet service conditions",
  ];

  const list3 = [
    "Develop plant layout",
    "Prepare piping GA drawings",
    "Isometric drawings",
    "Pipe stress analysis & mechanical strength calculation",
    "Design pipe supports",
    "Design tanks – Water, oil etc",
  ];

  const list4 = [
    "Single line and three lines diagram",
    "Cable schedule & cable sizing",
    "Grounding/Lightning Protection",
    "Load flow analysis & short –circuit cal.",
    "Substation design",
    "HV / MV / LV system design",
    "Plant lighting system",
    "Loop drawing instrument hook up",
    "Develop operation philosophy & control logic",
    "Select motorized & pneumatic control valves, including turbine bypass valves",
    "Prepare specification & select equip",
  ];

  const list5 = [
    "Establish contact with new vendor / supplier",
    "Assist to prepare procurement plan",
    "Follow company procedure to conduct tender exercise, clarify, negotiate & confirm order based on technical & commercial evaluation",
    "Monitor the progress, expedite the delivery",
  ];

  return (
    <section className="">
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5">
        <h1 className="text-3xl font-bold">
          EPCI – Engineering Design, Procurement, Construction and Installation
          (EPCI)
        </h1>
        <p className="text-xs text-justify mt-5">
          <strong>Wavecrest</strong> is one of the leading oil & gas
          infrastructure services companies with extensive experience offering
          fully integrated{" "}
          <strong>
            Engineering Design, Procurement, Construction and Installation
            (EPCI){" "}
          </strong>
          services to the oil & gas, petroleum, and petrochemical industries.{" "}
          <br /> <br />
          We have trained up an elite team of engineers who are capable of all
          our Engineering services to include Process/Chemical, Civil &
          Structural, Mechanical & Equipment, Piping, Tankage, Electrical,
          Instrumentation, Automation, and Commissioning. Providing high quality
          & responsive maintenance, and EPC services for our customers, our
          services yield significant benefits such as lowered operational costs,
          improved deployment time and with resource optimization. Our
          strategies for one-stop integration are to fully understand our
          client’s needs overall, before planning, design and integrate diverse
          components for our clients directly through all shared services.{" "}
          <br />
          <br />
          We have a pool of expertise with proven track record in delivering
          complex solutions and effective and quick execution with diverse
          technical know-how.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold my-5">
          Various activities carried out by Wavecrest EPC team includes
        </h3>
        <ListComp services={list1} showHeading={false} marginTop={false} />

        <div className="mt-10">
          <h3 className="text-sm font-semibold my-5">
            Other Activities Include;
          </h3>
          <ListComp
            services={list2}
            showHeading={true}
            headingText="Process & Equipment"
            marginTop={false}
          />
          <ListComp
            services={list3}
            showHeading={true}
            headingText="Piping & Tank"
            marginTop={true}
          />
          <ListComp
            services={list4}
            showHeading={true}
            headingText="Electrical and Instrumentation"
            marginTop={true}
          />
          <ListComp
            services={list5}
            showHeading={true}
            headingText="Engineering Procurement"
            marginTop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default EpciAndEpcm;
