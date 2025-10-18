import React from "react";
import headImg from "../assets/overhaul-installation.jpg";
import ListComp from "../components/ListComp";

const OverhaulInstallation = () => {
  const list = [
    "Overhaul of Rotating Equipments",
    "Installation Services",
    "Pre- commissioning/Testing of installed plants",
    "Commissioning & Start-Up assistance",
    "Equipment Condition & Maintenance Surveys",
    "Optimization of Plant Efficiency",
    "Overhaul & Repair",
    "PLC Control Modifications",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5">
        <p>
          <strong>Wavecrest Offshore Limited</strong>. offers the best and most
          affordable support with our Site Service team available to provide
          high quality support services as and when required, provide technical
          support and after-sales services that are in line with our expertise
          with backup from OEM Partners across the globe. <br />
          <br />
          We have proven track record (Installation & Commissioning –
          Maintenance, Refurbishment, Overhaul) of Fire water pumps, Heat
          exchanger, Fire heater package system , Onshore & Offshore Quick
          Connect Disconnect Coupler (QCDC), Quick Release Offshore Hook, ESD
          Test(of MLA, QCDC, QRH), specific M E&I Test related to these
          equipments. <br />
          <br />
          We trust that with our comprehensive and high quality range of
          engineering expertise, we would be able to serve our customers needs
          and demands.
        </p>

        <ListComp
          services={list}
          showHeading={true}
          headingText="Our experts provide a depth of experience in all aspects of onsite services including but not limited to the following:"
        />
      </div>
    </section>
  );
};

export default OverhaulInstallation;
