import { useEffect } from "react";
import Heading from "../components/Heading";
import { aboutItems, aboutMore, whyPac } from "../utils/data";
import book from "../assets/images/book.jpg";
import pattern from "../assets/images/pattern.jpg";
import people from "../assets/images/people.jpg";
import laptops from "../assets/images/laptops.jpg";
import research from "../assets/images/research.jpg";
import coffee from "../assets/images/coffee.jpg";
import { GiStairsGoal } from "react-icons/gi";
import { IoMdListBox } from "react-icons/io";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="about">
      <PageHeader text="About us" />
      <section className="section-two">
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
            {/* <button>Learn more</button> */}
          </div>
          <div className="right">
            <div className="image">
              <img src={book} alt="prototyping" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="content">
          <div className="left">
            <img src={people} alt="people" className="people" />
            <img src={research} alt="research" className="research" />
          </div>
          <div className="right">
            <h3>WHO WE ARE</h3>
            <h1>Know About Us</h1>
            <div className="lines">
              <span className="dot-line"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <p>
              We draw from extensive multi-sector experience and deep
              capabilities in supporting clients at different stages of their
              journey with initiatives aimed at facilitating the achievement of
              clients’ goals strategy.
            </p>
            <div className="bottom">
              <div className="goal item">
                <div className="icon">
                  <GiStairsGoal />
                </div>
                <div className="text">
                  <h2>Goal</h2>
                  <p>
                    To produce analytically ambitious, client/business-focused
                    research in a fast-paced environment where time to market is
                    critical.
                  </p>
                </div>
              </div>
              <div className="objectives item">
                <div className="icon">
                  <IoMdListBox />
                </div>
                <div className="text">
                  <h2>Objectives</h2>
                  <p>
                    <span>
                      To produce timely, creative and comprehensive research in
                      the industry that is built on integrity, objectivity and
                      exceptional service.
                    </span>
                    <span>
                      To deliver innovative research products in our industry
                      and be among the best research experts in our focus
                      sectors.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="heading">
          <Heading text="PAC Research LTD/GTE" />
        </div>
        <div className="content">
          <div className="left">
            <p>
              PAC Research is powering business across marketplaces through
              information, insights, and technology that enable customers to
              execute critical business decisions with confidence. By coalescing
              an exclusive platform with best-in-class data and analytics, we
              link businesses and public entities to opportunities - we drive
              performance, innovation and progress for our customers and
              partners.
            </p>
            <p>
              PAC Research leverages contemporary technologies and innovative
              instruments to create industry-leading analysis, insights and
              investment advice.
            </p>
          </div>
          <div className="right">
            <div className="image">
              {" "}
              <img src={coffee} alt="mapPaper" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-five">
        <Heading text="Why PAC Research?" />
        <p>
          We deploy analytics, machine learning and other research tools to
          deliver thorough and impactful services to our clients.
        </p>
        <div className="content">
          {whyPac.map((item, index) => (
            <div className="item" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="section-six"
        style={{ backgroundImage: `url(${laptops})` }}
      >
        {aboutMore.map((i, index) => {
          const { icon, heading, items } = i;
          return (
            <div key={index} className="main">
              <span>{icon}</span>
              <h2>{heading}</h2>
              <hr />
              <div className="items">
                {items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default About;
