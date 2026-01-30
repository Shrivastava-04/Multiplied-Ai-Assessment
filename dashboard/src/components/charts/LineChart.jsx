import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineChart({ title, labels = [], values = [] }) {
  if (!Array.isArray(labels) || !Array.isArray(values) || labels.length === 0) {
    return <p>No data available</p>;
  }

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        tension: 0.35,
        borderColor: "#2563EB",
        backgroundColor: "rgba(37, 99, 235, 0.15)",
        fill: true,
        pointBackgroundColor: "#1E40AF",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // ⭐ required
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <>
      <h2 className="chart-title">{title}</h2>
      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default LineChart;
