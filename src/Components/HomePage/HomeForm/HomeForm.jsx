import React, { useState } from "react";
import "./HomeForm.css";

const HomeForm = () => {
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
    <div className="homeFormContainer">
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
                  required
                  autoComplete="off"
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
                  required
                  autoComplete="off"
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
                  required
                  autoComplete="off"
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <label htmlFor="serv">Service :</label>
              <td>
                <select
                  name="service"
                  value={service}
                  onChange={handleData}
                  id="serv"
                  required
                  autoComplete="off"
                >
                  <option value="Service"> Services type</option>
                  <option value="hair">Hair Service</option>
                  <option value="nail">Nail Service</option>
                  <option value="facial">Facial Service</option>
                  <option value="spa">Spa Service</option>
                  <option value="lashes">Lashes Service</option>
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
                  required
                  autoComplete="off"
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

export default HomeForm;
