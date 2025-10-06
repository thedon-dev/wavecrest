import React from "react";
import headImg from "../assets/marine-support.jpg";

const MarineSupport = () => {
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div className="mt-5">
        <p className="text-sm text-justify">
          <strong>Wavecrest Offshore Limited</strong> has developed a range of
          technologies and methods using automated and semi-automated tank
          cleaning heads, vacuum transfer systems and other pumping solutions to
          clean tanks and vessels either remotely or with minimum man entry.{" "}
          <br /> <br />
          All tank and vessel entries are potentially dangerous therefore where
          practical; operatives will use remote cleaning/flushing techniques. if
          and when confirmed space entry is required our personnel work under
          precise and comprehensive procedures, including task specific safety
          and escape routines using the correct breathing apparatus and
          atmospheric monitoring. <br /> <br />
          <strong>Wavecrest Offshore Limited</strong> own an extensive inventory
          of latest specification breathing apparatus, monitoring and
          communication systems. a unique combination of our specialist
          equipment highly trained operatives and safe working procedures all
          contribute towards providing a consistent and proven level of
          performance and safety. <br /> <br />
          Industrial cleaning equipment is a range of high specification vacuum,
          transfer equipment providing a range of airflow up to 7650m3 /hr
          (4500cfm) and dependent on the specific gravity (SG) and composition
          of the material a removal rate of up to 12m3 /hr.
        </p>
      </div>
    </section>
  );
};

export default MarineSupport;
