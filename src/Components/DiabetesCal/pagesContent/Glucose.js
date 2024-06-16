import React from "react";

function Glucose({ formData, setFormData, formPoints, setFormPoints }) {
  function handleGlucose(e) {
    setFormData({ ...formData, Glucose: e.target.value });
    if (e.target.value === "Yes") {
      setFormPoints({ ...formPoints, Glucose: 6 });
    } else {
      setFormPoints({ ...formPoints, Glucose: 0 });
    }
  }
  return (
    <div>
      <input
        type="radio"
        id="yes"
        name="select"
        value="Yes"
        checked={formData.Glucose === "Yes"}
        onClick={handleGlucose}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        id="no"
        name="select"
        value="No"
        checked={formData.Glucose === "No"}
        onClick={handleGlucose}
      />
      <label htmlFor="no">No</label>

      <div className="glucose-points">
        <p style={{ display: "none" }}>{formPoints.Glucose}</p>
      </div>
    </div>
  );
}

export default Glucose;
