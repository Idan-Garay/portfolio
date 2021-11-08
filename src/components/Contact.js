import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="slide" id="contact">
      <div className="content">
        <div className="section-left">Drop a message</div>
        <div className="section-right">
          <div className="input-group flex-col">
            <label htmlForm="email">Email</label>
            <input
              placeholder="Enter email"
              name="email"
              id="email"
              className="border-none"
            />
          </div>
          <div className="input-group flex-col">
            <label htmlForm="message">Message</label>
            <textarea
              placeholder="Enter message"
              name="message"
              id="message"
              className="border-none"
            ></textarea>
          </div>
          <div className="input-group">
            <button className="border-none">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
