import "./MissionSection.css";

function MissionSection() {
  return (
    <section className="mission-section">

      <div className="mission-container">

        <div className="mission-heading">

          <span>OUR PURPOSE</span>

          <h2>
            Vision & Mission
          </h2>

          <p>
            We believe education should be practical, accessible, and focused
            on preparing learners for real careers.
          </p>

        </div>

        <div className="mission-cards">

          <div className="mission-card">

            <div className="card-icon">
              👁️
            </div>

            <h3>Our Vision</h3>

            <p>
              To empower students through practical education that creates
              opportunities and prepares them for the future.
            </p>

          </div>

          <div className="mission-card">

            <div className="card-icon">
              🎯
            </div>

            <h3>Our Mission</h3>

            <p>
              Deliver industry-focused training that bridges the gap between
              academic learning and real-world skills.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionSection;