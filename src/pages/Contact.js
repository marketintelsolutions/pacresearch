import React from "react";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <section className="contact">
      <PageHeader text="contact" />

      <div className="section-two">
        <div className="left">
          <h2>Get in touch</h2>{" "}
          <p>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us...
          </p>
        </div>
        <div className="right"></div>
      </div>
      <div className="section-three">
        <div className="top">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <h2>Connect with one of our global offices</h2>
      </div>
    </section>
  );
};

export default Contact;
