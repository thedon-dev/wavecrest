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

  // Services data: each service has a title and an icon (JSX)
  const services = [
    {
      title: "Lifting Equipment Inspection and Certification",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18M4 8h16M5 13h14M6 18h12"
          />
        </svg>
      ),
    },
    {
      title: "Drilling Equipment Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v20m6-6H6"
          />
        </svg>
      ),
    },
    {
      title: "Static Pressurised Equipment Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      ),
    },
    {
      title: "Pressure Safety Valves Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18V6h12v12H6zm6 0v4M10 2h4"
          />
        </svg>
      ),
    },
    {
      title: "Hull and Structures Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M3 12l9-9 9 9M4 10v10h16V10" />
        </svg>
      ),
    },
    {
      title: "Jacking System Inspection and Maintenance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M4 20h16M12 4v12M8 8h8M6 16h12" />
        </svg>
      ),
    },
    {
      title: "Dropped Object Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 2v14m-6 6h12M8 14l4 4 4-4" />
        </svg>
      ),
    },
    {
      title: "Non-Destructive Testing (NDT)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Drone Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M2 12h4m12 0h4M12 2v4m0 12v4" />
        </svg>
      ),
    },
    {
      title: "Ex Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 2l9 9-9 9-9-9 9-9z" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
    {
      title: "Vendor Inspection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
    },
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

            <div className="flex flex-col items-center">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center mt-2 gap-6 w-full sm:w-10/12 bg-gray-50 mb-6 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full">
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Short description for {service.title}. Replace this with
                      actual details.
                    </p>
                  </div>
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
