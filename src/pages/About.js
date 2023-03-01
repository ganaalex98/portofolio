import React from "react";
import s from "./about.module.css";
import me from "../images/meimg.jpg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className={s.bigContainer}>
      <div className={s.container}>
        <h2>About me</h2>
        <div className={s.plm}>
          <div className={s.detailsConntainer}>
            <div className={s.details}>
              <img src={me} alt="Hi, I'm GANA!" className={s.meImg} />
              <h3>GANA Alexandru-Lucian</h3>
              <h3>Front-End/Back-End Developer</h3>
            </div>
            <div className={s.socialMContainer}>
              <a href="mailto:gana.alex98@gmail.com">
                <EmailRoundedIcon className={s.socialIcon} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandru-lucian-gana-87b7441b3/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className={s.socialIcon} />
              </a>
            </div>
          </div>
          <div className={s.textes}>
            <p>
              I am a vigorous, ambitious person who has developed a responsible
              and mature approach to any task that I undertake, or any situation
              that I am presented with. As a front-end developer I have
              experience with structuring, developing and testing web
              applications. I am hardworking, honest individual. I am a good
              timekeeper, always willing to learn and develop new skills. I am a
              friendly, polite and have a good taste of humor. In my previous
              role as a React Developer I demonstrated the ability to work under
              intense pressure, develop products and services for customers,
              handle customers complains and solve problematic situations as
              they arose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
