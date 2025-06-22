import React from "react";
import SatefyImg from "../assets/home_sec3_icons/safety.webp";
import arrow from "../assets/home_sec3_icons/arrow.png";
import PassengerApp from "../assets/home_sec3_icons/passengerapp.svg";
import driverApp from "../assets/home_sec3_icons/driverapp.webp";

import "../styles/about_safety_app.css";

const AboutSafetyApp = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <div className="text-content">
            <h2>
              <span>Safety </span> for all
            </h2>
            <p>
              At Rapido, your safety is our priority. We’re dedicated to making
              every ride safe and comfortable.
            </p>
            <button className="knowMore-button">
              Know more <img style={{ height: "16px" }} src={arrow} />
            </button>
          </div>
          <div className="image-box">
            <img src={SatefyImg} />
          </div>
        </div>
      </div>

      <div className="download-app-container">
        <h2>Download Now</h2>
        <div className="app-grid">
          <div className="app-block">
            <img src={PassengerApp} alt="Passenger App" />
            <p>
              Rapido: Bike-Taxi, <br /> Auto & Cabs
            </p>
          </div>
          <div className="app-block">
            <img src={driverApp} alt="Driver App" />
            <p>
              Rapido Captain: <br /> Drive & Earn
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutSafetyApp;
