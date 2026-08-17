import "./LearnSection.css";

import whatBg from "../../assets/images/whatds-bg.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import whatcard1 from "../../assets/images/whatcard1.svg";
import whatcard2 from "../../assets/images/whatcard2.svg";
import whatcard3 from "../../assets/images/whatcard3.svg";
import whatcard4 from "../../assets/images/whatcard4.svg";

const courses = [
  {
    id: "01",
    title: "Graphic Design",
    image: whatcard1,
    alt: "Course module 1",
  },
  {
    id: "02",
    title: "Full Stack Web Development (PHP & Laravel)",
    image: whatcard2,
    alt: "Course module 2",
  },
  {
    id: "03",
    title: "Full Stack Web Development (React)",
    image: whatcard3,
    alt: "Course module 3",
  },
  {
    id: "04",
    title: "WordPress Web Development with Elementor",
    image: whatcard4,
    alt: "Course module 4",
  },
];

function LearnSection() {
  return (
    <section
      className="learnSection"
      id="what-you-learn"
      style={{ backgroundImage: `url(${whatBg})` }}
    >
      <div className="learnOverlay"></div>

      <div className="learnContent">

        <div className="learnHeading">

          <ScrollReveal variant="fadeDown">
            <h2>What You'll Learn at Deepskills</h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <p className="learnSubtitle">Learning That Makes Sense</p>
          </ScrollReveal>

        </div>

        <div className="learnGrid">

          {courses.map((course, index) => (
            <ScrollReveal variant="zoomIn" delay={index * 100} key={course.id}>
              <div className="learnCard">
                <div className="learnCardGlow"></div>
                <img src={course.image} alt={course.alt} className="learnCardImg" />
              </div>
            </ScrollReveal>
          ))}

        </div>

        <ScrollReveal variant="fadeUp" delay={200}>
          <div className="learnRibbon">
            <p>Each course focuses on real projects, real skills, and real confidence.</p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default LearnSection;

