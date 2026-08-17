import "./WhoFor.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import {
  FaCompass,
  FaGlobe,
  FaChartBar,
  FaBook,
} from "react-icons/fa";

const audience = [
  {
    icon: <FaCompass />,
    text: "A student exploring career options",
  },
  {
    icon: <FaGlobe />,
    text: "A beginner who wants to learn from scratch",
  },
  {
    icon: <FaChartBar />,
    text: "A young adult looking for practical skills",
  },
  {
    icon: <FaBook />,
    text: "Someone who wants to work, freelance, or grow online",
  },
];

function WhoFor() {
  return (
    <section className="whoFor" id="who-it-is-for">

      <div className="whoForContainer">

        <div className="whoForHeading">

          <ScrollReveal variant="fadeDown">
            <h2>WHO DEEPSKILLS IS FOR ?</h2>
          </ScrollReveal>

          <ScrollReveal variant="zoomInSmall" delay={100}>
            <p className="whoSubtitle">
              This Place Is for You If You Are:
            </p>
          </ScrollReveal>

        </div>

        <div className="whoGrid">

          {audience.map((item, index) => (
            <ScrollReveal variant="fadeUp" delay={index * 100} key={index}>
              <div className="whoItem">

                <div className="whoIcon">
                  {item.icon}
                </div>

                <p>{item.text}</p>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhoFor;

