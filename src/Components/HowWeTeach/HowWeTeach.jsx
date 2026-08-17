import "./HowWeTeach.css";
import teachBg from "../../assets/images/howds-bg.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import {
  FaBrain,
  FaTools,
  FaRoute,
  FaCheckCircle,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <FaBrain />,
    title: "Easy to understand",
  },
  {
    id: 2,
    icon: <FaTools />,
    title: "Practical and hands-on",
  },
  {
    id: 3,
    icon: <FaRoute />,
    title: "Step-by-step",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Stress-free for beginners",
  },
];

function HowWeTeach() {
  return (
    <section
      id="how-we-teach"
      className="teachSection"
      style={{
        backgroundImage: `url(${teachBg})`,
      }}
    >
      <div className="teachOverlay">

        {/* Heading */}

        <div className="teachHeading">

          <ScrollReveal variant="fadeDown">
            <h2>How We Teach</h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <p className="teachSubHeading">Learning That Makes Sense</p>
          </ScrollReveal>

          <ScrollReveal variant="zoomInSmall" delay={200}>
            <div className="teachTag">
              <p>At Deepskills, we believe learning should be</p>
            </div>
          </ScrollReveal>

        </div>

        {/* Cards */}

        <div className="teachCards">

          {cards.map((card, index) => (
            <ScrollReveal variant="fadeUp" delay={index * 100} key={card.id}>
              <div className="teachCard">

                <div className="teachCardTop">
                  {card.icon}
                </div>

                <div className="teachCardBottom">

                  <p>{card.title}</p>

                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>

        {/* Footer */}

        <ScrollReveal variant="fadeUp" delay={300}>
          <p className="teachFooter">
            You don't need to be "good at tech" to start — we help you
            grow from zero to confident.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default HowWeTeach;

