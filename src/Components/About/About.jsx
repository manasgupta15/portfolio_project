import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  // Skill data with percentages
  const skills = [
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "React.js & Redux", level: 85 },
    { name: "Node.js & Express.js", level: 80 },
    { name: "MongoDB & MySQL", level: 70 },
    { name: "Tailwind CSS & Bootstrap", level: 85 },
    { name: "RESTful APIs & Authentication", level: 75 },
    { name: "Git & GitHub", level: 90 },
  ];

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
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <div className="skill-meter">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
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
