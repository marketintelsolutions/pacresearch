import React from "react";
import { Link } from "react-router-dom";
import pattern from "../assets/images/pattern.jpg";

const PageHeader = ({ text }) => {
  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <h1>{text}</h1>
      <p>
        <Link to="/">Home</Link> / {text}
      </p>
    </section>
  );
};

export default PageHeader;
