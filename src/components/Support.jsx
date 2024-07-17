/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support request submitted:", formData);
    // Here you can add code to send the form data to your backend
    setFormData({ name: "", email: "", message: "" });
    alert("Support request submitted successfully!");
  };

  return (
    <div className="container-fluid ">
      <h1 className="mb-small">Support</h1>
      <p className="text-black text-center">
        <b>If you have any issues or questions, please fill out the form below and
        our support team will get back to you as soon as possible.</b>
      </p>
      <div className="d-flex justify-content-center flex-wrap">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-white">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 text-white">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group text-white">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-1">
            Submit
          </button>
        </form>
      </div>

      <section className="contact-section mt-5 text-white text-center">
        <h2><b>Contact Information : </b></h2>
        <ul>
          <li>Phone: +91 8584027372</li>
          <li>Email: souravgiri697@gmail.com</li>
          <li>Address: bolbo na ....</li>
        </ul>
      </section>
    </div>
  );
}

export default Support;
