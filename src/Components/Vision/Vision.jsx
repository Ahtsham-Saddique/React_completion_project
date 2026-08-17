import "./Vision.css";
import visionBg from "../../assets/images/vision-bg.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function Vision() {
  return (
    <section
      id="vision"
      className="visionSection"
      style={{
        backgroundImage: `url(${visionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="visionGlow"></div>

      <div className="visionContainer">

        <div className="visionContent">

          <ScrollReveal variant="zoomInSmall">
            <h2>Our Vision</h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <p className="visionSubHeading">
              Confident Learners. Strong Futures.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={200}>
            <div className="visionCard">

              <p>
                Our vision is to help young people build skills that open
                doors, whether that's for jobs, freelancing, or further
                education.
              </p>

              <p>
                We want Deepskills to be a place where learners feel
                supported, motivated, and ready for what's next.
              </p>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

export default Vision;

