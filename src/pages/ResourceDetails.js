import React from "react";
import pattern from "../assets/images/pattern.jpg";
import { Link } from "react-router-dom";
import { headings } from "../utils/resourcesData";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const ResourceDetails = () => {
  return (
    <div className="resource-details">
      <section
        className="page-header"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <h1>Expand SEO</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/resources">Resources</Link> /
          Expand SEO
        </p>
      </section>
      <div className="section-two">
        <div className="content-center">
          <div className="content">
            <div className="right">
              {headings.map((item) => {
                const { text, icon, id } = item;

                return (
                  <div
                    key={id}
                    className={`${id === 2 ? "item active" : "item"}`}
                  >
                    <span>{icon}</span>
                    <h2>{text}</h2>
                  </div>
                );
              })}
            </div>
            <div className="left">
              <div className="top">
                <p>all</p> <span>50</span>
              </div>
              <div className="bottom">
                {headings[0].items.map((i, index) => {
                  const { head, text } = i;
                  return (
                    <div key={index} className="item">
                      <span>
                        <BsFileEarmarkPdfFill />
                      </span>
                      <h2>{head}</h2>
                      <p>
                        <RiPagesLine /> {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
