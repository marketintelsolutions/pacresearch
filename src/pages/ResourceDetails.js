import React, { useEffect, useState } from "react";
import pattern from "../assets/images/pattern.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { headings } from "../utils/resourcesData";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const ResourceDetails = (props) => {
  //   const userId = props.match.params.id;
  const { id } = useParams();

  console.log(id);

  const [itemActive, setItemActive] = useState(id - 1);
  const [item, setItem] = useState(headings[itemActive]);

  useEffect(() => {
    setItemActive(id - 1);
    let item = headings[id - 1];
    console.log("hello");
    setItem(item);
  }, [id]);

  useEffect(() => {
    const el = document.getElementById("resources");

    const { top } = el.getBoundingClientRect();
    const scrolledY = window.scrollY;

    const position = top + scrolledY - 50;

    window.scroll(0, position);
  }, []);

  return (
    <div className="resource-details">
      <section
        className="page-header"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <h1>{item.text}</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/resources"> Resources</Link> /
          <span> {item.text}</span>
        </p>
      </section>
      <div className="section-two" id="resources">
        <div className="content-center">
          <div className="content">
            <div className="right">
              {headings.map((item, index) => {
                const { text, icon, id } = item;

                return (
                  <Link
                    key={id}
                    className={`${
                      index === itemActive ? "item active" : "item"
                    }`}
                    // onClick={() => setItemActive(index)}
                    to={`/resources/${id}`}
                  >
                    <span>{icon}</span>
                    <h2>{text}</h2>
                  </Link>
                );
              })}
            </div>
            <div className="left">
              <div className="top">
                <p>all</p> <span>50</span>
              </div>
              <div className="bottom">
                {headings[itemActive].items.map((i, index) => {
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
