import React, { useState } from "react";
import "./HairForm.css";

const HairForm = () => {

  let [data, setData] = useState({
    userName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
  });

  let { name, email, phone, service, location } = data;

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
      service,
      location,
    };
    console.log(payload);
  };
  return (
    <div className="hairFormContainer" >
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <pre>Booking Appointment</pre>
          </legend>
          <br />
          <table>
            <tr>
              <label htmlFor="name">Name :</label>

              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <label htmlFor="email">Email :</label>
              <td>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <label htmlFor="phone">Phone :</label>
              <td>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <label htmlFor="serv">Service :</label>
              <td>
                <select name="" id="">
                  <option value=""> Services type</option>
                  <option value="">Hair Service</option>
                  <option value="">Nail Service</option>
                  <option value="">Facial Service</option>
                  <option value="">Spa Service</option>
                  <option value="">Lashes Service</option>
                </select>
              </td>
            </tr>
            <tr>
              <label htmlFor="loc">Location :</label>
              <td>
                <input
                  type="text"
                  id="loc"
                  name="location"
                  value={location}
                  onChange={handleData}
                />
              </td>
            </tr>
            <button className="sub">Submit</button>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default HairForm;
