import "./Mission.css";
import missionBg from "../../assets/images/mission-bg.png";
import missionCard1 from "../../assets/images/mission-card1.png";
import missionCard2 from "../../assets/images/mission-card2.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const missionCards = [
  {
    id: 1,
    image: missionCard1,
    alt: "Mission Steps 01 and 02",
  },
  {
    id: 2,
    image: missionCard2,
    alt: "Mission Steps 03 and 04",
  },
];

function Mission() {
  return (
    <section
      id="mission"
      className="missionSection"
      style={{
        backgroundImage: `url(${missionBg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="missionContainer">

        {/* Heading */}

        <div className="missionHeading">

          <ScrollReveal variant="fadeDown">
            <h2>OUR MISSION</h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <p>Making Learning Skills Simple and Powerful</p>
          </ScrollReveal>

        </div>

        {/* Mission Image Cards */}

        <div className="missionCardsWrap">

          <ScrollReveal variant="fadeUp" delay={150}>
            <div className="missionCardsRow">

              {missionCards.map((item) => (

                <div className="missionImageCard" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.alt}
                    className="missionImage"
                  />

                </div>

              ))}

            </div>
          </ScrollReveal>

        </div>

        {/* Button */}

        <ScrollReveal variant="fadeUp" delay={200}>
          <div className="missionButtonWrap">

            <button type="button" className="missionButton" tabIndex="0">
              <span>Inquire Now</span>
            </button>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Mission;

