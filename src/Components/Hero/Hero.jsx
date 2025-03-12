import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/profile_pic.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_pic} alt="" />
      <h1>
        <span>I'm Manas Gupta,</span> Full-Stack Developer Based in India
      </h1>
      <p>
        Passionate about building scalable and high-performance web
        applications, I specialize in the MERN stack, with expertise in
        React.js, Node.js, Express.js, and MongoDB. With hands-on experience in
        API integration, authentication, and real-time features, I have
        developed projects like an AI-powered learning platform and an instant
        delivery e-commerce system. My goal is to create seamless user
        experiences with optimized performance and security.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div
          className="hero-resume"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
