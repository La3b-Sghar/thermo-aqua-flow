# ♻️ AI-Powered Maintenance System for Stirling Engines in Industrial Water Reuse

## 🔧 Project Overview

This project is part of a hackathon challenge targeting sustainable energy and water use in **pharmaceutical and textile industries in Tunisia**. Our solution focuses on:

- Recovering **waste hot water (25°C to 90°C)** from factory discharge
- Using a **Stirling engine** to generate electricity from the temperature difference
- Cleaning the post-energy wastewater using **phytoremediation (feto)** to make it **potable or reusable**
- Applying **AI to monitor and predict system performance and maintenance needs**

---

## 🧠 AI Integration

The AI module is designed to:
- 🔍 Monitor **sensor inputs** (temperature, flow rate, pH)
- ⚠️ Predict **when the Stirling engine needs maintenance**
- 📉 Forecast **performance drops before they happen**
- 💬 Provide **actionable recommendations** through a chatbot or dashboard

### 📈 Input Features
- `flow_rate` (L/min)
- `temperature_high` (°C)
- `temperature_low` (°C)
- `pH_level`
- *(optional)* pressure, vibration, power output

### 🎯 Output
- `performance_score` (0–100)
- `maintenance_required` (Yes/No)

---

## 🧪 Dataset

The dataset used for training is a **synthetic simulation** based on realistic factory operating conditions. Due to the absence of public datasets specific to Stirling engines in wastewater recovery, data was generated to reflect real sensor behavior.


---

## 🚀 How to Run the Model

1. Clone the repo:
   ```bash
   git clone https://github.com/La3b Sghar/stirling-ai-maintenance.git
   cd stirling-ai-maintenance
