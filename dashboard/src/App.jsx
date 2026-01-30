import { useMemo } from "react";
import nearMissData from "./data/nearMissData.json";

import KPICards from "./components/layout/KPICards";
import BarChart from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import PieChart from "./components/charts/PieChart";
import "./App.css";

import {
  groupByField,
  groupByMonthYear,
  toChartData,
} from "./utils/dataProcessing";

function App() {
  const safeData = Array.isArray(nearMissData) ? nearMissData : [];

  const monthlyData = useMemo(() => groupByMonthYear(safeData), [safeData]);
  const monthlyLabels = Object.keys(monthlyData);
  const monthlyValues = Object.values(monthlyData);

  const categoryChartData = useMemo(() => {
    return toChartData(groupByField(safeData, "primary_category"));
  }, [safeData]);

  const severityChartData = useMemo(() => {
    const map = { 1: "Low", 2: "Moderate", 3: "High", 4: "Critical" };
    const counts = {};
    safeData.forEach((item) => {
      const label = map[item?.severity_level] || "Unknown";
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts).map(([label, value]) => ({ label, value }));
  }, [safeData]);

  const locationChartData = useMemo(() => {
    return toChartData(groupByField(safeData, "location")).sort(
      (a, b) => b.value - a.value,
    );
  }, [safeData]);

  const unsafeTypeChartData = useMemo(() => {
    return toChartData(groupByField(safeData, "unsafe_condition_or_behavior"));
  }, [safeData]);

  return (
    // <div className="dashboard-container">
    //   <h1 className="dashboard-title">🚧 Near Miss Safety Dashboard</h1>

    //   <KPICards data={safeData} />

    //   <div className="chart-row">
    //     <div className="chart-card">
    //       <LineChart
    //         title="Monthly Near Miss Trend"
    //         labels={monthlyLabels}
    //         values={monthlyValues}
    //       />
    //     </div>
    //     <div className="chart-card">
    //       <BarChart
    //         title="Incidents by Category"
    //         chartData={categoryChartData}
    //       />
    //     </div>
    //   </div>

    //   <div className="chart-row">
    //     <div className="chart-card">
    //       <PieChart
    //         title="Severity Distribution"
    //         chartData={severityChartData}
    //       />
    //     </div>
    //     <div className="chart-card">
    //       <PieChart
    //         title="Unsafe Condition vs Behavior"
    //         chartData={unsafeTypeChartData}
    //         isDonut
    //       />
    //     </div>
    //   </div>

    //   <div className="chart-row">
    //     <div className="chart-card full-width">
    //       <BarChart
    //         title="Incidents by Location"
    //         chartData={locationChartData}
    //         horizontal
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="dashboard-container">
      <h1 className="dashboard-title">🚧 Near Miss Safety Dashboard</h1>

      <KPICards data={safeData} />

      {/* ROW 1 — Monthly Trend FULL WIDTH */}
      <div className="chart-grid">
        <div className="chart-card chart-full">
          <LineChart
            title="Monthly Near Miss Trend"
            labels={monthlyLabels}
            values={monthlyValues}
          />
        </div>
      </div>

      {/* ROW 2 — Category + Location */}
      <div className="chart-grid">
        <div className="chart-card">
          <BarChart
            title="Incidents by Category"
            chartData={categoryChartData}
          />
        </div>

        <div className="chart-card">
          <BarChart
            title="Incidents by Location"
            chartData={locationChartData}
            horizontal
          />
        </div>
      </div>

      {/* ROW 3 — BOTH PIE CHARTS SIDE BY SIDE */}
      <div className="chart-grid">
        <div className="chart-card">
          <PieChart
            title="Severity Distribution"
            chartData={severityChartData}
          />
        </div>

        <div className="chart-card">
          <PieChart
            title="Unsafe Condition vs Behavior"
            chartData={unsafeTypeChartData}
            isDonut
          />
        </div>
      </div>
    </div>
  );
}

export default App;
