import React from "react";
import headImg from "../assets/HSE.jpg";

const HseQuality = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold">Health, Safety and Management</h1>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="flex flex-col gap-8 text-sm mt-10">
        <p className="font-semibold">
          Wavecrest offshore Ltd, our foremost commitment is to conduct all
          operations with utmost consideration for health and safety,
          prioritizing the well-being of individuals and assets affected by our
          activities. We understand that health, safety, and operational
          efficiency are interconnected, forming an integral part of our daily
          endeavors.
        </p>
        <p>
          To uphold this commitment, we have implemented rigorous measures to
          identify, monitor, and mitigate risks associated with our projects. We
          actively involve and consult with our workforce, partners, clients,
          and subcontractors to foster a positive health and safety culture
          throughout the organization. <br /> <br />
          Our overarching objective is to foster a safe working environment by
          promptly identifying and assessing risks, adhering to best practices,
          and establishing robust systems of work across all company activities.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-bold">Quality Management System</h1>
        <p className="text-sm mt-6">
          Regarding quality management, we are dedicated to continuously
          enhancing our quality management system by setting, implementing, and
          reviewing quality objectives across all facets of our operations. This
          commitment is made possible through the unwavering support and
          dedication of every employee, ensuring that we operate efficiently to
          meet or exceed customer expectations. Currently, we are collaborating
          with Bureau Veritas on quality assurance initiatives to uphold and
          manage our documented and integrated quality standards.
        </p>
      </div>
    </section>
  );
};

export default HseQuality;
