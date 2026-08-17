import "./WhatMakesUsDifferent.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import { FaCheckCircle, FaCheck } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "No complicated language",
    active: true,
  },
  {
    id: 2,
    title: "No unnecessary pressure",
    active: false,
  },
  {
    id: 3,
    title: "No complicated language",
    active: true,
  },
];

function WhatMakesUsDifferent() {
  return (
    <section className="differentSection" id="different">

      <div className="differentContainer">

        {/* Heading */}

        <div className="differentHeading">

          <ScrollReveal variant="zoomInSmall">
            <h2>What Makes Us Different</h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <p>We Care About Your Growth</p>
          </ScrollReveal>

        </div>

        {/* Feature Cards */}

        <div className="differentFeatures">

          {features.map((feature, index) => (

            <ScrollReveal
              variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
              delay={index * 100}
              key={feature.id}
            >
              <div
                className={`differentCard ${
                  feature.active ? "differentCardRed" : "differentCardDark"
                }`}
              >

                <div className="differentIcon">

                  {feature.active ? (
                    <FaCheckCircle />
                  ) : (
                    <FaCheck />
                  )}

                </div>

                <h3>{feature.title}</h3>

              </div>
            </ScrollReveal>

          ))}

        </div>

        {/* Bottom Ribbon */}

        <ScrollReveal variant="zoomInSmall" delay={200}>
          <div className="differentRibbon">

            <p>
              We focus on understanding, practice, and progress,
              so you feel confident at every step.
            </p>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}

export default WhatMakesUsDifferent;

