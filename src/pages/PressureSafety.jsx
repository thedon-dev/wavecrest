import React from "react";
import pic1 from "../assets/marine-support.jpg";
import liftingImg from "../assets/computer_stat.jpg";
import { ArrowDown, ArrowUp } from "lucide-react";

const PresureSafty = () => {
  return (
    <div className="bg-white">
      <main className="flex justify-center items-center flex-col mt-10">
        <div className="w-[50%]">
          {/* Hero Section */}
          <section className="">
            <p className="text-sm text-blue-600 mb-6">Inspection SERVICES</p>
            <h1 className="text-3xl md:text-5xl font-bold text-left">
              Pressure Safety Valves Inspection
            </h1>
            <p className="text-2xl text-blue-600 pt-6 mb-2">
              Enhancing safety on your offshore asset
            </p>
            <p className="text-2xl text-gray-600 pt-6 mb-2">
              Pressure Safety Valves (PSVs) protect pressure vessels and piping
              systems from excessive internal pressure. At Axess Group, we
              deliver pressure testing of PSVs, with pressures up to 25,000 PSI,
              to make sure that they “pop” within the accepted pressure range,
              enhancing safety on offshore assets.
            </p>
          </section>
        </div>

        <img
          src={pic1}
          alt="Lifting equipment inspection"
          className="rounded-2xl w-full pt-8 mb-8 shadow-lg"
        />

        {/*  */}
        <section className=" py-8 flex flex-col items-center justify-center">
          <div className="w-[52%]">
            <h1 className="text-2xl mt-6 md:text-4xl mb-6 font-semibold text-left">
              PSV inspection services
            </h1>
            <p className="text-2xl text-gray-600 pt-6 mb-2">
              Our global team of experienced technicians conduct the tests
              according to American Petroleum Institute (API) standards (API
              527, 510 and 576).
            </p>

            <p className="text-2xl text-gray-600 pt-6 mb-2">
              We adopt a Risk-Based Inspection (RBI) approach to create
              tailor-made inspection programmes for our clients. With our TRIM
              concept and team of multi-skilled personnel, we can combine
              testing of PSV with other services, such as inspection of HP/LP
              pressurised systems, instrument calibration, to minimise the
              number of mobilisations and reduce unnecessary costs, downtime and
              carbon emissions.
            </p>

            <p className="text-2xl text-gray-600 pt-6 mb-2">
              In addition, we mobilise test equipment on a pallet which we rig
              up in the mechanical workshop, instead of a big container, thus
              saving our clients costs and space onboard the rig.
            </p>

            <p className="text-2xl text-gray-600 pt-6 mb-2">
              At the end of the project, we upload all documents to Bridge,
              which our clients can easily access and review.
            </p>

            {/*  */}
            <div>
              {/* learn more button */}
              <section className="py-12  bg-blue-200 mb-4 border rounded-md border-blue-500 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Have any questions?
                </h2>

                <a
                  href="/contact"
                  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
                >
                  Contact us
                </a>
              </section>

              {/* <img
                src={liftingImg}
                alt="Lifting equipment inspection"
                className="w-full pt-6 mb-6"
              />

              <div className="flex justify-center items-center">
                <a
                  href="/contact"
                  className="text-gray-300 border  bg-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
                >
                  <button>Learn more about Bridge</button>
                </a>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PresureSafty;
