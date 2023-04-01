import React, { useEffect } from "react";
import Heading from "../components/Heading";
import PageHeader from "../components/PageHeader";
import { businessHome } from "../utils/data";
import rainbow from "../assets/images/rainbow.png";
import flexibility from "../assets/images/flexibility.jpg";
import robustness from "../assets/images/robustness.jpeg";
import high from "../assets/images/high.jpg";
import logic from "../assets/images/logic.jpg";
import clear from "../assets/images/clear.jpg";
import analytics from "../assets/images/analytics.jpg";
import transparentEasy from "../assets/images/transparentEasy.jpeg";

const Business = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="business">
      <PageHeader text="business processes" />
      <section className="section-two">
        <div className="content-center">
          <Heading text="business processes" />
          <p>
            Deep understanding of industries across economies and leading
            through on diverse subjects.
          </p>
          <div className="content">
            {businessHome.map((item) => {
              const { icon, text } = item;
              return (
                <div className="business-item">
                  <span>{icon}</span> <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="section-three"
        style={{ backgroundImage: `url(${analytics})` }}
      >
        <div className="heading">
          <Heading text="Our Predictive Analytics Process" />
        </div>
        <div className="image">
          <img src={rainbow} alt="rainbow" />
        </div>
      </section>
      <section className="section-four">
        <div className="heading">
          <Heading text="Our Work Approach – Modelling Architecture" />
        </div>
        <div className="item-left">
          <div className="left">
            <h2>Flexibility</h2>
            <ul>
              <li>
                Each model component will be built using the most efficient
                formulae able to cope with the desired range of inputs
              </li>
              <li>No hard coding in formulae</li>
              <li>
                Range names (where appropriate) for data sets that may expand or
                contract in size
              </li>
              <li>
                Ability to quickly and efficiently run sensitivities and
                scenarios on key parameters and provide outputs that can be
                easily compared and analyzed
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={flexibility} alt="flexibility" />
          </div>
        </div>
        <div className="item-right">
          <div className="right">
            <img src={transparentEasy} alt="flexibility" />
          </div>
          <div className="left">
            <h2>Transparent and easy to use</h2>
            <ul>
              <li>
                Clear, simple but effective logic, broken down into manageable
                sizes
              </li>
              <li>Navigation links and documented user instructions</li>
              <li>
                Extensive labelling of cells including units, data sources and
                any input restrictions
              </li>
              <li>
                Formatting to distinguish between input cells, calculations,
                selection boxes, sensitisedareas etc.
              </li>
              <li>Comprehensive assumptions sheet designed for flexibility</li>
            </ul>
          </div>
        </div>
        <div className="item-left">
          <div className="left">
            <h2>Robustness</h2>
            <ul>
              <li>
                Each model component will be built using the most efficient
                formulae able to cope with the desired range of inputs
              </li>
              <li>No hard coding in formulae</li>
              <li>
                Range names (where appropriate) for data sets that may expand or
                contract in size
              </li>
              <li>
                Ability to quickly and efficiently run sensitivities and
                scenarios on key parameters and provide outputs that can be
                easily compared and analyzed
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={robustness} alt="flexibility" />
          </div>
        </div>
        <div className="item-right">
          <div className="right">
            <img src={high} alt="flexibility" />
          </div>
          <div className="left">
            <h2>High-quality features</h2>
            <ul>
              <li>
                Each model component is built using the most efficient formulae
                able to cope with the desired range of inputs
              </li>
              <li>No hard coding in formulae.</li>
              <li>
                Extensive labelling of cells including units, data sources and
                any input restrictions
              </li>
              <li>
                Formatting to distinguish between input cells, calculations,
                selection boxes, sensitisedareas etc.
              </li>
              <li>Comprehensive assumptions sheet designed for flexibility</li>
            </ul>
          </div>
        </div>
        <div className="item-left">
          <div className="left">
            <h2>Logical structure</h2>
            <ul>
              <li>Separation of inputs, calculations and outputs</li>
              <li>
                Section headings and numberings for each component of the model
              </li>
              <li>
                Model flow diagram to assist in understanding the model
                structure
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={logic} alt="flexibility" />
          </div>
        </div>
        <div className="item-right">
          <div className="right">
            <img src={clear} alt="flexibility" />
          </div>
          <div className="left">
            <h2>Clear input assumption sheets</h2>
            <ul>
              <li>Cell styles used to colour code input</li>
              <li>No hard coding in formulae.</li>
              <li>
                Option to lock down certain cells containing master data to
                prevent them from being edited
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Business;
