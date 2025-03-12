// import React from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.svg";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <img src={logo} alt="" />
//       <ul className="nav-menu">
//         <li>Home</li>
//         <li>About Me</li>
//         <li>Services</li>
//         <li>Portfolio</li>
//         <li>Contact</li>
//       </ul>
//       <div className="nav-connect">Connect With Me</div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.svg";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   const handleMenuClick = (section) => {
//     setActiveSection(section);
//     setMenuOpen(false); // Close menu on mobile after clicking
//   };

//   return (
//     <nav className="navbar">
//       <img src={logo} alt="Logo" className="logo" />

//       {/* Mobile Menu Icon */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? (
//           <FaTimes className="icon-close" />
//         ) : (
//           <FaBars className="icon-bars" />
//         )}
//       </div>

//       {/* Navigation Menu */}
//       <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
//         {["Home", "About Me", "Services", "Portfolio", "Contact"].map(
//           (section) => (
//             <li
//               key={section}
//               className={activeSection === section ? "active-link" : ""}
//               onClick={() => handleMenuClick(section)}
//             >
//               {section}
//             </li>
//           )
//         )}
//       </ul>

//       {/* Hide this button on mobile */}
//       <div className="nav-connect">Connect With Me</div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.svg";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   // Function to scroll to a section smoothly
//   const handleMenuClick = (section) => {
//     setActiveSection(section);
//     setMenuOpen(false);

//     const sectionElement = document.getElementById(section);
//     if (sectionElement) {
//       window.scrollTo({
//         top: sectionElement.offsetTop - 80, // Adjust offset for fixed navbar
//         behavior: "smooth",
//       });
//     }
//   };

//   // Function to highlight active section on scroll
//   useEffect(() => {
//     const sections = ["Home", "About Me", "Services", "Portfolio", "Contact"];

//     const handleScroll = () => {
//       let scrollPosition = window.scrollY;

//       sections.forEach((section) => {
//         const sectionElement = document.getElementById(section);
//         if (sectionElement) {
//           const offsetTop = sectionElement.offsetTop - 100;
//           const offsetBottom = offsetTop + sectionElement.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="navbar">
//       <img src={logo} alt="Logo" className="logo" />

//       {/* Mobile Menu Icon */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? (
//           <FaTimes className="icon-close" />
//         ) : (
//           <FaBars className="icon-bars" />
//         )}
//       </div>

//       {/* Navigation Menu */}
//       <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
//         {["Home", "About Me", "Services", "Portfolio", "Contact"].map(
//           (section) => (
//             <li
//               key={section}
//               className={activeSection === section ? "active-link" : ""}
//               onClick={() => handleMenuClick(section)}
//             >
//               {section}
//             </li>
//           )
//         )}
//       </ul>

//       {/* Hide this button on mobile */}
//       <div className="nav-connect">Connect With Me</div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaUserTie, FaUserAstronaut } from "react-icons/fa"; // Import FaUserTie

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Function to scroll to a section smoothly
  const handleMenuClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);

    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - 80, // Adjust offset for fixed navbar
        behavior: "smooth",
      });
    }
  };

  // Function to highlight active section on scroll
  useEffect(() => {
    const sections = ["Home", "About Me", "Services", "Portfolio", "Contact"];

    const handleScroll = () => {
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop - 100;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* Portfolio Icon Instead of Image Logo */}
      <FaUserAstronaut className="portfolio-icon" />

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes className="icon-close" />
        ) : (
          <FaBars className="icon-bars" />
        )}
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {["Home", "About Me", "Services", "Portfolio", "Contact"].map(
          (section) => (
            <li
              key={section}
              className={activeSection === section ? "active-link" : ""}
              onClick={() => handleMenuClick(section)}
            >
              {section}
            </li>
          )
        )}
      </ul>

      {/* Hide this button on mobile */}
      <div className="nav-connect">Connect With Me</div>
    </nav>
  );
};

export default Navbar;
