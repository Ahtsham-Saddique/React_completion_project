import "./AboutSection.css";
import aboutImage from "../../assets/images/hero-decoration.jpeg";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-image">

          <img
            src={aboutImage}
            alt="About DeepSkills"
          />

        </div>

        {/* Right Side */}
        <div className="about-content">

          <span className="section-tag">
            ABOUT DEEPSKILLS
          </span>

          <h2>
            Learn Practical Skills That Build Your Future
          </h2>

          <p>
            DeepSkills provides industry-focused education designed to help
            students gain practical knowledge and confidence through real-world
            learning.
          </p>

          <p>
            Our mission is to make quality education accessible and prepare
            learners with skills that employers actually need.
          </p>

          <button>
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;