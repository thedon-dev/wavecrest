import React from "react";
import pic1 from "../assets/marine-support.jpg";
import pic4 from "../assets/pic4.jpg";
import pic3 from "../assets/pic3.jpg";
// import liftingImg from "../assets/computer_stat.jpg";

const LiftingInspectionPage = () => {
  return (
    <div className="bg-white">
      <main className="flex justify-center items-center px-6 flex-col mt-10">
        <div className="md:px-10">
          {/* Hero Section */}
          <section className="md:px-10">
            <p className="text-sm text-blue-600 mb-6">Inspection SERVICES</p>
            <h1 className="text-3xl md:text-5xl font-bold text-left">
              Drilling Equipment Inspection
            </h1>
            <p className="text-2xl text-blue-600 pt-6 mb-2">
              Safe operations with our multi-discipline engineering team and
              robust RBI programme
            </p>
            <p className="text-2xl text-gray-600 pt-6 mb-2">
              As part of our asset integrity management programme, we offer the
              inspection of drilling equipment, which safeguards the integrity
              of rigs and the safety of the crew, thereby increasing operational
              performance.
            </p>
          </section>
        </div>

        <img
          src={pic1}
          alt="Lifting equipment inspection"
          className="rounded-2xl w-full px-4 pt-8 mb-8 shadow-lg"
        />

        {/* Certification Process */}
        <section className=" py-8 flex flex-col items-center justify-center">
          <div className="sm:w-full w-[70%] px-6">
            <h1 className="text-2xl md:text-4xl mb-6 font-semibold text-left">
              Drilling equipment inspection services
            </h1>
            <p className="text-lg mt-4 mb-6">
              Our comprehensive range of inspections for drilling rigs is
              focused on enhancing technical integrity for reliable operations,
              improving health and safety for crew, as well as achieving
              compliance with national and international regulations. Our rig
              inspection strategies are specifically designed for our partners
              in the offshore drilling industry. Some of our services include
              dimensional control, NDT inspections, visual inspections and
              function testing.
            </p>
            <p className="text-lg mt-4 mb-6">
              With our Risk-Based Inspection (RBI) framework by means of
              Non-Destructive Testing (NDT), we are able to prioritise
              inspection and zone in on the equipment’s true state, which is a
              vital element in ensuring optimal operations at minimum cost.
            </p>

            <div className="flex justify-center items-center">
              <img
                src={pic3}
                alt="Lifting equipment inspection"
                className=" w-[60%]l pt-6 mb-6 shadow-lg"
              />
            </div>

            {/*  */}
            <div>
              <h1 className="text-2xl mt-6 md:text-4xl text-left">
                Drilling equipment inspection services
              </h1>
              <p className="text-lg mt-4 mb-6">
                Our comprehensive range of inspections for drilling rigs is
                focused on enhancing technical integrity for reliable
                operations, improving health and safety for crew, as well as
                achieving compliance with national and international
                regulations. Our rig inspection strategies are specifically
                designed for our partners in the offshore drilling industry.
                Some of our services include dimensional control, NDT
                inspections, visual inspections and function testing.
              </p>

              <p className="text-lg mt-4 mb-6">
                With our Risk-Based Inspection (RBI) framework by means of
                Non-Destructive Testing (NDT), we are able to prioritise
                inspection and zone in on the equipment’s true state, which is a
                vital element in ensuring optimal operations at minimum cost.
              </p>

              <div className="flex justify-center items-center">
                <img
                  src={pic4}
                  alt="Lifting equipment inspection"
                  className="h-[400px] w-[60%] flex flex-center item-center align-center pt-6 mb-6"
                />
              </div>

              <div>
                <p className="text-2xl pt-6 mb-2">
                  Following our thorough inspection, we assess the results,
                  deliver effective and cost-efficient solutions for assets that
                  are most at risk, and provide our clients with targeted
                  analyses. We can also provide reports of the thorough
                  examination carried out by a competent person as required by
                  Lifting Operations and Lifting Equipment Regulations (LOLER).
                </p>
                <span className="mb-4  text-gray-600 text-xl">
                  This results in a number of benefits, such as:
                </span>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>compliance with our partners’ requirements;</li>
                  <li>
                    the ability to combine delivery to execute NDT needed and
                    Enterprise of Competence;
                  </li>
                  <li>
                    compliance with rules and regulations (NORSOK, LOLER, CAPP,
                    API, ILO 152);
                  </li>
                  <li>safe drilling operations;</li>
                  <li>and verification on the status of inventory.</li>
                </ul>
                <p className="text-2xl pt-6 mb-2">
                  Our integrated approach allows us to provide our clients with
                  tailored solutions. Aside from drilling equipment inspection,
                  we can design a multi-level programme that employs strategies
                  and methodologies to assess the different aspects of our
                  clients’ businesses.
                </p>
              </div>

              {/* learn more button */}
              <section className="flex justify-center items-center">
                <div className="py-8 px-6  bg-blue-200 mb-4 border rounded-md border-blue-500 text-center">
                  <h2 className="text-lg md:text-2xl font-bold mb-4">
                    Have any questions?
                  </h2>

                  <a
                    href="/contact"
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
                  >
                    Contact us
                  </a>
                </div>
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
                  <button>Learn more about Equip software</button>
                </a>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LiftingInspectionPage;
