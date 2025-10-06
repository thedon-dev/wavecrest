import React from "react";
import headImg from "../assets/CraneMaintenance.jpg";

const OffshoreAndOnshore = () => {
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div className="mt-5">
        <p className="text-sm text-justify">
          <strong>Wavecrest Offshore Limited</strong> supplies crane parts and
          carry out crane services. Crane parts and service are available for
          ship cranes, offshore cranes and mobile cranes.{" "}
          <strong>Wavecrest</strong> also provide hydraulic repairs for crane
          pumps and motors as well as crane winch and crane gearbox repairs.
          Offshore crane sales and marine crane sales also available.
        </p>
      </div>
    </section>
  );
};

export default OffshoreAndOnshore;
