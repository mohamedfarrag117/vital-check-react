import React from "react";

function Diet({ formData, setFormData, formPoints, setFormPoints }) {
  function handleDiet(e) {
    setFormData({ ...formData, Diet: e.target.value });
    if (e.target.value === "Everyday") {
      setFormPoints({ ...formPoints, Diet: 0 });
    } else {
      setFormPoints({ ...formPoints, Diet: 1 });
    }
  }
  return (
    <div>
      <input
        type="radio"
        id="everyday"
        name="select"
        value="Everyday"
        checked={formData.Diet === "Everyday"}
        onClick={handleDiet}
      />
      <label htmlFor="everyday">Everyday</label>
      <input
        type="radio"
        id="sometimes"
        name="select"
        value="Sometimes"
        checked={formData.Diet === "Sometimes"}
        onClick={handleDiet}
      />
      <label htmlFor="sometimes">Sometimes</label>

      <div className="diet-points">
        <p style={{ display: "none" }}>{formPoints.Diet}</p>
      </div>
    </div>
  );
}

export default Diet;
