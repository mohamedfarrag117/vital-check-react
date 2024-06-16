import React, { useEffect, useState } from "react";

function Result({ formPoints }) {
  const [totalResult, setTotalResult] = useState("");
  const [summary, setSummary] = useState({
    title: "",
    more: "",
  });

  function handleTotalResult() {
    setTotalResult(
      formPoints.Age +
        formPoints.Gender +
        formPoints.Family +
        formPoints.Glucose +
        formPoints.Pressure +
        formPoints.Smoker +
        formPoints.Diet +
        formPoints.Activity +
        formPoints.Waist
    );

    if (totalResult <= 5) {
      setSummary({
        ...summary,
        title: " Low risk",
        more: "If you scored 5 or less you are at low risk of developing type 2 diabetes within 5 years — approximately 1 person in every 100 will develop type 2 diabetes.",
      });
    } else if (totalResult >= 6 && totalResult <= 11) {
      setSummary({
        ...summary,
        title: "Intermediate risk",
        more: "If you scored 6 to 11 you are at intermediate risk of developing type 2 diabetes within 5 years. For scores of 6 to 8, approximately 1 person in every 50 will develop diabetes. For scores of 9 to 11, approximately 1 person in every 30 will develop diabetes.",
      });
    } else if (totalResult >= 12) {
      setSummary({
        ...summary,
        title: "High risk",
        more: "If you scored 12 or more you are at high risk of developing type 2 diabetes within 5 years or you may have undiagnosed type 2 diabetes. For scores of 12 to 15, approximately 1 person in every 14 will develop diabetes. For scores of 16 to 19, approximately one person in every 7 will develop diabetes. For scores of 20 and above, approximately one person in every 3 will develop diabetes. Print this form and take it to your doctor.",
      });
    }
  }

  useEffect(() => {
    handleTotalResult();
  });

  return (
    <div style={{ backgroundColor: "#0e2634", padding: "25px" }}>
      <h2>Total Points:{totalResult}</h2>
      <h1 style={{ color: "#37c0be" }}>{summary.title}</h1>
      <h3>{summary.more}</h3>
    </div>
  );
}

export default Result;
