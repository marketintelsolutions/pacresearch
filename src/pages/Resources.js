import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { headings } from "../utils/resourcesData";

const Resources = () => {
  return (
    <section className="resources">
      <PageHeader text="resources" />
      <div className="section-one">
        <div className="content-head-center">
          <div className="items">
            {headings.map((item) => {
              const { text, icon, id } = item;
              return (
                <Link to={`/resources/${id}`} key={id} className="item">
                  <span>{icon}</span>
                  <h2>{text}</h2>
                  <p>44 items</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
