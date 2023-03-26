import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceItem = ({ heading, items, icon, button, arrange }) => {
  return (
    <div className={`${arrange ? "service-item reversed" : "service-item"}`}>
      <div className="icon">{icon}</div>
      <div className="service-content">
        <h2>{heading}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {button && (
          <button>
            Read More <BsArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
