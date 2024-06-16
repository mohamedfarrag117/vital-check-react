import React from "react";

function Age({ formData, setFormData, formPoints, setFormPoints }) {
  const resultAge = [
    "35 or less",
    "35 - 44",
    "45 - 54",
    "55 - 64",
    "65 or more",
  ];

  function handleAgeChange(e) {
    setFormData({ ...formData, Age: e.target.value });
    if (e.target.value === resultAge[0]) {
      setFormPoints({ ...formPoints, Age: 0 });
    } else if (e.target.value === resultAge[1]) {
      setFormPoints({ ...formPoints, Age: 2 });
    } else if (e.target.value === resultAge[2]) {
      setFormPoints({ ...formPoints, Age: 4 });
    } else if (e.target.value === resultAge[3]) {
      setFormPoints({ ...formPoints, Age: 6 });
    } else if (e.target.value === resultAge[4]) {
      setFormPoints({ ...formPoints, Age: 8 });
    }
  }

  return (
    <div>
      {resultAge.map((age, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`age${index}`}
            name="select"
            value={age}
            checked={formData.Age === age}
            onChange={handleAgeChange}
          />
          <label htmlFor={`age${index}`}>{age}</label>
        </div>
      ))}

      <div className="age-points">
        <p style={{ display: "none" }}>{formPoints.Age}</p>
      </div>
    </div>
  );
}

export default Age;
