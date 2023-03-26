import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { BsArrowRight, BsPeopleFill } from "react-icons/bs";
import { ImDatabase, ImEarth } from "react-icons/im";
import { VscRepo } from "react-icons/vsc";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { services } from "../utils/data.js";
import ServiceItem from "../components/ServiceItem";
import Heading from "../components/Heading";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="services">
      <PageHeader text="services" />
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
            {services.map((service, index) => {
              let arrange;
              let check = (index + 1) % 2;
              if (check === 0) {
                arrange = true;
              } else {
                arrange = false;
              }
              console.log(arrange);
              return (
                <ServiceItem
                  key={index}
                  {...service}
                  button={false}
                  arrange={arrange}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="heading">
          {" "}
          <Heading text="We Offer" />
        </div>

        <div className="items">
          <div className="item">
            <span>
              <BsPeopleFill />
            </span>
            <p>consultancy services</p>
          </div>
          <div className="item">
            <span>
              <ImDatabase />
            </span>
            <p>data analytics services</p>
          </div>
          <div className="item">
            <span>
              <VscRepo />
            </span>
            <p>specialized reports</p>
          </div>
          <div className="item">
            <span>
              <HiUserGroup />
            </span>
            <p>services to PAC group</p>
          </div>
          <div className="item">
            <span>
              <ImEarth />
            </span>
            <p>web traffic</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
