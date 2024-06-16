import React from "react";

function Gender({ formData, setFormData, formPoints, setFormPoints }) {
  const resultGender = ["Male", "Female"];

  function handleGenderChange(e) {
    setFormData({ ...formData, Gender: e.target.value, Waist: "" });

    if (e.target.value === "Male") {
      setFormPoints({ ...formPoints, Gender: 3, Waist: 0 });
    } else {
      setFormPoints({ ...formPoints, Gender: 0, Waist: 0 });
    }
  }

  return (
    <div>
      <input
        type="radio"
        id="gender-select"
        name="select"
        value="Male"
        checked={formData.Gender === "Male"}
        onChange={handleGenderChange}
      />
      <label htmlFor="gender-select">{resultGender[0]}</label>
      <br></br>
      <input
        type="radio"
        id="gender-select"
        name="select"
        value="Female"
        checked={formData.Gender === "Female"}
        onChange={handleGenderChange}
      />
      <label htmlFor="gender-select">{resultGender[1]}</label>

      <div className="gender-points">
        <p style={{ display: "none" }}>{formPoints.Gender}</p>
      </div>
    </div>
  );
}

export default Gender;
