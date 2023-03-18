import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceItem = ({ heading, items, icon }) => {
  return (
    <div className="service-item">
      <div className="icon">{icon}</div>
      <h2>{heading}</h2>
      <div className="service-content">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button>
          Read More <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;
