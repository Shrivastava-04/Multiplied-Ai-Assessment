# 🚧 Near Miss Safety Dashboard

An interactive data visualization dashboard built to analyze **Near Miss incidents** in construction and worksite environments. This project transforms a real-world safety dataset of approximately 7,800 records into meaningful insights through dynamic charts, KPIs, and trend analysis.

---

## 📌 Project Objective

This project demonstrates the ability to bridge domain expertise in industrial safety with modern software development practices:

- **Data Wrangling:** Processing and cleaning a large-scale (~7,800 records) structured JSON dataset.
- **Stability & Resilience:** Implementing defensive data handling to manage missing, null, or inconsistent values without application crashes.
- **Actionable Insights:** Visualizing safety patterns to help organizations identify risks before they turn into accidents.
- **UX/UI Design:** Delivering a clean, responsive, and professional interface suitable for safety officers and management.

> **What is a Near Miss?**
> A Near Miss is an unplanned event that did not result in injury, illness, or damage—but had the potential to do so. Examples include a worker slipping but regaining balance, or a tool falling from height but missing bystanders.

---

## 🛠 Tech Stack

| Layer           | Technology                      |
| :-------------- | :------------------------------ |
| **Frontend**    | React (Vite)                    |
| **Charts**      | Chart.js + react-chartjs-2      |
| **Language**    | JavaScript (ES6+)               |
| **Styling**     | Responsive CSS / Inline Layouts |
| **Data Source** | Static JSON Dataset             |

---

## ✨ Features

### 📈 Data Visualizations (5+ Charts)

- **Monthly Near Miss Trend (Line Chart):** Tracks incident frequency over time to identify seasonal risks.
- **Incidents by Primary Category (Bar Chart):** Highlights the most common hazard types (e.g., Electrical, Fall Risk).
- **Severity Level Distribution (Pie Chart):** Segregates incidents into Low, Moderate, High, and Critical risk levels.
- **Unsafe Condition vs. Behavior (Donut Chart):** Distinguishes between environmental risks and human actions.
- **Incidents by Location (Horizontal Bar Chart):** Pinpoints high-risk work zones within the site.

### 📌 KPI Summary Cards

Located at the top for immediate high-level insights:

- **Total Near Miss Incidents**
- **High & Critical Severity Count**
- **Most Common Hazard Category**
- **Top Incident Location**

---

## 🧠 Data Handling & Stability

Real-world safety data is often messy. This dashboard uses a robust processing utility (`dataProcessing.js`) to ensure the UI remains stable even with imperfect data.

| Issue                  | Handling Strategy                           |
| :--------------------- | :------------------------------------------ |
| **Missing Fields**     | Replaced with `"Unknown"`                   |
| **Empty Strings**      | Treated as missing values                   |
| **Null/Undefined**     | Safely defaulted to prevent runtime errors  |
| **Invalid Timestamps** | Filtered out from time-based trend analysis |
| **Unexpected Values**  | Grouped into an `"Other/Unknown"` category  |

---

## ⚙️ Setup Instructions

1.  **Clone the Repository**

    ```bash
    git clone <your-repo-link>
    cd dashboard
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    _Open the local URL provided (usually `http://localhost:5173`) in your browser._

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── charts/        # Reusable Chart.js components
│   └── layout/        # KPI cards and structural components
├── data/
│   └── nearMissData.json
├── utils/
│   └── dataProcessing.js # Logic for cleaning and grouping JSON data
├── App.jsx
└── main.jsx

```

## 🚀 Future Improvements

Live Filtering: Add date pickers and category dropdowns to filter charts dynamically.

Data Export: Enable users to export chart views as PDF or CSV reports.

Backend Integration: Move from a static JSON file to a live MongoDB/Node.js backend.

AI Integration: Implement an LLM-based "Safety Assistant" to query the data via natural language.

## 👤 Author

Harshit Shrivastava B.Tech Petroleum Engineering,
IIT (ISM) Dhanbad Aspiring Software Developer | Data & Safety Analytics Enthusiast

```

```
