import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceItem = ({
  heading,
  items,
  icon,
  button,
  arrange,
  text,
  showText,
}) => {
  return (
    <div className={`${arrange ? "service-item reversed" : "service-item"}`}>
      <div className="icon">{icon}</div>
      <div className="service-content">
        <h2>{heading}</h2>

        {showText ? (
          <p>{text}</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {button && (
          <Link to="/services">
            Read More <BsArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
