import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    const field = e.target.name;
    const newState = { ...formState };
    newState[field] = e.target.value;
    setFormState(newState);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_elf30k7",
      "template_93ccbes",
      form.current,
      "user_fpv6CYPnfZjJz32J6KSs8"
    );

    form.current.reset();
  };

  return (
    <div className="contact">
      <h2 className="section-title">Drop a message</h2>
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={onChange} />
        </div>

        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input name="subject" id="subject" onChange={onChange} />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={onChange}
            maxLength={55}
          />
        </div>
        <div className="input-group submit-cont">
          <input type="submit" value={"send message"} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
