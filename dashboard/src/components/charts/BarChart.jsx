import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function BarChart({ title, chartData, horizontal = false }) {
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <p>No data available</p>;
  }

  // 🎨 Color sets
  const multiColors = [
    "#2563EB",
    "#16A34A",
    "#F59E0B",
    "#EF4444",
    "#7C3AED",
    "#DB2777",
    "#0D9488",
    "#1E40AF",
    "#F97316",
    "#14B8A6",
    "#E11D48",
  ];

  const data = {
    labels: chartData.map((item) => item.label),
    datasets: [
      {
        label: title,
        data: chartData.map((item) => item.value),
        backgroundColor: horizontal ? "rgba(37, 99, 235, 0.7)" : multiColors,
        borderColor: horizontal ? "#1E40AF" : "transparent",
        borderWidth: horizontal ? 1 : 0,
        borderRadius: 6,
        hoverBackgroundColor: horizontal
          ? "#1E40AF"
          : multiColors.map((c) => c + "CC"),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: "#1E3A8A",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { maxRotation: 45, minRotation: 30 },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.05)" },
      },
    },
  };

  return (
    <>
      <h2 className="chart-title">{title}</h2>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

export default BarChart;
