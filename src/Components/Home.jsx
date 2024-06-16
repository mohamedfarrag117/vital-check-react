import React from "react";
import "./Home.css";
import medical from "../medical.jpg";
function Home() {
  return (
    <div className="content">
      <div className="title-content">
        <h1>Welcome to VitalCheck</h1>
        <p>
          At VitalCheck, we're committed to helping you prioritize your health.
          Explore our range of tests designed to empower you with valuable
          insights into your well-being." "Discover Your Vitality with
          VitalCheck" "Take charge of your health journey with VitalCheck. From
          comprehensive screenings to targeted assessments, we provide the tools
          you need to make informed decisions about your health." "Empowering
          Health Awareness with VitalCheck" "Unlock a deeper understanding of
          your health status with VitalCheck. Our tests are designed to offer
          clarity and peace of mind, empowering you to proactively manage your
          well-being." "Elevate Your Health Monitoring with VitalCheck" "Stay
          ahead of the curve and monitor your health regularly with VitalCheck.
        </p>
        <div className="img-div">
          <img className="medical" src={medical} alt="medical-wallpaper" />
        </div>
      </div>
    </div>
  );
}

export default Home;
