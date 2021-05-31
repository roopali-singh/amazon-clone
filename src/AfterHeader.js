import React from "react";
import "./AfterHeader.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function AfterHeader() {
  return (
    <div className="afterHeader">
      <LocationOnIcon className="location__logo" />

      <div className="afterHeader__location">
        <div className="line1">Delivery to</div>
        <div className="line2">India</div>
      </div>

      <div className="afterHeader__navOptions">
        <div className="afterHeader__navOption">Today's Deal</div>
        <div className="afterHeader__navOption">Customer Service</div>
        <div className="afterHeader__navOption">Gift Cards</div>
        <div className="afterHeader__navOption">Registry</div>
        <div className="afterHeader__navOption">Sell</div>
      </div>
    </div>
  );
}

export default AfterHeader;