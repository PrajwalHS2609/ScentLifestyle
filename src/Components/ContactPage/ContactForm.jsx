import React, { useState } from "react";
import "./../FranchisePage/FranchisePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    detail: "",
  });

  let { name, email, phone, detail } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_wwo15yl',"template_dq6vg9f",e.target,"YMANvl26uUKa6DQU3")
  //   // let payload = {
  //   //   name,
  //   //   email,
  //   //   phone,
  //   //   detail,
  //   // };
  //   // console.log(payload);
  //   // window. location. reload("/franchise")
  // };
  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   // emailjs.sendForm('service_wwo15yl',"template_dq6vg9f",e.target,"YMANvl26uUKa6DQU3")
  //   const serviceId = "service_n5j9zu1";
  //   const templateId = "template_yy6q8s9";
  //   const publicKey = "kcJN8Dq5IrzOZobBz";

  //   const templateParams = {
  //     from_name: name,
  //     from_email: email,
  //     from_phone: phone,
  //     to_name: "SCENT Salon",
  //     from_details: detail,
  //   };
  //   emailjs
  //     .sendForm(serviceId, templateId,templateParams, publicKey)
  //     .then((response) => {
  //       console.log("Mail sent successfully", response);
  //       name("");
  //       email("");
  //       phone("");
  //       toast.success("Email sent successfully");
  //     })
  //     .catch((error) => {
  //       console.log("error sending mail", error);
  //       toast.error("Error sending mail");
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wwo15yl",
        "template_yy6q8s9",
        e.target,
        "kcJN8Dq5IrzOZobBz"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
          window.location.assign("/contact-us");
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send mail");
        }
      );
  };
  return (
    <div className="franchiseFormContainer">
      <ToastContainer />

      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <br />
          <table>
            <tr>
              {/* <label htmlFor="name">Name :</label> */}

              <td>
                <FontAwesomeIcon
                  icon={faUser}
                  className="fraIcon"
                ></FontAwesomeIcon>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="email">Email :</label> */}
              <td>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fraIcon"
                ></FontAwesomeIcon>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="phone">Phone :</label> */}
              <td>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fraIcon"
                ></FontAwesomeIcon>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr className="fraTr">
              {/* <label htmlFor="detail">Details :</label> */}

              <textarea
                id="detail"
                name="detail"
                value={detail}
                type="text"
                placeholder="Details"
                cols={26}
                rows={3}
                onChange={handleData}
                autoComplete="no"
                required
              />
            </tr>
            <button className="sub" type="handlesubmit">
              Submit
            </button>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
