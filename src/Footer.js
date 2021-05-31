import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__outerColumns">
        <div className="footer__text">
          <div className="footer__columns">
            <div className="footer__columnHeading">Get to Know Us</div>
            <div className="footer__options">About Us</div>
            <div className="footer__options">Careers</div>
            <div className="footer__options">Press Releases</div>
            <div className="footer__options">Amazon Cares</div>
            <div className="footer__options">Gift a Smile</div>
          </div>

          <div className="footer__columns">
            <div className="footer__columnHeading">Connect with Us</div>
            <div className="footer__options">Facebook</div>
            <div className="footer__options">Twitter</div>
            <div className="footer__options">Instagram</div>
          </div>

          <div className="footer__columns">
            <div className="footer__columnHeading">Make Money with Us</div>
            <div className="footer__options">Sell on Amazon</div>
            <div className="footer__options">Sell under Amazon Accelerator</div>
            <div className="footer__options">Become an Affiliate</div>
            <div className="footer__options">Fulfilment by Amazon</div>
            <div className="footer__options">Advertise Your Products</div>
            <div className="footer__options">Amazon Pay on Merchants</div>
          </div>

          <div className="footer__columns">
            <div className="footer__columnHeading">Let Us Help You</div>
            <div className="footer__options">Your Account</div>
            <div className="footer__options">Returns Centre</div>
            <div className="footer__options">100% Purchase Protection</div>
            <div className="footer__options">Amazon App Download</div>
            <div className="footer__options">Amazon Assistant Download</div>
            <div className="footer__options">Help</div>
          </div>
        </div>
          <div className="footer__info">
            <div className="footer__infoConditions">
              Conditions of Use & Sale
            </div>
            <div className="footer__infoConditions">Privacy Notice</div>
            <div className="footer__infoConditions">Interest-Based Ads</div>
            <div className="footer__infoYear">
              © 1996-2020, Amazon.com, Inc. or its affiliates
            </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
