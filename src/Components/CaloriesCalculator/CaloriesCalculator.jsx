import React, { useState } from "react";

import "./CaloriesCalculator.css";
import male from "./imgs/male.png";
import female from "./imgs/female.png";
const CaloriesCalculator = () => {
  const [gender, setGender] = useState("");

  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [ageHint, setAgeHint] = useState(false);
  const [heightHint, setHeightHint] = useState(false);
  const [weightHint, setWeightHint] = useState(false);
  const [result, setResult] = useState(null);
  const [activity, setActivity] = useState("");

  function calcAgain() {
    setActivity(null);
    setGender(null);
    setHeight(170);
    setAge(30);
    setWeight(70);
    setResult(null);
    setAgeHint("");
    setHeightHint("");
    setWeightHint("");
  }

  function handleGender(e) {
    setGender(e.target.name);
  }

  function handleActivity(e) {
    setActivity(e.target.name);
  }

  function handleAge(e) {
    if (e.target.value > 100 || e.target.value < 1) {
      setAgeHint(true);
    } else setAgeHint(false);
    setAge(e.target.value);
  }

  function handleHeight(e) {
    if (e.target.value > 250 || e.target.value < 10) {
      setHeightHint(true);
    } else setHeightHint(false);
    setHeight(e.target.value);
  }

  function handleWeight(e) {
    if (e.target.value > 250 || e.target.value < 1) {
      setWeightHint(true);
    } else setWeightHint(false);
    setWeight(e.target.value);
  }

  function handleResult() {
    if (gender === "male" && activity === "sedentary") {
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      setResult((parseInt(BMR) * 1.2).toFixed(0));
    } else if (gender === "male" && activity === "low-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      setResult((BMR * 1.375).toFixed(0));
    } else if (gender === "male" && activity === "medium-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      setResult((BMR * 1.55).toFixed(0));
    } else if (gender === "male" && activity === "high-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      setResult((BMR * 1.725).toFixed(0));
    } else if (gender === "male" && activity === "excessive-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      setResult((BMR * 1.9).toFixed(0));
    } else if (gender === "female" && activity === "sedentary") {
      const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      setResult((BMR * 1.2).toFixed(0));
    } else if (gender === "female" && activity === "low-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      setResult((BMR * 1.375).toFixed(0));
    } else if (gender === "female" && activity === "medium-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      setResult((BMR * 1.55).toFixed(0));
    } else if (gender === "female" && activity === "high-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      setResult((BMR * 1.725).toFixed(0));
    } else if (gender === "female" && activity === "excessive-activity") {
      const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      setResult((BMR * 1.9).toFixed(0));
    }

    if (weightHint || heightHint || ageHint === true) {
      setResult("");
    }
  }

  return (
    <div className="Calories-Calculator">
      <div className="header">
        <h1>Calories Calculator App (BMR)</h1>
        <p className="about">
          <span>Basal metabolic rate ( BMR ) </span>evaluates the minimum number
          of calories an individual requires to run their basic life functions
          such as circulation, breathing, digestion, and absorption of nutrients
          during a 24-hour period of rest. If an individual is trying to lose
          weight, calculating their BMR can help in establishing how many
          calories an individual exactly needs to consume each day.
        </p>
      </div>
      {/*gender*/}

      <div className="gender ">
        <div className="male">
          <input
            type="radio"
            id="gender-male"
            name="male"
            onClick={handleGender}
            checked={gender === "male"}
          />
          <label htmlFor="gender-male" name="male">
            Male
          </label>
          <div className="male-pic">
            <img
              src={male}
              alt="male "
              name="male"
              onClick={handleGender}
              checked={gender === "male"}
            />
          </div>
        </div>

        <div className="female">
          <input
            type="radio"
            id="gender-female"
            name="female"
            onClick={handleGender}
            checked={gender === "female"}
          />
          <label htmlFor="gender-female">Female</label>
          <div className="female-pic">
            <img
              src={female}
              alt="female"
              name="female"
              onClick={handleGender}
              checked={gender === "female"}
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      {/*properties*/}
      <div className="properties">
        <div className="property">
          <label htmlFor="age-range">Age</label>
          <input
            type="text"
            min={1}
            max={100}
            value={age}
            onChange={handleAge}
          />
          {ageHint && <p className="hint">Value between 1 and 100.</p>}
        </div>
        <br></br>
        <div className="property">
          <label htmlFor="height-range">Height</label>
          <input
            type="text"
            min={10}
            max={250}
            value={height}
            onChange={handleHeight}
          />
          {heightHint && <p className="hint">Value between 10 and 250.</p>}
        </div>
        <br></br>

        <div className="property">
          <label htmlFor="weight-range">Weight</label>
          <input
            type="text"
            min={1}
            max={250}
            value={weight}
            onChange={handleWeight}
          />
          {weightHint && <p className="hint">Value between 1 and 250.</p>}
        </div>
      </div>
      <br></br>

      {/*Activity*/}
      <div className="activity">
        <div className="activity-title">
          <h3>Activity Level:</h3>
        </div>
        <div className="sedentary">
          <input
            type="radio"
            id="activity-sedentary"
            name="sedentary"
            onClick={handleActivity}
            checked={activity === "sedentary"}
          />
          <label htmlFor="activity-sedentary">Sedentary</label>
        </div>

        <div className="low-activity">
          <input
            type="radio"
            id="activity-low"
            name="low-activity"
            onClick={handleActivity}
            checked={activity === "low-activity"}
          />
          <label htmlFor="activity-low">Low Activity</label>
        </div>

        <div className="medium-activity">
          <input
            type="radio"
            id="activity-medium"
            name="medium-activity"
            onClick={handleActivity}
            checked={activity === "medium-activity"}
          />

          <label htmlFor="activity-medium">Medium Activity</label>
        </div>

        <div className="high-activity">
          <input
            type="radio"
            id="activity-high"
            name="high-activity"
            onClick={handleActivity}
            checked={activity === "high-activity"}
          />
          <label htmlFor="activity-high">High Activity</label>
        </div>

        <div className="excessive-activity">
          <input
            type="radio"
            id="activity-excessive"
            name="excessive-activity"
            onClick={handleActivity}
            checked={activity === "excessive-activity"}
          />

          <label htmlFor="activity-excessive">Excessive Activity</label>
        </div>
      </div>

      {/*Calculate*/}
      <div className="Calculate">
        <button className="CalculateButton" onClick={handleResult}>
          Calculate
        </button>
        <p>Your daily requirement of Calories is : {result} </p>

        <button className="reset-btn" onClick={calcAgain}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CaloriesCalculator;
