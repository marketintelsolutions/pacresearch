import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import contact from "../assets/images/contact.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="contact">
      <PageHeader text="contact" />

      <div className="section-two">
        <div className="content">
          <div className="left">
            <h2>Get in touch</h2>{" "}
            <p>
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us...
            </p>
          </div>
          <div className="right">
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="top">
          <div className="left item">
            <span>
              <BsFillTelephoneFill />
            </span>
            <h3>talk to us</h3>
            <p>
              Interested in PAC Reseach? Just pick up the phone to chat with a
              member of our sales team.
            </p>
            <p className="phone">+234 (1) 2716892</p>
          </div>
          <div className="right item">
            <span>
              <IoIosChatbubbles />
            </span>
            <h3>contact customer support</h3>
            <p>
              Sometimes you need a little help from your friends. Or a PAC
              Research support rep. Don’t worry… we’re here for you.
            </p>
            <button onClick={() => setIsFormOpen(true)}>contact support</button>
          </div>
        </div>
        <h2>Connect with one of our global offices</h2>
        <div className="map-center">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6872.809329961362!2d3.4169711217108767!3d6.4299045841600195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad0c43e0815%3A0xaf997fb4f01137aa!2s8A%20Elsie%20Femi%20Pearse%20St%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1681939608154!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="desc">
            <div className="desc-item">
              <h2>Headquarters</h2>
              <div className="address">
                <span>Plot 8A, Elsie Femi Pearse Street</span>
                <span>Off Adeola Odeku, Victoria Island Lagos</span>
                <span>P.O. Box 70823,</span>
                <span>Victoria Island, Lagos, Nigeria.</span>
              </div>
            </div>
            <div className="desc-item">
              <h2>Phone / Fax</h2>
              <div className="address">
                <span>+234 (1) 2716892</span>
                <span>+234 (1) 2718630</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="form">
          <form>
            <div className="icon" onClick={() => setIsFormOpen(false)}>
              <GrFormClose />
            </div>
            <h2>Contact PAC Research</h2>
            <p>
              Let’s get this conversation started. Tell us a bit about yourself,
              and we’ll get in touch as soon as we can.
            </p>
            <div className="names">
              <div className="name">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" />
              </div>
              <div className="name">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea name="message"></textarea>
            </div>
            <button type="button">contact us</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
