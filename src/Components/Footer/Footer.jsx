import "./Footer.css";
import footerBg from "../../assets/images/footer-bg.png";

import logo from "../../assets/images/footer-logo.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footerSection"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="footerContainer">

        {/* About Column */}

        <div className="footerAbout">

          <a href="/">
            <img
              src={logo}
              alt="Deep Skills Logo"
              className="footerLogo"
            />
          </a>

          <p className="footerDescription">
            Empowering the next generation of digital professionals with
            industry-relevant skills and hands-on training. Join our
            community and build your future today.
          </p>

          <div className="footerSocials">

            <a href="https://www.facebook.com/people/Deep-Skills/61585681437310/" target="_blank" rel="noopener noreferrer" aria-label="DeepSkills on Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/deepskills.pk" target="_blank" rel="noopener noreferrer" aria-label="DeepSkills on Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/company/deep-skills-pk" target="_blank" rel="noopener noreferrer" aria-label="DeepSkills on LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="https://www.tiktok.com/@deep.skills" target="_blank" rel="noopener noreferrer" aria-label="DeepSkills on TikTok">
              <FaTiktok />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footerLinks">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about/">About Us</a>
          <a href="/courses/">All Courses</a>
          <a href="/blogs/">Blogs</a>
          <a href="/#testimonials">Testimonials</a>
          <a href="/contact/">Contact Us</a>

        </div>

        {/* Programs */}

        <div className="footerLinks">

          <h3>Programs</h3>

          <a href="/courses/graphic-design/">Graphic Design</a>
          <a href="/courses/laravel-mastery/">Full Stack (Laravel)</a>
          <a href="/courses/full-stack-react/">Full Stack (MERN)</a>
          <a href="/courses/wordpress-mastery/">WordPress Mastery</a>

        </div>

        {/* Contact */}

        <div className="footerContactCol">

          <h3>Contact Us</h3>

          <div className="footerContactItem">

            <FaEnvelope />
            <a href="mailto:info@deepskills.pk">info@deepskills.pk</a>

          </div>

          <div className="footerContactItem">

            <FaMapMarkerAlt />
            <a
              href="https://maps.google.com/?q=58+A2,+Tipu+Road+Gulberg+III,+Lahore+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              58 A2, Tipu Road Gulberg III, Lahore Pakistan
            </a>

          </div>

        </div>

        {/* Map */}

        <div className="footerMapCol">

          <h3>Location</h3>

          <div className="mapGlowWrap">

            <div className="mapInner">

              <iframe
                title="Deep Skills Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.530331002447!2d74.33924377545025!3d31.503144574213032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919046033d6232d%3A0x6295535560946761!2s58%20A2%2C%20Tipu%20Road%20Gulberg%20III%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709614400000!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

      <div className="footerBottom">

        <div>© 2026 DEEPSKILLS. All rights reserved.</div>

      </div>

    </footer>
  );
}

export default Footer;

