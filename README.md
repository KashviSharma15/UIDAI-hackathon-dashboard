# 🏛️ UIDAI Aadhaar Analytics & Lifecycle Intelligence Dashboard

**From Enrolment to Lifecycle: The New Story of Aadhaar**

---

## 📌 Project Overview

This project is an end-to-end analytics and visualization platform built on official UIDAI Aadhaar datasets to:

- Analyze Aadhaar enrolment trends
- Study biometric and demographic update behavior
- Understand Aadhaar as a lifecycle identity system
- Provide interactive dashboards for policy and operational insights

The project transforms raw CSV datasets into actionable intelligence using:

- **Python & Pandas** for analytics
- **React** for interactive visualization

---

## 🎯 Problem Statement

UIDAI handles massive volumes of Aadhaar data related to:

- Enrolments
- Biometric updates
- Demographic corrections

However:

- Data is fragmented across multiple CSVs
- Manual analysis is difficult
- Decision-making remains reactive

This project builds a **data pipeline + interactive dashboard** to enable:

📊 **Lifecycle analysis, trend detection, and predictive governance insights**

---

## 🧠 Key Insights Discovered

- 🧒 **~65% of new enrolments are for 0–5 age group** → Aadhaar is now birth-linked
- 📈 **January shows massive biometric update spike** → seasonal infrastructure pressure
- 👶 **Several states have child-dominated biometric updates**
- 👨‍🦱 **>90% of demographic corrections are adults** → lifecycle maintenance phase
- 🗺️ **A few big states generate majority of national load**
- 🔁 **Aadhaar follows a clear lifecycle model:**

```
Birth → Enrolment → Child Updates → Adult Corrections → Stability
```

---

## 🗂️ Datasets Used

Official UIDAI datasets:

- Aadhaar Enrolment Dataset
- Aadhaar Biometric Update Dataset
- Aadhaar Demographic Update Dataset

Each dataset contains:

- `date`
- `state`
- `district`
- `pincode`
- Age-group specific counts

---

## 🧱 Project Architecture

```
Raw CSV Data
      ↓
Python + Pandas
      ↓
Clean Analytics Tables (CSV)
      ↓
JSON Conversion
      ↓
React Dashboard
      ↓
Interactive Charts, Filters, Maps
```

---

## 📁 Project Structure

```
UIDAI-hackathon/
├── data/              # Raw UIDAI datasets
│                      # Download from: https://event.data.gov.in/challenge/uidai-data-hackathon-2026/
├── notebook/          # Jupyter analysis notebooks
├── outputs/           # Final analytics CSV outputs
├── frontend/          # React dashboard
│   ├── public/data/   # JSON files used by React
│   ├── src/           # React source code
│   └── package.json
├── report/            # Submission documents
└── README.md
```

> **📥 Data Source:** Download the official UIDAI datasets from [UIDAI Data Hackathon 2026](https://event.data.gov.in/challenge/uidai-data-hackathon-2026/) and place them in the `data/` directory.

---

## 🧪 Analysis Notebooks

| Notebook | Purpose |
|----------|---------|
| `01_data_loading.ipynb` | Load and merge raw datasets |
| `02_demographic_analysis.ipynb` | Demographic update analysis |
| `03_enrolment_analysis.ipynb` | Enrolment analysis |
| `04_prepare_frontend_data.ipynb` | Convert CSV outputs to JSON |

---

## 🖥️ Frontend Dashboard

Built using:

- ⚛️ **React** (Vite)
- 📊 **Recharts**
- 🎨 **Modern UI**
- 🧭 **Interactive filters**
- 🗺️ **Map-ready architecture**

---

## 🚀 How to Run the Project Locally

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/UIDAI-hackathon-dashboard.git
cd UIDAI-hackathon-dashboard/frontend
```

### 🔹 2. Install Dependencies

```bash
npm install
```

### 🔹 3. Run the Dashboard

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🌐 Deployment

The dashboard can be deployed using:

- ✅ **Vercel** (recommended)
- Netlify
- GitHub Pages

### For Vercel:

- **Root directory:** `frontend`
- **Build command:** `npm run build`
- **Output:** `dist`

---

## 🏆 Hackathon Submission Contents

- ✅ This repository
- ✅ Analysis notebooks
- ✅ Submission PDF
- ✅ Interactive dashboard
- ✅ PPT

---

## 🛡️ Git Rules

Ignored in Git:

- `.venv/`
- `node_modules/`
- `__pycache__/`
- `.ipynb_checkpoints/`

---

## 🧠 Team Workflow

- Data pipeline is complete
- Team members only work inside:

```
frontend/
```

---

## 📈 Future Scope

- Live API integration
- AI-based anomaly detection
- Predictive workload forecasting
- Policy simulation tools
- Real-time dashboards

---

## 🏁 Final Note

**Aadhaar is no longer building identities. It is managing lives.**

This project demonstrates how UIDAI data can power next-generation digital governance.

---

## 👤 Author
**Stack Overflowers**

---

## 📄 License

This project is created for hackathon purposes and uses official UIDAI open datasets.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

For questions or feedback, please open an issue in this repository.

---

**⭐ If you find this project useful, please consider giving it a star!**
