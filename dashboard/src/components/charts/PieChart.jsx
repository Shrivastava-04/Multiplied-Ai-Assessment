import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ title, chartData = [], isDonut = false }) {
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <p>No data available</p>;
  }

  // 🎨 Color palettes
  const severityColors = [
    "#16A34A", // Low
    "#F59E0B", // Moderate
    "#EF4444", // High
    "#7F1D1D", // Critical
    "#9CA3AF", // Unknown
  ];

  const unsafeColors = [
    "#EF4444", // Unsafe Condition
    "#2563EB", // Behavior
    "#9CA3AF", // Unknown
  ];

  const colors = isDonut ? unsafeColors : severityColors;

  const data = {
    labels: chartData.map((item) => item.label),
    datasets: [
      {
        label: title,
        data: chartData.map((item) => item.value),
        backgroundColor: colors,
        borderColor: "#ffffff",
        borderWidth: 2,
        cutout: isDonut ? "60%" : "0%",
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 14,
          padding: 15,
          color: "#1E3A8A",
        },
      },
      tooltip: {
        backgroundColor: "#1E3A8A",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
      },
      title: { display: false },
    },
  };

  return (
    <>
      <h2 className="chart-title">{title}</h2>
      <div className="chart-wrapper">
        <Pie data={data} options={options} />
      </div>
    </>
  );
}

export default PieChart;
