import React from "react";
import "./portfolio.css";
import Work_1 from "../../assets/portfolio1.jpg";
import Work_2 from "../../assets/portfolio2.jpg";
import Work_3 from "../../assets/portfolio3.jpg";
import Work_4 from "../../assets/portfolio4.jpg";
import Work_5 from "../../assets/portfolio6.jpg";
import Work_6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Work_1,
    title: "Figma landing page design",
    github: "https://github.com/",
    demo: "https://bahadur777.github.io/SkinNature/",
  },
  {
    id: 2,
    image: Work_2,
    title: "Figma landing page design",
    github: "https://github.com/",
    demo: "https://bahadur777.github.io/SkinNature/",
  },
  {
    id: 3,
    image: Work_3,
    title: "Figma landing page design",
    github: "https://github.com/",
    demo: "https://bahadur777.github.io/SkinNature/",
  },
  {
    id: 4,
    image: Work_4,
    title: "Figma landing page design",
    github: "https://github.com/",
    demo: "https://bahadur777.github.io/SkinNature/",
  },
  {
    id: 5,
    image: Work_5,
    title: "Figma landing page design",
    github: "https://github.com/",
    demo: "https://bahadur777.github.io/SkinNature/",
  },
  {
    id: 6,
    image: Work_6,
    title: "Figma landing page design",
    github: "https://github.com/",
    demo: "https://bahadur777.github.io/SkinNature/",
  },
];

const Portfolio = () => {
  return (
    <service id="portfolio">
      <h2 className="portfolio-title">MY Work</h2>

      <div className="container">
        <div className="portfolio-container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-card">
                <div className="portfolio-img">
                  <img src={Work_1} alt="" className="work" />
                </div>
                <h3>{title}</h3>
                <div className="btn-div">
                  <a href={github} className="btn-1" target='_blank'>
                    Github
                  </a>
                  <a href={demo} className="btn-1" target='_blank'>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </service>
  );
};

export default Portfolio;
