export function getSafeValue(value, fallback = "Unknown") {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string" && value.trim() === "") return fallback;
  return value;
}

export function groupByField(data, field, fallback = "Unknown") {
  const result = {};
  if (!Array.isArray(data)) return result;

  data.forEach((item) => {
    const key = getSafeValue(item?.[field], fallback);
    result[key] = (result[key] || 0) + 1;
  });

  return result;
}

export function groupByMonthYear(data) {
  const result = {};
  if (!Array.isArray(data)) return result;

  data.forEach((item) => {
    const timestamp = item?.incident_date;
    if (!timestamp || isNaN(timestamp)) return;

    const date = new Date(Number(timestamp));
    if (isNaN(date.getTime())) return;

    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const key = `${month} ${year}`;

    result[key] = (result[key] || 0) + 1;
  });

  return result;
}

export function toChartData(groupedObject) {
  if (!groupedObject || typeof groupedObject !== "object") return [];

  return Object.entries(groupedObject).map(([label, value]) => ({
    label,
    value,
  }));
}
