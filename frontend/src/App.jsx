import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load enrolment age distribution data
useEffect(() => {
  fetch("/data/enrolment_age_distribution_percentage.json")
    .then((res) => res.json())
    .then((json) => {
      // Handle different possible JSON shapes safely
      let formatted = [];

      if (json[0].index && json[0].value !== undefined) {
        // Case: index-value format
        formatted = json.map((row) => ({
          ageGroup: row.index.replaceAll("_", "-"),
          percentage: row.value,
        }));
      } else {
        // Case: column-based format
        formatted = [
          { ageGroup: "0-5", percentage: json[0].age_0_5 },
          { ageGroup: "5-17", percentage: json[0].age_5_17 },
          { ageGroup: "18+", percentage: json[0].age_18_greater },
        ];
      }

      setData(formatted);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error loading data:", err);
      setLoading(false);
    });
}, []);


  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Aadhaar Analytics Dashboard</h1>
      <p>
        Interactive dashboard to analyze Aadhaar enrolment, biometric updates,
        and demographic corrections.
      </p>

      <hr />

      <h2>Age-wise New Aadhaar Enrolment (%)</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="ageGroup" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" />
          </BarChart>
        </ResponsiveContainer>
      )}

      <p style={{ marginTop: "1rem", color: "#555" }}>
        Insight: More than <b>65%</b> of new Aadhaar enrolments are birth-linked
        (0–5 age group), confirming system maturity.
      </p>
    </div>
  );
}

export default App;
