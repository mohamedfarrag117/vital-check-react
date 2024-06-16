import React from "react";

function Activity({ formData, setFormData, formPoints, setFormPoints }) {
  function handleActivity(e) {
    setFormData({ ...formData, Activity: e.target.value });
    if (e.target.value === "Yes") {
      setFormPoints({ ...formPoints, Activity: 0 });
    } else {
      setFormPoints({ ...formPoints, Activity: 2 });
    }
  }
  return (
    <div>
      <input
        type="radio"
        id="yes"
        name="select"
        value="Yes"
        checked={formData.Activity === "Yes"}
        onClick={handleActivity}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        id="no"
        name="select"
        value="No"
        checked={formData.Activity === "No"}
        onClick={handleActivity}
      />
      <label htmlFor="no">No</label>

      <div className="activity-points">
        <p style={{ display: "none" }}>{formPoints.Activity}</p>
      </div>
    </div>
  );
}

export default Activity;
