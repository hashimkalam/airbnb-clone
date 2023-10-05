import React from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>
          © 2023 Airbnb, clone. · <a>Terms</a> · <a>Sitemap</a> · <a>Privacy</a>{" "}
          · <a>Your Privacy Choices</a> · <a>Destinations</a>
        </p>
      </div>
      <div className="footer__right">
        <LanguageIcon className="footer__rightLangIcon" />
        <a>English(US)</a>
        <a>IKR</a>
        <div className="footer__rightIconText">
          <a>Support & resources</a>
          <ExpandLessIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
