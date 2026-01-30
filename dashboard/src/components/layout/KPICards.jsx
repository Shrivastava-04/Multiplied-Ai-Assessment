import "./KPICards.css";

function KPICards({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No KPI data available</p>;
  }

  const totalIncidents = data.length;

  const highCriticalCount = data.filter(
    (item) => item?.severity_level === 3 || item?.severity_level === 4,
  ).length;

  const getMostCommon = (field) => {
    const counts = {};
    data.forEach((item) => {
      let value = item?.[field];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        value = "Unknown";
      }
      counts[value] = (counts[value] || 0) + 1;
    });
    return (
      Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Unknown"
    );
  };

  return (
    <div className="kpi-container">
      <div className="kpi-card kpi-total">
        <h3>Total Incidents</h3>
        <p>{totalIncidents}</p>
      </div>
      <div className="kpi-card kpi-critical">
        <h3>High & Critical</h3>
        <p>{highCriticalCount}</p>
      </div>
      <div className="kpi-card kpi-category">
        <h3>Top Category</h3>
        <p>{getMostCommon("primary_category")}</p>
      </div>
      <div className="kpi-card kpi-location">
        <h3>Top Location</h3>
        <p>{getMostCommon("location")}</p>
      </div>
    </div>
  );
}

export default KPICards;
