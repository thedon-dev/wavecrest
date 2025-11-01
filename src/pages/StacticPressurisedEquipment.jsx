import React, { useState } from "react";
import pic1 from "../assets/marine-support.jpg";
import pic6 from "../assets/pic6.jpg";
import pic5 from "../assets/pic5.jpg";
// import liftingImg from "../assets/computer_stat.jpg";
import { ArrowDown, ArrowUp } from "lucide-react";

const StaticPressurisedEquipment = () => {
  const items = [
    {
      text: "In-Service Inspection",
      icon: "🧰",
      paragraph:
        "From implementing a comprehensive risk-based inspection program to managing compliance inspections, we provide our clients with cost-effective services that improve safety, proficiency and productivity.",
    },
    {
      text: "Replacement Inspection",
      icon: "👷‍♂️",
      paragraph:
        "Early detection is key in ensuring your assets are working at full capacity. We inspect equipment’s pipe systems, identify issues and address them in the earliest stages to reduce the risk of failure and cost of interruption in production. Aside from the thorough inspection of the equipment, we also take care of fabrication and installation of pipes to guarantee that they are done right and on time.",
    },
    {
      text: "Shutdown and Turnaround Inspection",
      icon: "⚡",
      paragraph:
        "We provide our clients with shutdown and turnaround inspection and support to ensure integrity, safety and extend the life cycle of their equipment.",
    },
    {
      text: "Inspection Planning",
      icon: "⚡",
      paragraph:
        "We design a comprehensive long-term inspection programme tailored to our clients’ needs, from determining suitable NDT inspection methods and assessing data to optimising asset performance, to meet their requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleParagraph = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <main className="flex justify-center items-center p-6 flex-col mt-10">
        <div className="">
          {/* Hero Section */}
          <section className="">
            <p className="text-sm text-blue-600 mb-6">Inspection SERVICES</p>
            <h1 className="text-3xl md:text-5xl font-bold text-left">
              Static Pressurised Equipment Inspection
            </h1>
            <p className="text-2xl text-blue-600 pt-6 mb-2">
              Prevent pressurised equipment failure through our bespoke
              inspection strategies
            </p>
            <p className="text-2xl text-gray-600 pt-6 mb-2">
              At Wavecrest, we perform inspection of pressurised systems to
              obtain valuable data for maintenance planning and to verify the
              safety of our clients’ static pressurised equipment and ensuring
              their lifespan.
            </p>
          </section>
        </div>

        <img
          src={pic1}
          alt="Lifting equipment inspection"
          className="rounded-2xl w-full pt-8 mb-8 shadow-lg"
        />

        {/* Certification Process */}
        <section className=" py-8 flex flex-col items-center justify-center">
          <div className="">
            <p className="text-lg text-gray-600 pt-6 mb-2">
              As a world-leading provider of inspection services, we help our
              clients effectively assess the risks associated with static
              pressurised equipment, through systematic inspection,
              well-documented results and by providing visualisation of the
              degradation. We provide them with suggested actions to reduce the
              risk.
            </p>
            <p className="text-lg text-gray-600 pt-6 mb-2">
              Our entire inspection process is carried out by certified,
              multi-skilled and experienced personnel to ensure proper execution
              of inspection methods and optimise resources and mobilisation.
              Combining our deep industry knowledge with cutting-edge software
              inspection tools, we equip our clients with the data they need to
              gain competitive advantage and achieve business goals.
            </p>
            <h1 className="text-2xl mt-6 md:text-4xl mb-6 font-semibold text-left">
              Our static pressurised equipment inspection services include:
            </h1>
            <h2 className="text-left font-bold mb-4 text-2xl">
              Inspection Execution
            </h2>

            <ul className="list-disc ml-6 p-2 text-lg text-gray-600">
              <li>
                Efficient inspection with on-site competence to readily
                recommend adjustments according to inspection results
              </li>
              <li>
                Performed by multi-skilled inspectors and NDT technicians within
                safe operating limits
              </li>
            </ul>

            <img
              src={pic5}
              alt="Lifting equipment inspection"
              className=" w-full pt-6 mb-6 shadow-lg"
            />

            {/*  */}
            <div>
              <div>
                <h1 className="text-2xl font-bold pt-6 mb-4">
                  Reporting and Documentation
                </h1>
              </div>

              <ul className="list-disc ml-6 mb-4 text-lg text-gray-600">
                <li>
                  Intuitive and results-oriented reports that present the
                  technical condition status and recommendations to prevent
                  equipment failure
                </li>
                <li>
                  Evaluation of data and finding with tailored recommendations
                  for further action and integrity engineering or maintenance
                  planning
                </li>
                <li>
                  Test point documentation based on pictures, piping and
                  instrumentation diagram (P&ID), isometric drawings and 3D
                  models
                </li>
              </ul>

              <img
                src={pic6}
                alt="Lifting equipment inspection"
                className="h-[600px] w-full pt-6 mb-6"
              />

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

              {/*  */}
              <h1 className="text-3xl pt-6 mb-4">
                Our major inspection categories are:
              </h1>

              <div className="w-full md:w-2/3 mx-auto mt-10 px-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-full border-b border-gray-300 py-4 cursor-pointer transition-all"
                  >
                    {/* Header Row */}
                    <div
                      className="flex justify-between items-center"
                      onClick={() => toggleParagraph(index)}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {item.text}
                      </h3>

                      {/* Icon Toggle */}
                      {openIndex === index ? (
                        <ArrowUp className="text-blue-500 w-6 h-6 transition-transform duration-300" />
                      ) : (
                        <ArrowDown className="text-blue-500 w-6 h-6 transition-transform duration-300" />
                      )}
                    </div>

                    {/* Paragraph */}
                    {openIndex === index && (
                      <p className="text-gray-600 mt-3 text-sm md:text-base transition-all duration-300">
                        {item.paragraph}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-2xl text-gray-600 pt-6 mb-2">
                We design a comprehensive long-term inspection programme
                tailored to our clients’ needs, from determining suitable NDT
                inspection methods and assessing data to optimising asset
                performance, to meet their requirements.
              </p>

              {/* <img
                src={liftingImg}
                alt="Lifting equipment inspection"
                className="w-full pt-6 mb-6"
              /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StaticPressurisedEquipment;
