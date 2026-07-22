# 🚀 Learning A.I. Tools

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![HTML5/CSS3](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/)

Welcome to **Learning-A.I.-Tools**! This repository serves as a centralized hub for AI-assisted web projects, UI/UX redesigns, and modern frontend application experiments.

---

## 🗂️ Repository Structure

```text
Learning-A.I.-Tools/
├── ERP/                    # NCU ERP Student Portal Redesign
│   ├── dashboard.html      # Main student dashboard interface
│   ├── styles.css          # NCU design system tokens & custom styling
│   ├── script.js           # Interactive components & Chart.js logic
│   ├── README.md           # ERP project documentation
│   └── reference/          # NCU Brand and Target ERP visual references
│
├── Webpage/                # React + TypeScript Web Application
│   ├── src/                # Modular React component source tree
│   ├── public/             # Static public assets
│   ├── legacy-static/      # Archived static HTML/CSS prototypes & reference assets
│   ├── README.md           # Webpage subproject documentation
│   └── package.json        # Dependencies & build scripts
│
├── .gitignore              # Repository-wide ignored paths & environment safeguards
├── CLAUDE.md               # Privacy, workflow, and commit standards
└── README.md               # Repository sitemap & main documentation
```

---

## 💻 Featured Projects

### 1. 🎓 [NCU ERP Student Portal Redesign](./ERP)
- **Overview**: A data-dense, modern student portal for **The NorthCap University (NCU)**. It revamps legacy administration interfaces into a streamlined dashboard with course schedules, backlog management, and performance analytics.
- **Tech Stack**: Vanilla HTML5, CSS3, JavaScript, Chart.js.
- **Documentation**: Learn more in the [ERP README](./ERP/README.md).

### 2. ⚡ [React + TypeScript Web App](./Webpage)
- **Overview**: A modern, high-performance web application constructed with **React 19**, **TypeScript**, and **Vite** HMR.
- **Tech Stack**: React 19, TypeScript, Vite, Oxlint.
- **Documentation**: Learn more in the [Webpage README](./Webpage/README.md).

---

## 🚀 Getting Started

To explore or run any project locally:

```bash
# Clone the repository
git clone https://github.com/JishnuKaushik/Learning-A.I.-Tools.git

# Navigate into the workspace
cd Learning-A.I.-Tools
```

### Running the ERP Portal
Open `ERP/dashboard.html` directly in your browser or serve it via Python:
```bash
python -m http.server 8000 --directory ERP
```

### Running the Web Application
```bash
cd Webpage
npm install
npm run dev
```

---

## 🛡️ Guidelines & Security

This repository follows strict guidelines for public releases:
- **Privacy First**: Sensitive student identifiers and personal credentials are never committed.
- **Workflow & Commit Standards**: Detailed in [CLAUDE.md](./CLAUDE.md).

---

## 📄 License

Distributed under the MIT License.