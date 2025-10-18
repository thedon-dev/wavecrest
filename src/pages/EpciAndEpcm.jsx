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

  const list6 = [
    "EM for all disciplines: process, mechanical, electrical, automation and civil design and all other parties involved (multiple companies, multiple languages and cultures)",
    "Scope definitions, i.e. preparation of drawings and technical specifications for the basic and detailed engineering",
    "Management of the quality, progress (timeline) and performance of engineering activities for all disciplines",
    "Managing the cooperation/co-ordination between disciplines",
    "Managing sub-suppliers",
    "Management of the content of engineering documents, including the technical aspect and the project’s scope and budgets",
    "Technical analysis of bids, recommendations, verification of supplier and contractor documents",
    "Project control: Preparation of cost and progress reports, including updates to the budget, commitments and forecasts until the project’s final delivery, including the management of all changes and amendments",
    "Quality assurance: Development and implementation of the project’s quality assurance plan and organisation, Perform audits according to quality system",
    "As-built services",
    "Manuals",
    "Planning | Feasibility",
    "Engineering",
    "Environmental",
    "Jurisdictional Permitting",
    "Environmental Permitting",
    "Vendor Contracts",
  ];

  const list7 = [
    "Preparation of procurement plan",
    "Preparation of purchase (RFP preparation)",
    "Sending RFP´s",
    "Technical analysis of bids, recommendations, verification of supplier and contractor documents",
    "Advise in optimizing the procurement",
    "Procurement scheduling and progress follow-up",
    "Material tracking throughout the project",
    "At-site inspection of project materials and equipment",
    "Warranty issues",
  ];

  const list8 = [
    "Safety",
    "Inspections",
    "Environmental Inspections",
    "GIS",
    "Project Controls",
    "Commissioning",
    "Document Controls",
    "Procurement",
  ];

  const list9 = ["Asset Management", "Compliance", "Integrity"];

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

      <div className="mt-10">
        <h2 className="text-3xl font-semibold">
          EPCM – Engineering, Procurement, Construction and Maintenance
        </h2>
        <p className="text-sm mt-5">
          <strong>Wavecrest</strong> EPCM Program is successful in utilizing
          both engineering and construction management expertise as we manage
          the project as your main representative to produce an energy project
          from feasibility through total project management to commissioning on
          site and maintenance and beyond. The EPCM Program for natural gas and
          midstream clients utilizes OUR national team of engineers, inspectors,
          planning and construction management personnel to provide a turnkey
          solution for our clients.
        </p>
      </div>

      <div>
        <ListComp
          services={list6}
          showHeading={true}
          headingText="Engineering Management Services"
          marginTop={true}
          showDescription={true}
          descriptionText="When it comes to Engineering management, we offer you clash-free engineering saving you time and money. Our core expertise includes"
        />

        <ListComp
          services={list7}
          showHeading={true}
          headingText="Procurement Services"
          marginTop={true}
          showDescription={true}
          descriptionText="In the Procurement phase, we act as Owners’ Agent preparing RFP´s, analysing and evaluating offers according to the agreed procurement strategy. Our procurement services include:"
        />

        <ListComp
          services={list8}
          showHeading={true}
          headingText="Construction Management"
          marginTop={true}
          showDescription={true}
          descriptionText="We manage all aspects of construction management in all phases of the project."
        />

        <ListComp
          services={list9}
          showHeading={true}
          headingText="Maintenance"
          marginTop={true}
          showDescription={true}
          descriptionText="All maintenance is properly coordinated by our technical team in the following areas."
        />
      </div>
    </section>
  );
};

export default EpciAndEpcm;
