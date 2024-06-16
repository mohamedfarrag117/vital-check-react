import React, { useEffect, useState } from "react";

function Waist({ formData, setFormData, formPoints, setFormPoints }) {
  const resultWaist = [];

  /* THIS PART SHOWS THE WORD MALE OR FEMALE DEPENDING ON WHAT HE CHOSE IN THE GENDER  but I may not display it after all*/
  const [questionGender, setQuestionGender] = useState("");

  function handleQuestionGender() {
    if (formData.Gender === "Male") {
      setQuestionGender("Male");
    } else if (formData.Gender === "Female") {
      setQuestionGender("Female");
    }
  }

  useEffect(() => {
    handleQuestionGender();
  });

  function handleGenderChange() {
    if (formData.Gender === "Male") {
      return resultWaist.push(
        "less than 90 cm",
        "90 - 100 cm",
        "100 cm or more"
      );
    } else if (formData.Gender === "Female") {
      return resultWaist.push("less than 80 cm", "80 - 90 cm", "90 cm or more");
    }
  }
  handleGenderChange();

  function handleWaistChange(e) {
    setFormData({ ...formData, Waist: e.target.value });

    if (e.target.value === resultWaist[0]) {
      setFormPoints({ ...formPoints, Waist: 0 });
    } else if (e.target.value === resultWaist[1]) {
      setFormPoints({ ...formPoints, Waist: 4 });
    } else if (e.target.value === resultWaist[2]) {
      setFormPoints({ ...formPoints, Waist: 7 });
    }
  }

  return (
    <div>
      <div className="gender-waist">
        <p style={{ display: "none" }}>{questionGender}</p>
        {resultWaist.map((waist, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`waist${index}`}
              name="select"
              value={waist}
              checked={formData.Waist === waist}
              onChange={handleWaistChange}
            />
            <label htmlFor={`waist${index}`}>{waist}</label>
          </div>
        ))}
      </div>

      <div className="waist-points">
        <p style={{ display: "none" }}>{formPoints.Waist}</p>
      </div>
    </div>
  );
}

export default Waist;
