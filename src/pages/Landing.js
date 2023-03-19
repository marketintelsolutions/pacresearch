import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  GrFacebookOption,
  GrYoutube,
  GrInstagram,
  GrTwitter,
} from "react-icons/gr";
import prototyping from "../assets/images/prototyping.svg";
import about from "../assets/images/about.svg";
import Heading from "../components/Heading";
import ServiceItem from "../components/ServiceItem";
import { aboutItems, businessHome, services } from "../utils/data";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="landing">
      <section className="section-one">
        <div className="left">
          <div className="icons">
            <span>
              <GrFacebookOption />
            </span>{" "}
            <span>
              <GrYoutube />
            </span>{" "}
            <span>
              <GrInstagram />
            </span>{" "}
            <span>
              <GrTwitter />
            </span>
          </div>
          <Heading text="innovative research" />
          <h1>deliver thorough and impactful services</h1>
          <p>
            Deep understanding of industries across economies and leading
            through on diverse subjects.
          </p>
          <div className="button">
            <Link to="/about">learn more</Link>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={prototyping} alt="prototyping" />
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="content">
          <div className="top">
            <div className="left">
              <Heading text="services" />
              <h1>services we offer</h1>
              <p>
                Leverage our partnership with industry-leading data providers,
                people, tools and methodologies to provide world-class service.
              </p>
            </div>
            <div className="right">
              <Link to="/services">
                {" "}
                see all services <BsArrowRight />
              </Link>
            </div>
          </div>
          <div className="bottom">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="content">
          <div className="left">
            <Heading text="about us" />
            <h1> intellectually curious, imaginative & analytical</h1>
            <p>
              We draw on cleaner and richer data to help our customers gain
              greater insight, fuel innovation and effectively navigate this
              time of unequalled change.
            </p>
            <div className="items">
              {aboutItems.map((item) => {
                const { icon, text } = item;
                return (
                  <div className="about-item">
                    <span>{icon}</span> {text}{" "}
                  </div>
                );
              })}
            </div>
            <Link to="/about">Learn more</Link>
          </div>
          <div className="right">
            <div className="image">
              <img src={about} alt="prototyping" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-four">
        <Heading text="business processes" />
        <p>
          Deep understanding of industries across economies and leading through
          on diverse subjects.
        </p>
        <div className="content">
          {businessHome.map((item) => {
            const { icon, text } = item;
            return (
              <div className="business-item">
                <span>{icon}</span> <p>{text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Landing;
