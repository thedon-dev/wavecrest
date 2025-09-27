import React from "react";
import headImg from "../assets/Ball-Valve.jpg";

const Valves = () => {
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="flex flex-col gap-8 text-sm mt-10">
        <p className="text-justify">
          We offer procurement management of valves and actuator that is
          technically based with design engineers, production engineers, valve
          technologists, and QA/QC personnel. Quality, safety, and customer
          service remain the highest priority to us. We monitor our
          manufacturers and suppliers to ensure they meet these same high
          standards, not only for Dovewell Oilfield Services Limited, but also
          for our customers. <br /> <br /> We would be proud to earn your
          business and become partners in the industry. Allow us the opportunity
          to serve you. You will experience first class service along with best
          in class products. Dovewell Oilfield Services Limited is your valve
          and automation connection to the world.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold">
          Dovewell Oilfield Services Limited is positioned as a major supplier
          of all types of valves for all major projects procurement needs
          covering:
        </h2>

        <ul className="list-disc ml-5 text-sm space-y-2 mt-5">
          <li>Floating Ball Valves</li>
          <li>Compact Ball Valves</li>
          <li>Split Body Side Entry Ball Valves</li>
          <li>Welded Body Side Entry</li>
          <li>Top Entry Valves</li>
          <li>Subsea Ball Valves</li>
          <li>Subsea Actuators</li>
          <li>3Way Ball Valves</li>
          <li>Crygenic Ball Valve</li>
        </ul>
      </div>
    </section>
  );
};

export default Valves;
