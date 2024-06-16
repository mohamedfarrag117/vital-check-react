import React from "react";
import "./DiabetesCal.css";
import { useState } from "react";
import Age from "./pagesContent/Age";
import Gender from "./pagesContent/Gender";
import Family from "./pagesContent/Family";
import Glucose from "./pagesContent/Glucose";
import Pressure from "./pagesContent/Pressure";
import Smoker from "./pagesContent/Smoker";
import Diet from "./pagesContent/Diet";
import Activity from "./pagesContent/Activity";
import Waist from "./pagesContent/Waist";
import Result from "./pagesContent/Result";

function DiabetesCal() {
  const [page, setPage] = useState(0);
  const totalPages = 9;

  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Family: "",
    Glucose: "",
    Pressure: "",
    Smoker: "",
    Diet: "",
    Activity: "",
    Waist: "",
    Result: "",
  });

  const [formPoints, setFormPoints] = useState({
    Age: 0,
    Gender: 0,
    Family: 0,
    Glucose: 0,
    Pressure: 0,
    Smoker: 0,
    Diet: 0,
    Activity: 0,
    Waist: 0,
  });

  const isAnswered = (index) => {
    const keys = Object.keys(formData);
    return formData[keys[index]] !== "";
  };

  function isAllAnswered() {
    // Check if all questions except the Result page are answered
    const keys = Object.keys(formData);
    return keys.slice(0, 9).every((key) => formData[key] !== "");
  }

  const formTitles = [
    "Age",
    "Gender",
    "Any Family member (Father - Mother - Brother - Sister - Child) has diabetes from Type 1 or 2?",
    "Did you have high Glucose level in your blood before?",
    "Do you have high blood Pressure? ",
    "Are you a Smoker?",
    "Hom much do you eat fruits and vegetables?",
    "Do you exercise at least 2.5 hours weekly? ",
    "Your waist measurement taken below the ribs (usually at the level of the navel, and while standing)",
    "Result:",
  ];

  function ShowPage() {
    switch (page) {
      case 0:
        return (
          <Age
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 1:
        return (
          <Gender
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 2:
        return (
          <Family
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 3:
        return (
          <Glucose
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 4:
        return (
          <Pressure
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 5:
        return (
          <Smoker
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 6:
        return (
          <Diet
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 7:
        return (
          <Activity
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 8:
        return (
          <Waist
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      case 9:
        return (
          <Result
            formData={formData}
            setFormData={setFormData}
            formPoints={formPoints}
            setFormPoints={setFormPoints}
          />
        );
      default:
        return page;
    }
  }

  function handleNext() {
    if (page === 9) {
      return alert("no more");
    }

    if (page === 0 && formData.Age === "") {
      return setPage(0);
    } else if (page === 1 && formData.Gender === "") {
      return setPage(1);
    } else if (page === 2 && formData.Family === "") {
      return setPage(2);
    } else if (page === 3 && formData.Glucose === "") {
      return setPage(3);
    } else if (page === 4 && formData.Pressure === "") {
      return setPage(4);
    } else if (page === 5 && formData.Smoker === "") {
      return setPage(5);
    } else if (page === 6 && formData.Diet === "") {
      return setPage(6);
    } else if (page === 7 && formData.Activity === "") {
      return setPage(7);
    } else if (page === 8 && formData.Waist === "") {
      // Check if the waist question is answered based on the current gender
      if (
        (formData.Gender === "Male" && formData.Waist === "") ||
        (formData.Gender === "Female" && formData.Waist === "")
      ) {
        return setPage(8);
      }
    }
    setPage((currPage) => currPage + 1);
  }

  function handlePrevious() {
    if (page === 0) {
      return alert("no more");
    } else {
      setPage((currPage) => currPage - 1);
    }
  }

  function handleCalculateAgain() {
    setPage(0);
    setFormData({
      Age: "",
      Gender: "",
      Family: "",
      Glucose: "",
      Pressure: "",
      Smoker: "",
      Diet: "",
      Activity: "",
      Waist: "",
      Result: "",
    });
    setFormPoints(0);
  }

  return (
    <div>
      <form>
        <div className="form-container">
          <header className="pageTitle">
            <div className="diabetes-header">
              <h1 className="title">Diabetes Risk Calculator</h1>
              <p className="diabetes-about">
                <strong>The diabetes risk calculator</strong> is a calculator
                used to evaluate the risk of developing type 2 diabetes, and it
                depends on the person’s gender, age, weight, use of high blood
                pressure medications or not, family history of diabetes, and
                smoking.
              </p>
            </div>
            <nav className="navigation-bar">
              <ul>
                {formTitles.map((title, index) => {
                  const isAnsweredFlag = isAnswered(index);
                  const isResult = index === formTitles.length - 1;
                  const disabled = !isAllAnswered() && isResult; // Disable "Result" button if any question is unanswered
                  return (
                    <li key={index} className="nav-item">
                      {isAnsweredFlag || isResult ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setPage(index);
                          }}
                          className={index === page ? "active" : ""}
                          disabled={disabled}
                        >
                          {isResult
                            ? "Result"
                            : isAnsweredFlag
                            ? "✔"
                            : index + 1}
                        </button>
                      ) : (
                        <span className="disabled-link">
                          {isResult ? "Result" : index + 1}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <p className="currentpage">{formTitles[page]}</p>
          </header>

          <body className="pageBody">{ShowPage()}</body>

          <footer className="pageFooter">
            <button
              type="button"
              className="PreviousButton"
              onClick={handlePrevious}
              disabled={page === 0}
            >
              Previous
            </button>

            {page < totalPages ? (
              <button
                type="button"
                className="NextButton"
                onClick={handleNext}
                disabled={
                  (page === 0 && formData.Age === "") ||
                  (page === 1 && formData.Gender === "") ||
                  (page === 2 && formData.Family === "") ||
                  (page === 3 && formData.Glucose === "") ||
                  (page === 4 && formData.Pressure === "") ||
                  (page === 5 && formData.Smoker === "") ||
                  (page === 6 && formData.Diet === "") ||
                  (page === 7 && formData.Activity === "") ||
                  (page === 8 && formData.Waist === "")
                }
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="CalcAgainButton"
                onClick={handleCalculateAgain}
              >
                Calculate again
              </button>
            )}
          </footer>
        </div>
      </form>
    </div>
  );
}

export default DiabetesCal;
