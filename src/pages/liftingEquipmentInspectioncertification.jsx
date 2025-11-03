import React from "react";
import pic1 from "../assets/marine-support.jpg";
import pic2 from "../assets/pic2.jpg";
// import liftingImg from "../assets/computer_stat.jpg";

const LiftingInspectionPage = () => {
  const inspection = [
    {
      text: "Elevators/Lifts",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="#2563EB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.299805 1.00005C0.299805 0.613449 0.613205 0.300049 0.999805 0.300049H42.9998C43.3864 0.300049 43.6998 0.613449 43.6998 1.00005V43C43.6998 43.3867 43.3864 43.7001 42.9998 43.7001H35.2389C34.8523 43.7001 34.5389 43.3867 34.5389 43V41.874H9.46067V43C9.46067 43.3867 9.14727 43.7001 8.76067 43.7001H0.999805C0.613205 43.7001 0.299805 43.3867 0.299805 43V1.00005ZM9.46067 40.474H21.2998V11.287H9.46067V40.474ZM22.6998 11.287V40.474H34.5389V11.287H22.6998ZM1.6998 1.70005V42.3H8.06067V10.587C8.06067 10.2004 8.37407 9.887 8.76067 9.887H35.2389C35.6255 9.887 35.9389 10.2004 35.9389 10.587V42.3H42.2998V1.70005H1.6998ZM15.57 4.15725C15.8434 3.88388 16.2866 3.88388 16.56 4.15725L18.8426 6.43986C19.116 6.71322 19.116 7.15644 18.8426 7.42981C18.5692 7.70317 18.126 7.70317 17.8527 7.42981L16.065 5.64217L14.2774 7.42981C14.004 7.70317 13.5608 7.70317 13.2874 7.42981C13.0141 7.15644 13.0141 6.71322 13.2874 6.43986L15.57 4.15725ZM25.157 4.15725C25.4304 3.88388 25.8736 3.88388 26.147 4.15725L27.9346 5.94488L29.7222 4.15725C29.9956 3.88388 30.4388 3.88388 30.7122 4.15725C30.9855 4.43061 30.9855 4.87383 30.7122 5.1472L28.4296 7.42981C28.2983 7.56108 28.1202 7.63483 27.9346 7.63483C27.7489 7.63483 27.5709 7.56108 27.4396 7.42981L25.157 5.1472C24.8836 4.87383 24.8836 4.43061 25.157 4.15725ZM37.9628 20.174C37.9628 19.5352 38.4806 19.0174 39.1194 19.0174C39.7581 19.0174 40.2759 19.5352 40.2759 20.174C40.2759 20.8127 39.7581 21.3305 39.1194 21.3305C38.4806 21.3305 37.9628 20.8127 37.9628 20.174ZM37.9628 23.8261C37.9628 23.1874 38.4806 22.6696 39.1194 22.6696C39.7581 22.6696 40.2759 23.1874 40.2759 23.8261C40.2759 24.4649 39.7581 24.9827 39.1194 24.9827C38.4806 24.9827 37.9628 24.4649 37.9628 23.8261Z"
            fill="#2563EB"
          ></path>
        </svg>
      ),
    },
    {
      text: "Lifting Appliance and Lifting Gear",
      icon: (
        <svg
          width="40"
          height="48"
          viewBox="0 0 40 48"
          fill="#2563EB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.0515 0.458724C32.1756 0.359331 32.3299 0.305176 32.489 0.305176H36.889C37.674 0.305176 38.3217 0.585536 38.7711 1.0579C39.2117 1.52102 39.4223 2.12716 39.4223 2.71794C39.4223 3.30872 39.2117 3.91486 38.7711 4.37798C38.3217 4.85035 37.674 5.13071 36.889 5.13071H36.1222V16.4541H36.7331C37.8199 16.4541 38.635 17.4484 38.4219 18.5141L37.6442 22.4025C37.5788 22.7297 37.2915 22.9652 36.9578 22.9652H36.1245V23.7986C36.1245 23.8648 36.1498 23.9527 36.2547 24.0712C36.3641 24.1946 36.5322 24.317 36.7352 24.4224C37.8112 24.9805 38.2034 26.1623 37.9802 27.1664C37.7458 28.2205 36.8432 29.0986 35.4245 29.0986C34.9847 29.0986 34.4511 28.8996 34.0289 28.5618C33.5845 28.2063 33.1911 27.6366 33.1911 26.8652C33.1911 26.4786 33.5045 26.1652 33.8911 26.1652C34.2777 26.1652 34.5911 26.4786 34.5911 26.8652C34.5911 27.1161 34.709 27.313 34.9034 27.4686C35.1201 27.6419 35.3532 27.6986 35.4245 27.6986C36.1727 27.6986 36.5184 27.2903 36.6135 26.8626C36.7197 26.3848 36.5226 25.8892 36.0906 25.6651C35.5552 25.3874 34.7245 24.7901 34.7245 23.7986V22.9652H33.8911C33.5575 22.9652 33.2702 22.7297 33.2047 22.4025L32.4271 18.5141C32.2139 17.4484 33.029 16.4541 34.1158 16.4541H34.7222V5.13071H32.7698L11.1889 25.7724V34.0711H11.9556C12.3422 34.0711 12.6556 34.3845 12.6556 34.7711V43.2052L13.8108 43.9761C14.0054 44.106 14.1222 44.3244 14.1222 44.5584V47.0052C14.1222 47.3918 13.8088 47.7052 13.4222 47.7052H1.2C0.813401 47.7052 0.5 47.3918 0.5 47.0052V44.5584C0.5 44.3244 0.616861 44.106 0.811449 43.9761L1.96667 43.2052V34.7711C1.96667 34.3845 2.28007 34.0711 2.66667 34.0711H3.43333V25.4733C3.43333 24.0923 3.88541 22.9914 4.62495 22.2322C5.01047 21.8364 5.46326 21.545 5.94728 21.3574L32.0515 0.458724ZM6.51302 22.6405C6.52254 22.6374 6.53202 22.6341 6.54144 22.6306C6.78955 22.5456 7.04988 22.503 7.31111 22.503C7.92656 22.503 8.53705 22.7395 8.9944 23.209C9.33983 23.5637 9.62119 24.0759 9.73475 24.7733H4.88748C5.00104 24.0759 5.2824 23.5637 5.62783 23.209C5.88363 22.9464 6.18733 22.7567 6.51302 22.6405ZM4.83333 26.1733V34.0711H9.78889V26.1733H4.83333ZM10.9999 24.0158C10.8013 23.3006 10.4541 22.7012 9.99727 22.2322C9.52156 21.7438 8.9434 21.4143 8.33052 21.2428L31.789 2.46228V4.1316L10.9999 24.0158ZM33.189 3.73071H36.889C37.3261 3.73071 37.5952 3.58288 37.7568 3.41295C37.9273 3.23379 38.0223 2.98355 38.0223 2.71794C38.0223 2.45234 37.9273 2.2021 37.7568 2.02293C37.5952 1.85301 37.3261 1.70518 36.889 1.70518H33.189V3.73071ZM2.87878 44.2796L1.9 44.9328V46.3052H12.7222V44.9328L11.7434 44.2796H2.87878ZM11.2556 42.8796V35.4711H3.36667V42.8796H11.2556ZM34.1158 17.8541C33.9125 17.8541 33.76 18.0401 33.7999 18.2395L34.465 21.5652H36.384L37.0491 18.2395C37.089 18.0401 36.9365 17.8541 36.7331 17.8541H34.1158ZM22.5158 26.1732C19.6789 26.1732 17.3792 28.4729 17.3792 31.3098C17.3792 34.1466 19.6789 36.4464 22.5158 36.4464C23.9344 36.4464 25.2176 35.8722 26.1479 34.9419C27.0782 34.0116 27.6524 32.7284 27.6524 31.3098C27.6524 28.4729 25.3526 26.1732 22.5158 26.1732ZM15.9792 31.3098C15.9792 27.6997 18.9057 24.7732 22.5158 24.7732C26.1258 24.7732 29.0524 27.6997 29.0524 31.3098C29.0524 32.8624 28.5104 34.2894 27.6064 35.4104L28.1604 35.9645L28.6946 35.4302C28.968 35.1569 29.4112 35.1569 29.6845 35.4302L34.559 40.3045C35.4008 41.1463 35.4009 42.5112 34.559 43.353C33.7172 44.1949 32.3523 44.1949 31.5105 43.353L26.6361 38.4787C26.3627 38.2053 26.3627 37.7621 26.6361 37.4887L27.1704 36.9544L26.6164 36.4004C25.4953 37.3044 24.0684 37.8464 22.5158 37.8464C18.9057 37.8464 15.9792 34.9198 15.9792 31.3098ZM29.1896 36.9151L28.121 37.9837L32.5004 42.3631C32.7955 42.6582 33.274 42.6582 33.5691 42.3631C33.8642 42.068 33.8642 41.5895 33.5691 41.2944L29.1896 36.9151Z"
            fill="#2563EB"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="bg-white">
      <main className="flex justify-center items-center p-4 flex-col mt-10">
        <div className="sm:w-full w-[70%] md:px-10">
          {/* Hero Section */}
          <section className=" text-center">
            <p className="text-sm text-blue-600 mb-6">Inspection SERVICES</p>
            <h1 className="text-3xl md:text-5xl sm:w-full w-[70%] font-bold">
              Lifting Equipment Inspection & Certification
            </h1>
            <p className="text-2xl text-blue-600 pt-6 mb-2">
              Ensure regulatory compliance and safe lifting operations
            </p>
          </section>

          {/* Intro Section */}
          <section className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-lg mb-6">
              As one of the major global players in lifting equipment inspection
              and certification, Axess Group ensures that regulatory standards
              and requirements are met, to ensure safe lifting operations and
              minimise unnecessary delays or downtime.
            </p>

            <p className="text-lg mb-6">
              Our team of multi-skilled engineers and experts have extensive
              experience in structural design and calculation, control systems,
              electrical, mechanical and hydraulic systems to provide 24/7 back
              office support to our inspectors and to meet client requests.
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
          <div className="md:px-10">
            <h1 className="text-2xl md:text-4xl text-left">
              Lifting equipment inspection and certification services
            </h1>
            <p className="text-lg mt-4 mb-6">
              We have gained extensive experience through frame agreements and
              projects for our clients worldwide, across industries such as oil
              and gas, marine and renewables. With specially adapted systems and
              highly competent employees, we can perform the following services
              for lifting equipment such as elevators, lifting appliance and
              lifting gear:
            </p>

            <ul className="list-disc ml-6">
              <li>Initial certifications</li>
              <li>Baseline inspections</li>
              <li>
                Periodic inspection of complex and non-complex lifting equipment
              </li>
              <li>
                Recertifications – 5 yearly or after special circumstances
              </li>
              <li>Design verifications, GAP analyses and advisory services</li>
            </ul>

            <p className="text-lg mt-4 mb-6">
              All our services comply with national rules and regulations,
              client-specific requirements and manufacturer’s recommendations.
              As a global provider of inspection services, we have deep industry
              knowledge and experience with most regulatory frameworks such as
              NORSOK, LOLER, CAPP, NR12, API, ILO 152 and Class rules (DNV, ABS,
              Lloyds).
            </p>

            <div className="flex justify-center items-center">
              <img
                src={pic2}
                alt="Lifting equipment inspection"
                className="h-[500px] w-[60%] pt-6 mb-6 shadow-lg"
              />
            </div>

            <h1 className="text-2xl  md:text-4xl mb-6 font-semibold text-center">
              Our certifications, accreditations and memberships:
            </h1>
            <ul className="list-disc ml-6 text-lg">
              <li className="p-2">
                Certified Enterprise of Competence since 2003 by the Norwegian
                Labour Inspection Authority
              </li>
              <li className="p-2 text-lg">LEEA membership</li>
              <li className="p-2 text-lg">
                Norwegian Maritime Authority – approved Enterprise of Competence
                A-1 and B-1
              </li>
              <li className="p-2 text-lg">
                American Petroleum Institute (API) Crane inspectors – individual
                approved crane inspectors
              </li>
              <li className="p-2 text-lg">
                Global Wind Organisation (GWO) – certified personnel in the wind
                industry
              </li>
              <li className="p-2 text-lg">
                Frame agreement with the Petroleum Safety Authority Norway (PSA)
                for technical evaluation related to investigation and
                supervision
              </li>
            </ul>

            {/*  */}
            {/* <div>
              <h1 className="text-2xl mt-6 md:text-4xl text-left">
                Reporting software for lifting equipment inspections
              </h1>
              <p className="text-lg mt-4 mb-6">
                Reporting is done in Bridge, Wavecreast Digital’s software. Lifting
                equipment inspections will be reported in the Equip module, a
                purpose-built software solution to handle compliance of all
                lifting equipment for equipment owners, providing them with full
                control of the status and history of equipment and their
                documentation. Aside from Wavecreast and our clients, third parties
                also utilise Equip to achieve streamlined and high-quality
                inspections. In addition to periodic surveys and certifications,
                Wavecreast Group, as an Enterprise of Competence, has proven to be a
                value-adding partner for our clients in the following areas:
              </p>

              <ul className="list-disc ml-6 pl-12 text-lg">
                <li className="p-2">
                  New builds, Upgrade and Modification projects
                </li>
                <li className="p-2 text-lg">
                  New builds, Upgrade and Modification projects
                </li>
                <li className="p-2 text-lg">
                  Comprehensive knowledge of rules and regulations
                </li>
                <li className="p-2 text-lg">
                  Design verification and certification of lifting equipment and
                  lifting operations
                </li>
                <li className="p-2 text-lg">
                  Special projects including temporary lifting arrangements,
                  special lifting equipment and operations
                </li>
                <li className="p-2 text-lg">
                  Technical support during engineering, planning and execution
                  of projects
                </li>
                <li className="p-2 text-lg">Training programmes</li>
              </ul>

              <p className="text-lg mt-4 mb-6">
                By having a lean organisation, efficient project management and
                the right tools, we aim to give our clients the best combination
                of services to achieve predictable cost and response time.
              </p>

              <img
                src={liftingImg}
                alt="Lifting equipment inspection"
                className="h-[600px] w-full pt-6 mb-6"
              />
              <section className="py-12 mb-4 border rounded-md border-blue-500 text-center">
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
              <h1 className="text-2xl mt-6 md:text-4xl text-left w-[80%]">
                We provide lifting inspection and certification services for the
                following:
              </h1>
              <div className="grid grid-cols-1 gap-6 mt-10 w-full">
                {inspection.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-start gap-8  p-2 border rounded-xl mb-4 shadow-sm hover:shadow-md transition bg-white"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl text-center">{item.text}</h2>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LiftingInspectionPage;
