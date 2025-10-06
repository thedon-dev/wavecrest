import React from "react";
import headImg from "../assets/rope-access.jpg";
import ListComp from "../components/ListComp";

const RopeAccess = () => {
  const tradesmen = [
    "Painters",
    "Blasters",
    "Pipe Work Inspectors",
    "Pipe Fitters",
    "NDT Technicians and Inspectors",
    "Welders and Fabricators",
    "Riggers",
    "Insulators",
    "Electricians",
    "Plumbers",
    "General Maintenance Engineers",
  ];
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5">
        <p className="text-sm text-justify">
          Industrial rope access has been developed by <strong>IRATA</strong>{" "}
          (the Industrial Rope Access Trade Association) over the last 25 years.
          The safety and ease of access has elevated rope access to a point
          where it is the chosen means of access for much of the work in the
          offshore oil and gas industry as well as a range of projects in
          construction, civil engineering, the built and natural environment and
          much more. <br /> <br />
          <strong>Wavecrest</strong> success is based on thorough training and
          strict work guidelines that deliver an unrivaled safe working record
          year after year. <br /> <br />
          With industry leading expertise, rope access is an intrinsically safe
          form of access for working at height or areas that are difficult to
          reach with traditional forms of access. <br /> <br />
          Furthermore, the nature of rope access reduces project time, lowering
          downtime and minimizing the impact on ongoing operations,
          significantly reducing the cost to clients in comparison to
          traditional methods. <br /> <br />
          Rope Access has brought tremendous benefits to our customers. All of
          our experienced personnel are <strong>IRATA</strong> qualified,
          ensuring that work is carried out in a safe, reliable manner. <br />{" "}
          <br />
          <strong>Wavecrest</strong> technicians are not only trained in access,
          but are multi-disciplinary operatives. Services offered can range from
          maintenance services such as coatings and insulation, to specialist
          services such as Non-Destructive Testing (NDT), inspections and plant
          integrity.
        </p>
        <ListComp
          services={tradesmen}
          showHeading={true}
          headingText="Our IRATA qualified tradesmen include: "
        />
      </div>
    </section>
  );
};

export default RopeAccess;
