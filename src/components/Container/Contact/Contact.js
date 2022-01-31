import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="section-title">Drop a message</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
