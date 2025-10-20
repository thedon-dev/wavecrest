import React, { useState } from "react";
import headImg from "../assets/ProcurementManagement.jpg";

const ProcurementServices = () => {
  const [currentTab, setCurrentTab] = useState("Line Pipes & OCTG");
  const tabs = [
    "Line Pipes & OCTG",
    "Fittings and Flangs",
    "Instrumentaton & Flow Control Products",
    "Rotating Equipments",
    "Valves & Actuators",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5">
        <p>
          We are original equipment manufacturers’ distributor for a variety of
          world-class oil industry products and equipment and offer post
          installation after sales service with provision for in country stock
          holding/inventory for prompt or just-in-time delivery of critical
          service spares. We have the reach and means to procure materials from
          around the globe through a wide supplier/stockists network worldwide.{" "}
          <br />
          <br />
          <strong>Wavecrest Offshore Limited</strong> is a major supplier of
          welded & seamless OCTG – casing & tubing of all sizes, drill pipes of
          all sizes, seamless pipes and SAW welded pipes of different sized. Our
          mills are ISO9001 listed and have American Petroleum Institute (API 5L
          and API5CT) accreditation. <br />
          <br />
          The quality assurance program employed is supported by superbly
          equipped laboratories and sophisticated equipment, which is used for
          the inspection and testing of materials, welding processes,
          dimensions, and quality of coatings and linings.
        </p>
      </div>

      <div className="mt-3">
        <h1>Product Categories: </h1>

        <div className="flex mt-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setCurrentTab(tab)}
              className={`text-sm border-b ${
                tab === currentTab
                  ? "border border-blue-500 bg-blue-500 text-white"
                  : ""
              } cursor-pointer py-2`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcurementServices;
