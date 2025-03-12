import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import github_icon from "../../assets/github_icon.svg"; // Add your GitHub icon image

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="mywork-card" key={index}>
              <img
                className="mywork-image"
                src={work.w_img}
                alt={work.w_name}
              />
              <h2>{work.w_name}</h2>
              <p>{work.w_desc}</p>
              <div className="mywork-tags">
                {work.w_tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mywork-links">
                <a
                  href={work.w_github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github_icon} alt="GitHub" className="github-icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
