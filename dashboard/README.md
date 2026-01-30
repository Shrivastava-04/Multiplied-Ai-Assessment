🚧 Near Miss Safety Dashboard

An interactive data visualization dashboard built to analyze Near Miss incidents in a construction/worksite environment. This project transforms a real-world safety dataset into meaningful insights through charts, KPIs, and trend analysis.

📌 Project Objective

This project was developed to demonstrate the ability to:

Work with a real-world structured dataset (~7,800 records)

Build a stable and interactive dashboard

Visualize safety trends and risk patterns

Handle incomplete and inconsistent data gracefully

Deliver a clean, readable, and responsive user interface

📊 What is a Near Miss?

A Near Miss is an unplanned event that could have resulted in injury, damage, or loss — but did not, due to chance or timely intervention.

Examples:

A worker slips but regains balance

A falling tool narrowly misses someone

A vehicle stops just before a collision

Analyzing near misses helps organizations identify risk patterns and prevent future accidents.

🛠 Tech Stack
Layer Technology
Frontend React (Vite)
Charts Chart.js + react-chartjs-2
Language JavaScript (ES6+)
Styling Inline CSS (responsive layout)
Data Source Static JSON dataset
✨ Features
📈 Data Visualizations (5+ Charts)

Monthly Near Miss Trend (Line Chart)
Shows how incident frequency changes over time.

Incidents by Primary Category (Bar Chart)
Highlights the most common hazard types.

Severity Level Distribution (Pie Chart)
Groups incidents into Low, Moderate, High, and Critical risk levels.

Unsafe Condition vs Behavior (Donut Chart)
Distinguishes between environmental risks and human behavior risks.

Incidents by Location (Horizontal Bar Chart)
Identifies high-risk work areas.

📌 KPI Summary Cards

Displayed at the top of the dashboard:

Total Near Miss Incidents

High & Critical Severity Incidents

Most Common Hazard Category

Most Common Incident Location

These provide quick, high-level safety insights.

🧠 Data Handling & Stability

Real-world datasets often contain missing or inconsistent values. The dashboard includes defensive data handling to ensure stability and prevent crashes.

✅ Assumptions & Data Cleaning Rules
Issue Handling Strategy
Missing fields Replaced with "Unknown"
Empty strings Treated as missing values
Null/undefined values Safely defaulted
Invalid timestamps Ignored in time-based charts
Unexpected severity levels Categorized as "Unknown"
Non-array dataset App defaults to empty state

All charts gracefully display “No data available” if inputs are invalid.

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-repo-link>
cd dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev

Open the local URL shown in the terminal (usually http://localhost:5173
).

📁 Project Structure
src/
│
├── components/
│ ├── charts/ # Reusable chart components
│ └── layout/ # KPI cards and layout components
│
├── data/
│ └── nearMissData.json
│
├── utils/
│ └── dataProcessing.js # Data grouping & cleaning logic
│
├── App.jsx
└── main.jsx

📊 Evaluation Alignment

This dashboard satisfies the key assessment requirements:

✔ Loads and processes a real-world JSON dataset

✔ Includes 5+ meaningful visualizations

✔ Provides interactive charts with tooltips

✔ Handles missing and inconsistent data safely

✔ Delivers a clean, structured, and readable UI

🚀 Future Improvements

Filters by date, region, or severity

Export charts as images or reports

Backend API integration

AI-powered question answering on safety data

👤 Author

Harshit Shrivastava
B.Tech Petroleum Engineering, IIT (ISM) Dhanbad
Aspiring Software Developer | Data & Safety Analytics Enthusiast
