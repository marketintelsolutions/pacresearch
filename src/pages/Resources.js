import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { headings } from "../utils/resourcesData";
import { BsBuildingsFill } from "react-icons/bs";

import { PDFDocument } from "pdf-lib";
import FetchResources from "../utils/FetchResources";

const Resources = () => {
  const folders = <FetchResources />;

  // console.log(folders);

  return (
    <section className="resources">
      <PageHeader text="resources" />
      <div className="section-one">
        <div className="content-head-center">
          <div className="left">
            <div className="all">
              <span>
                <BsBuildingsFill />
              </span>
              <div className="text">
                <h2>23</h2>
                <p>total files</p>
              </div>

              <button>view all files</button>
            </div>
          </div>
          <div className="right">
            <div className="items">
              {/* <FetchResources /> */}

              {headings.map((item) => {
                const { text, icon, id } = item;
                return (
                  <Link to={`/resources/${id}`} key={id} className="item">
                    <span>{icon}</span>
                    <div className="text">
                      <h2>{text}</h2>
                      <p>44 items</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
