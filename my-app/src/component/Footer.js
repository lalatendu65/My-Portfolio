import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon/>
        <LinkedInIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
      </div>
      <p>&copy; My Portfolio 2023. All rights reserved.</p>
    </div>
  );
}

export default Footer;
