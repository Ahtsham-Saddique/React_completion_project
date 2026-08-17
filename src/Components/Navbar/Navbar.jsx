import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const dropdownData = {
  about: [
    { label: "About DeepSkills", href: "/about/" },
    { label: "Our Vision", href: "/about/#vision" },
    { label: "Our Mission", href: "/about/#mission" },
    { label: "Why DeepSkills", href: "/about/#why" },
  ],
  courses: [
    { label: "Graphic Design", href: "/courses/graphic-design/" },
    { label: "Full Stack (Laravel)", href: "/courses/laravel-mastery/" },
    { label: "Full Stack (MERN)", href: "/courses/full-stack-react/" },
    { label: "WordPress Mastery", href: "/courses/wordpress-mastery/" },
  ],
  certificate: [
    { label: "Verify Certificate", href: "/verify-certificate/" },
    { label: "Certificate Info", href: "/verify-certificate/#info" },
  ],
};

function Dropdown({ label, items, active }) {
  return (
    <div className={`navItem ${active ? "navItemActive" : ""}`}>
      <a href={items[0].href} className="navLink">
        {label}
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ fontSize: "0.8rem", marginTop: "2px" }}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
      <div className="dropdownPanel">
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a className="navbarLogo" href="/">
        <img src={logo} alt="Deep Skills Logo" />
      </a>

      <nav className={`navbarMenu ${menuOpen ? "navbarMenu--open" : ""}`}>
        <a href="/" className="navLink">Home</a>

        <Dropdown
          label="About"
          items={dropdownData.about}
          active
        />

        <Dropdown
          label="Courses"
          items={dropdownData.courses}
        />

        <a href="/media/" className="navLink">Media</a>

        <a href="/blogs/" className="navLink">Blogs</a>

        <Dropdown
          label="Certificate"
          items={dropdownData.certificate}
        />

        <a href="/contact/" className="navLink">Contact Us</a>
      </nav>

      <div className="navbarRight">
        <a href="/login/" className="navbarLogin">Login</a>

        <div className="navbarCtaWrap">
          <button type="button" className="navbarCta" tabIndex="0">
            <span>Inquire Now</span>
          </button>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="navbarHamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
