import React, { useState } from "react";
import Header from "../component/header";
import "../styles/home.css";
import FromIcon from "../assets/home_sec1_icons/locationFrom.svg";
import ToIcon from "../assets//home_sec1_icons/locationTo.svg";
import Bike from "../assets/home_sec2_icons/bikeIcon.webp";
import Auto from "../assets/home_sec2_icons/autoIcon.webp";
import ShareAuto from "../assets/home_sec2_icons/shareAutoIcon.webp";
import Parcel from "../assets/home_sec2_icons/parcelIcon.webp";
import Car from "../assets/home_sec2_icons/car.webp";
import LuxCar from "../assets/home_sec2_icons/luxcarIcon.webp";
import Footer from "../component/footer";
import QuickLinks from "../component/quickLinks";
import AboutSafetyApp from "../component/about_safety_app";
import altLogo from "../assets/altLogo.svg";

const HomePage = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupError, setPickupError] = useState("");
  const [dropError, setDropError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[A-Za-z0-9\s,.\-]+$/;
    const onlyNumbers = /^\d+$/;
    let hasError = false;

    setPickupError("");
    setDropError("");

    if (!pickup.trim()) {
      setPickupError("Please enter pickup location");
      hasError = true;
    } else if (!regex.test(pickup) || onlyNumbers.test(pickup)) {
      setPickupError("Invalid input! Only address format allowed");
      hasError = true;
    }

    if (!drop.trim()) {
      setDropError("Please enter drop location");
      hasError = true;
    } else if (!regex.test(drop) || onlyNumbers.test(drop)) {
      setDropError("Invalid input! Only address format allowed");
      hasError = true;
    }

    if (!hasError) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Header />
      {showModal && (
        <div className="confirm-wrapper">
          <div className="success-modal">
            <img src={altLogo} alt="Success" />
            <h2>Booking Confirmed!</h2>
            <p>
              From: <strong>{pickup}</strong> <br />
              To: <strong>{drop}</strong>
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setPickup("");
                setDrop("");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="background-section">
        <h1>Bharat Moves On Rapido!</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <img src={FromIcon} alt="from" />
            <input
              type="text"
              placeholder="Enter Pickup Location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          {pickupError && <p className="error">{pickupError}</p>}

          <div className="input-wrapper">
            <img src={ToIcon} alt="to" />
            <input
              type="text"
              placeholder="Enter Drop Location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </div>
          {dropError && <p className="error">{dropError}</p>}

          <button className="book-btn">Book Ride</button>
        </form>
      </div>
      <div className="service-wrapper">
        <h2>Our Services</h2>
        <hr className="underline" />

        <div className="service-container">
          <div className="service-box">
            <img src={Bike} alt="Bike" />
            <label>Bike</label>
          </div>

          <div className="service-box">
            <img src={Auto} alt="Auto" />
            <label>Auto</label>
          </div>

          <div className="service-box">
            <img src={ShareAuto} alt="Auto Share" />
            <label>Auto Share</label>
          </div>

          <div className="service-box">
            <img src={Parcel} alt="Parcel" />
            <label>Parcel</label>
          </div>

          <div className="service-box">
            <img src={Car} alt="Cab Economy" />
            <label>Cab Economy</label>
          </div>

          <div className="service-box">
            <img src={LuxCar} alt="Cab Premium" />
            <label>Cab Premium</label>
          </div>
        </div>
      </div>

      <div>
        <QuickLinks />
        <AboutSafetyApp />
      </div>

      <Footer />
    </>
  );
};
export default HomePage;
