import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import headImg from "../assets/careers.jpg";

const Careers = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("Message sent successfully!");
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Failed to send message, please try again.");
    //     }
    //   );
  };

  return (
    <section>
      <div>
        <img src={headImg} alt="" className="mt-5 object-cover w-full" />
      </div>

      <div className="mt-5">
        <p className="text-sm text-justify">
          <strong>Wavecrest Offshore Limited</strong> seeks talented individuals
          who share our passion and drive for excellence and hard work.
          Wavecrest Offshore Limited has the technology and vision that are
          needed to dramatically improve productivity and change the way people
          work. People are the essential component for the development of our
          technology and the execution of our vision. We are always on the
          lookout for talented individuals across all functions who share our
          passion for technology, excellence and innovation. <br />
          <br />
          Please upload your CV using the CV Upload Form. Please note that only
          short listed applicants will be contacted. Wavecrest Offshore Limited
          is an equal opportunity employer. We do not discriminate on grounds of
          gender, race or colour. To contact us via e-mail, please send to
          info@wavecrestoffshoresupply.com.
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-10">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-2">
            <label htmlFor="first_name" className="text-sm ">
              First Name (required)
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              required
              className="border border-blue-500 border-l-4 py-2 px-1 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="last_name" className="text-sm ">
              Last Name (required)
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              required
              className="border border-blue-500 border-l-4 py-2 px-1 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="user_email" className="text-sm ">
              Email Address (required)
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="border border-blue-500 border-l-4 py-2 px-1 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="subject" className="text-sm ">
              Subject (required)
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="border border-blue-500 border-l-4 py-2 px-1 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="message" className="text-sm ">
              Message (required)
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="border border-blue-500 border-l-4 h-[5rem] resize-none py-2 px-1 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="cv_upload" className="text-sm ">
              Upload CV (required)
            </label>
            <input
              type="file"
              name="attachment"
              id="cv_upload"
              required
              className="border border-blue-500 border-l-4 py-1 px-1 focus:outline-0 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full mt-5 cursor-pointer py-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Careers;
