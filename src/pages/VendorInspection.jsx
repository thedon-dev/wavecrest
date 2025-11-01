import React from "react";
import pic1 from "../assets/marine-support.jpg";
// import vendorInspectionimg from "../assets/vendorInspection.jpg ";
import { ArrowDown, ArrowUp } from "lucide-react";

const VendorInspection = () => {
  return (
    <div>
      <div className="bg-white">
        <main className="flex justify-center items-center p-6 flex-col mt-10">
          <div className="">
            {/* Hero Section */}
            <section className="">
              <p className="text-sm text-blue-600 mb-6">QC SERVICES</p>
              <h1 className="text-3xl md:text-5xl font-bold text-left">
                Vendor Inspection
              </h1>
              <p className="text-2xl text-blue-600 pt-6 mb-2">
                Effectively managing risks by ensuring quality and compliance
              </p>
              <p className="text-2xl text-gray-600 pt-6 mb-2">
                Hired equipment can present safety risks to personnel and the
                installation if they arrive in poor working condition or do not
                comply with regulations. We conduct quality inspections on the
                vendor’s equipment prior to mobilisation, avoiding any
                unnecessary costs and downtime.
              </p>
            </section>
          </div>

          <img
            src={pic1}
            alt="Lifting equipment inspection"
            className="rounded-2xl w-full pt-8 mb-8 shadow-lg"
          />

          <section className=" py-8 flex flex-col items-center justify-center">
            <div className="">
              <p className="text-2xl text-gray-600 pt-6 mb-2">
                At Axess Group, we help clients focus on their businesses by
                handling the inspection aspect of the procurement process. With
                over two decades of experience in the oil and gas industry, we
                are very familiar with the specifications and regulations
                related to equipment.
              </p>
              <h1 className="text-2xl mt-6 md:text-4xl mb-6 font-semibold text-left">
                Vendor inspection services
              </h1>
              <p className="text-2xl text-gray-600 pt-6 mb-2">
                Our team of highly qualified and experienced inspection
                engineers can help to ensure that the equipment is in proper
                working condition with the right certifications and are
                following the relevant regulations, furthermore, as an
                independent third-party inspection company, we provide impartial
                advice and are only influenced by hard data.
              </p>

              <p className="text-2xl text-gray-600 pt-6 mb-2">
                We typically review the certifications, carry out the
                inspections at the vendor’s premises, complete the relevant
                checklists (electrical, mechanical, or structural) and conduct
                function tests wherever feasible.
              </p>

              <p className="text-2xl text-gray-600 pt-6 mb-2">
                With our global team of experts, we can provide vendor
                inspection services for our clients worldwide, for a wide range
                of equipment, including:
              </p>

              <div>
                <ul className="list-disc list-inside text-2xl text-gray-600 pt-6 mb-2">
                  <li>Pressure equipment</li>
                  <li>Lifting equipment</li>
                  <li>Electrical equipment</li>
                </ul>
              </div>
              <div>
                {/* <div>
                  <img src={vendorInspectionimg} alt="vendor_inspection" />
                </div> */}
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VendorInspection;
