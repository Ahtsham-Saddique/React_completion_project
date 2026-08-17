import "./WhyCreated.css";
import bgImage from "../../assets/images/whyds-bg.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const cards = [
  {
    number: "01",
    title: "Which skills should I learn?"
  },
  {
    number: "02",
    title: "Where do I even start?"
  },
  {
    number: "03",
    title: "How do I turn learning into a career?"
  }
];

function WhyCreated() {
  return (
    <section
      className="whyCreated"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="whyOverlay"></div>

      <div className="whyCreatedContent">

        <div className="whyCreatedHeading">

          <ScrollReveal variant="zoomInSmall">
            <h2>Why Deepskills Was Created</h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <p>Because Your Future Deserves Better Than Guesswork</p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={200}>
            <p>
              The world is changing rapidly, and traditional education often fails
              to adequately prepare students for real-world opportunities.
            </p>
          </ScrollReveal>

        </div>

        <div className="whyCardContainer">

          {cards.map((card, index) => (
            <ScrollReveal variant="fadeUp" delay={index * 150} key={index}>
              <div className="whyCard">

                <div className="whyLeftBar"></div>

                <div className="whyCardContent">
                  <span className="whyNumber">{card.number}</span>
                  <p className="whyTitle">{card.title}</p>
                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyCreated;

