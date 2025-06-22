import React from "react";
import Image1 from "../assets/home_sec3_icons/image1.webp";
import Image2 from "../assets/home_sec3_icons/image2.webp";
import "../styles/quickLinks.css";
import arrowButton from "../assets/home_sec3_icons/arrowButton.png";

const QuickLinks = () => {
  return (
    <div className="quicklinks-wrapper">
      <div className="quicklinks-section">
        <div className="text-block">
          <h2>
            Get Quick Rides, <br />
            <span>Low </span>Fares
          </h2>
          <p>
            In Rapido we ensure our customers get rides quickly at the most
            affordable prices.
          </p>
          <button className="action-button">
            Book a ride <img style={{ width: "22px" }} src={arrowButton} />
          </button>
        </div>

        <div className="image-box">
          <img src={Image1} alt="Quick Rides" />
        </div>
      </div>
      <div className="quicklinks-section reverse">
        <div className="image-box">
          <img src={Image2} alt="Start Earning" />
        </div>

        <div style={{ marginTop: "100px" }} className="text-block">
          <h2>
            Flexible Hours & <br />
            <span>High </span>Earnings
          </h2>
          <p>
            Join as a Rapido captain and earn on your own terms. Driver whenever
            you want.
          </p>
          <button className="action-button">
            Start Earning <img style={{ width: "22px" }} src={arrowButton} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
