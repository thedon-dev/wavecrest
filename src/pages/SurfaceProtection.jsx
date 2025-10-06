import React from "react";
import headImg from "../assets/SurfaceProtection.jpg";

const SurfaceProtection = () => {
  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>
      <div className="mt-5">
        <p className="text-sm text-justify">
          <strong>Wavecrest Offshore Limited</strong> has extensive knowledge
          and practical experience in the various techniques available for
          surface preparation and associated protective surface preparation and
          protective coating application methods to meet required industry
          quality standards. <br /> <br />
          We own an extensive inventory of equipment including semi-automated
          propriety systems enabling us to undertake surface preparation by
          means of UHP water jetting (Hydro-blasting), abrasive (wet and dry)
          blasting and mechanical methods including dust-free and recyclable
          options. Once prepared, we can apply a range of coating and composites
          including industrial epoxies, alkyds and urethane, non-slip heckling
          and coatings, screeds and tiles, tank and vessel linings and anti
          fouling coatings by means of conventional spray, airless spray or
          manual brush roller application as appropriate integrity. <br />
          <br />
          Our core in-house capabilities and project management skills gives us
          the ability to provide integrated solutions and to deliver turnkey
          painting programmes for our clients as they combat corrosion and
          maintain their assets integrity.
        </p>

        <h1 className="text-2xl font-bold mt-10">
          Offshore Surface Protection
        </h1>
        <p className="text-sm text-justify mt-5">
          Reliability of our surface protection products, performance and
          services is key to all aspects of our operations. We are confident
          that we have the specialist technical skills, resources and
          capabilities to excel in service delivery. <br /> <br />
          Our capability includes surface protection, passing fire protection,
          composite wraps and repair technology, technical support, pre-survey
          work and cost containment. <br /> <br />
          We have the resource capability to mobilise qualified supervision and
          inspectors. Our highly skilled labour force consist of leading experts
          in their fields and are fully conversant in dry and wet blasting
          offshore techniques and painting offshore also.
        </p>

        <h1 className="text-2xl font-bold mt-10">Tank Coating</h1>
        <p className="mt-5 text-sm text-justify">
          You can use the best coating/paint products in the world, but if the
          surface is not prepared properly before the application, premature
          failure of the coating and deterioration of the substrate metal is
          inevitable. Our tank Coating Specialists study each project and
          determine the optimum approach to surface preparation based on site
          specific conditions such as tank materials, existing corrosion,
          humidity and other environmental conditions.
        </p>
      </div>
    </section>
  );
};

export default SurfaceProtection;
