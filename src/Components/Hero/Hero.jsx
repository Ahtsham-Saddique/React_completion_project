import { useRef } from "react";
import "./Hero.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { FaFileAlt, FaPlay } from "react-icons/fa";

const flyingDollars = [
  { id: 1, top: "15%", left: "85%", size: "2rem", delay: "0s", duration: "9s", opacity: 0.7 },
  { id: 2, top: "25%", left: "75%", size: "1.4rem", delay: "2s", duration: "11s", opacity: 0.6 },
  { id: 3, top: "40%", left: "90%", size: "1.8rem", delay: "1s", duration: "10s", opacity: 0.65 },
  { id: 4, top: "55%", left: "80%", size: "1.2rem", delay: "3.5s", duration: "12s", opacity: 0.55 },
  { id: 5, top: "20%", left: "68%", size: "2.2rem", delay: "0.5s", duration: "9.5s", opacity: 0.7 },
  { id: 6, top: "45%", left: "95%", size: "1.5rem", delay: "2.5s", duration: "11s", opacity: 0.6 },
  { id: 7, top: "70%", left: "88%", size: "1.9rem", delay: "1.5s", duration: "10.5s", opacity: 0.65 },
  { id: 8, top: "85%", left: "72%", size: "1.3rem", delay: "4s", duration: "12s", opacity: 0.55 },
  { id: 9, top: "60%", left: "78%", size: "1.6rem", delay: "3s", duration: "11.5s", opacity: 0.6 },
  { id: 10, top: "80%", left: "92%", size: "1.3rem", delay: "5s", duration: "13s", opacity: 0.55 },
  { id: 11, top: "35%", left: "70%", size: "1.5rem", delay: "2s", duration: "12.5s", opacity: 0.6 },
  { id: 12, top: "65%", left: "84%", size: "1.2rem", delay: "4.5s", duration: "14s", opacity: 0.55 },
];

function Hero() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 40;
    const moveY = (y - centerY) / 40;

    // The entire heroContent (title + description) should float
    // together as one single element when the mouse moves over the hero.
    const content = hero.querySelector(".heroContent");
    if (content) {
      content.style.transform = `translate(${moveX * 0.8}px, ${moveY * 0.8}px)`;
    }
  };

  const handleMouseLeave = () => {
    const hero = heroRef.current;
    if (!hero) return;

    const content = hero.querySelector(".heroContent");
    if (content) content.style.transform = "";
  };

  return (
    <section
      ref={heroRef}
      className="hero"
      id="about-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Yellow glow circle */}
      <div className="heroGlowCircle"></div>

      {/* Flying dollar symbols */}
      {flyingDollars.map((d) => (
        <span
          key={d.id}
          className="heroFlyingDollar"
          style={{
            top: d.top,
            left: d.left,
            fontSize: d.size,
            "--dollar-opacity": d.opacity,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
          aria-hidden="true"
        >
          $
        </span>
      ))}

      {/* Floating decorative icons */}
      <div className="heroIcon heroIconFile" style={{ top: "20%", left: "15%" }}>
        <span className="heroIconFloat">
          <FaFileAlt style={{ opacity: 0.3 }} />
        </span>
      </div>
      <div className="heroIcon heroIconPlay" style={{ bottom: "25%", right: "15%" }}>
        <span className="heroIconFloat">
          <FaPlay style={{ opacity: 0.2 }} />
        </span>
      </div>

      {/* Content */}
      <div className="heroContent">
        <ScrollReveal variant="zoomIn" className="heroTitleWrap">
          <h1 className="heroTitle">
            <span className="heroFilled">DESIGN</span>
            <span className="heroDot">·</span>
            <span className="heroOutline">DEVELOP</span>
            <span className="heroDot">·</span>
            <span className="heroFilled">EARN</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={200}>
          <p className="heroDesc">
            <span>Deepskills</span> is a learning space for students and young
            adults who want to learn practical skills, feel confident, and build
            a strong future. We know how confusing it can be to choose a career
            or skill path. That's why <span> Deepskills</span> focuses on clear,
            hands-on learning, so you don't just study, you actually learn how to
            create, build, and grow.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Hero;


