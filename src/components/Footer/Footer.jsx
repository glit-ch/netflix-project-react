import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={assets.facebookIcon} alt="facebook" />
        <img src={assets.instagramIcon} alt="instagram" />
        <img src={assets.twitterIcon} alt="twitter" />
        <img src={assets.youtubeIcon} alt="youtube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
