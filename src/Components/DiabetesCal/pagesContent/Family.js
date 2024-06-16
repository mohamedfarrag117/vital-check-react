import React from "react";

function Family({ formData, setFormData, formPoints, setFormPoints }) {
  function handleFamilyChange(e) {
    setFormData({ ...formData, Family: e.target.value });
    if (e.target.value === "Yes") {
      setFormPoints({ ...formPoints, Family: 3 });
    } else {
      setFormPoints({ ...formPoints, Family: 0 });
    }
  }
  return (
    <div>
      <input
        type="radio"
        id="yes"
        name="select"
        value="Yes"
        checked={formData.Family === "Yes"}
        onClick={handleFamilyChange}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        id="no"
        name="select"
        value="No"
        checked={formData.Family === "No"}
        onClick={handleFamilyChange}
      />
      <label htmlFor="no">No</label>

      <div className="family-points">
        <p style={{ display: "none" }}>{formPoints.Family}</p>
      </div>
    </div>
  );
}

export default Family;
