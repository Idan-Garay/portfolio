import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="section-title">Drop a message</h2>
      <form className="email-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" />
        </div>

        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input name="subject" id="subject" />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>
        <div className="input-group submit-cont">
          <button type="submit">send message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
