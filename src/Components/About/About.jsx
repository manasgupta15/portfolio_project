import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Manas Gupta, a passionate Full-Stack Developer specializing in
              scalable and high-performance web applications. With expertise in
              the MERN stack, I have hands-on experience in building AI-powered
              learning platforms, real-time e-commerce solutions, and
              interactive web apps.
            </p>
            <p>
              I enjoy solving complex problems with clean, efficient code and
              leveraging technologies like React.js, Node.js, Express.js,
              MongoDB, and WebRTC to craft seamless user experiences. Beyond
              development, I focus on performance, security, and accessibility
              while actively exploring new web technologies, open-source
              contributions, and DSA challenges on LeetCode & HackerRank. 🚀
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>JavaScript (ES6+)</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React.js & Redux</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js & Express.js</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB & MySQL</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS & Bootstrap</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>RESTful APIs & Authentication</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>INTERNSHIPS & TRAININGS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>500+</h1>
          <p>DSA PROBLEMS SOLVED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
