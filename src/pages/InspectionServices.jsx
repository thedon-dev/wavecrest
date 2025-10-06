import React from "react";
import ListComp from "../components/ListComp";
import headImg from "../assets/inspection-services.jpg";

const InspectionServices = () => {
  const inspectionServices = [
    "Magnetic Particle Inspection (MPI)",
    "Dye Penetrant Inspection (DPI)",
    "Eddy Current Inspection (ECI)",
    "Ultrasonic Inspection (UT)",
    "Bore-Scope Inspection",
    "Radiography",
    "Hardness Testing",
    "None Destructive Testing (NDT)",
    "Alternating Current Field Measurement (ACFM)",
    "Time of Flight Diffraction (TOFD)",
    "Phased Array Ultrasonic Testing (PAUT)",
  ];

  const oilfieldInspection = [
    "Bottom hole assembly inspection (A.P.I. / DS-1)",
    "Drill Pipe Inspection (A.P.I. / DS-1 / NS-2)",
    "Riser Inspection (A.P.I.)",
    "Casing Inspection (A.P.I.)",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5">
        <p className="text-sm">
          <strong>Wavecrest Offshore Limited</strong> specializes in maintenance
          inspections performing non destructive testing (NDT) inspection on all
          down-hole drilling inventory ranging from OCTG & drill pipes, crown to
          the drill bits. All of Dovewell’s inspectors are trained on the job
          and certified.
        </p>

        <ListComp
          services={inspectionServices}
          showHeading={true}
          headingText="Inspection Services Provided"
        />

        <ListComp
          services={oilfieldInspection}
          showHeading={true}
          headingText="OCTG Inspection"
        />
      </div>
    </section>
  );
};

export default InspectionServices;
