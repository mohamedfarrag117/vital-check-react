import React from "react";

function Smoker({ formData, setFormData, formPoints, setFormPoints }) {
  function handleSmoker(e) {
    setFormData({ ...formData, Smoker: e.target.value });
    if (e.target.value === "Yes") {
      setFormPoints({ ...formPoints, Smoker: 2 });
    } else {
      setFormPoints({ ...formPoints, Smoker: 0 });
    }
  }
  return (
    <div>
      <input
        type="radio"
        id="yes"
        name="select"
        value="Yes"
        checked={formData.Smoker === "Yes"}
        onClick={handleSmoker}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        id="no"
        name="select"
        value="No"
        checked={formData.Smoker === "No"}
        onClick={handleSmoker}
      />
      <label htmlFor="no">No</label>

      <div className="smoker-points">
        <p style={{ display: "none" }}>{formPoints.Smoker}</p>
      </div>
    </div>
  );
}

export default Smoker;
