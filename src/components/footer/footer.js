import React from "react";
import "./footer.css";
import { GrFacebookOption, GrTwitter, GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer">
    <div class="container">
      <div class="row-footer">
        <div class="col-footer">
          <h4>Company</h4>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">our services</a></li>
            <li><a href="">privacy policy</a></li>
            <li><a href="">affiliate program</a></li>
          </ul>
        </div>
        <div class="col-footer">
          <h4>get help</h4>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">shipping</a></li>
            <li><a href="">Returns</a></li>
            <li><a href="">Payment options</a></li>
          </ul>
        </div>
        <div class="col-footer">
          <h4>online shop</h4>
          <ul>
            <li><a href="">product</a></li>
            <li><a href="">product</a></li>
            <li><a href="">product</a></li>
            <li><a href="">product</a></li>
          </ul>
        </div>
        <div class="col-footer">
          <h4>Follow us</h4>
          <div class="social">
          <div className="social">
                <a href="https://www.facebook.com/">
                  <GrFacebookOption />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/">
                  <GrTwitter />
                </a>
                <a href="https://www.linkedin.com/">
                  <GrLinkedin />
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
