import React from "react";

function Pressure({ formData, setFormData, formPoints, setFormPoints }) {
  function handlePressure(e) {
    setFormData({ ...formData, Pressure: e.target.value });
    if (e.target.value === "Yes") {
      setFormPoints({ ...formPoints, Pressure: 2 });
    } else {
      setFormPoints({ ...formPoints, Pressure: 0 });
    }
  }
  return (
    <div>
      <input
        type="radio"
        id="yes"
        name="select"
        value="Yes"
        checked={formData.Pressure === "Yes"}
        onClick={handlePressure}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        id="no"
        name="select"
        value="No"
        checked={formData.Pressure === "No"}
        onClick={handlePressure}
      />
      <label htmlFor="no">No</label>

      <div className="pressure-points">
        <p style={{ display: "none" }}>{formPoints.Pressure}</p>
      </div>
    </div>
  );
}

export default Pressure;
