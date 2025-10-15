import React from "react";
import ListComp from "../components/ListComp";
import headImg from "../assets/inspection-services.jpg";

const InspectionServices = () => {
  //   const inspectionServices = [
  //     "Magnetic Particle Inspection (MPI)",
  //     "Dye Penetrant Inspection (DPI)",
  //     "Eddy Current Inspection (ECI)",
  //     "Ultrasonic Inspection (UT)",
  //     "Bore-Scope Inspection",
  //     "Radiography",
  //     "Hardness Testing",
  //     "None Destructive Testing (NDT)",
  //     "Alternating Current Field Measurement (ACFM)",
  //     "Time of Flight Diffraction (TOFD)",
  //     "Phased Array Ultrasonic Testing (PAUT)",
  //   ];

  // const oilfieldInspection = [
  //   "Bottom hole assembly inspection (A.P.I. / DS-1)",
  //   "Drill Pipe Inspection (A.P.I. / DS-1 / NS-2)",
  //   "Riser Inspection (A.P.I.)",
  //   "Casing Inspection (A.P.I.)",
  // ];

  const services = [
    "Lifting Equipment Inspection and Certification",
    "Drilling Equipment Inspection",
    "Static Pressurised Equipment Inspection",
    "Pressure Safety Valves Inspection",
    "Hull and Structures Inspection",
    "Jacking System Inspection and Maintenance",
    "Dropped Object Management",
    "Non-Destructive Testing (NDT)",
    "Drone Inspection",
    "Ex Inspection",
    "Vendor Inspection",
  ];

  return (
    <section>
      {/* <div>
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
      </div> */}

      {/* new */}

      <main className="w-full">
        {/* Breadcrumb */}
        <section className="bg-white border-b">
          <div className="w-full h-full">
            <img
              src={headImg}
              alt="inspection services"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-600">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            /
            <span className="text-gray-800 font-medium">
              Inspection Services
            </span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
            <div className="flex-1">
              <p className="uppercase text-xs font-semibold text-gray-500 tracking-wide mb-2">
                Variety of Inspection Services to Meet Your Needs
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Inspection Services
              </h1>
              <p className="text-blue-700 text-2xl leading-relaxed mb-8 max-w-xl">
                With over 20 years of experience in the oil and gas industry and
                more recently, in renewables,{" "}
                <strong>Wavecrest Offshore Limited</strong> is a trusted
                inspection partner of some of the leading players in the market.
              </p>

              <p className="text-gray-700 text-lg">
                Inspections help to prevent incidents that compromise the safety
                of assets and personnel. In our relentless pursuit of
                excellence, we optimise mobilisations and document inspection
                results in intuitive reports to ensure quality standards,
                compliance to relevant regulations, and that client expectations
                are consistently met.
              </p>
              <div className=" text-center h-[50%] w-[60%] xl:ml-[20%] mt-10 bg-indigo-400 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                <p className="text-3xl mb-4">Have any questions?</p>
                <button className="bg-indigo-600 text-xl p-2 rounded-full">
                  Contact us{" "}
                  <span className="text-white font-bold text-2xl hover:text-indigo-700">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl text-center md:text-3xl text-gray-900 mb-6">
              Manage risks effectively with our broad range of inspection
              services, including:
            </h2>

            <div className="flex justify-center items-center flex-col">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center gap-8 bg-gray-50 mb-6 p-6 rounded-xl shadow-sm hover:shadow-md shadow-black/50 transition-shadow"
                >
                  <a
                    href="#"
                    className="text-indigo-600 font-medium text-sm hover:text-indigo-700"
                  >
                    Read more →
                  </a>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {s}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default InspectionServices;
