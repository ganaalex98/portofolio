import React from "react";
import s from "./footer.module.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className={s.container}>
      <h2>
        Thank you for your time<span>!</span>
      </h2>
      <h4>
        I would be happy to hear from you! Do not hesitate to send me an email.
      </h4>
      <a href="mailto:gana.alex98@gmail.com">
        <button className={s.footerButton}>Say Hi!</button>
      </a>
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
        <a
          href="https://github.com/magekeione"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
