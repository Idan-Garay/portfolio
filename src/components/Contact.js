import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9jg5cpe",
        "template_93ccbes",
        form.current,
        "user_fpv6CYPnfZjJz32J6KSs8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="slide" id="contact">
      <div className="content">
        <div className="section-left">Drop a message</div>
        <form ref={form} className="section-right" onSubmit={sendEmail}>
          <div className="input-group flex-col">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter email"
              name="user_email"
              id="email"
              className="border-none"
            />
          </div>
          <div className="input-group flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter message"
              name="message"
              id="message"
              className="border-none"
            ></textarea>
          </div>
          <div className="input-group">
            <button className="border-none" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
