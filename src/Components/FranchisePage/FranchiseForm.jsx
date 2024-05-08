import React, { useState } from "react";
import "./FranchisePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const FranchiseForm = () => {
  let [data, setData] = useState({
    userName: "",
    email: "",
    phone: "",
    detail: "",
    location: "",
  });

  let { name, email, phone, detail, location } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name,
      email,
      phone,
      detail,
      location,
    };
    console.log(payload);
  };
  return (
    <div className="franchiseFormContainer">
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
              />
            </tr>
            <button className="sub">Submit</button>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default FranchiseForm;
