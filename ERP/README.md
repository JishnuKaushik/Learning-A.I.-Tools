# 🎓 NCU ERP Student Portal Redesign

An upgraded, modern student portal interface for **The NorthCap University (NCU)**, designed to replace legacy campus management interfaces with a clean, responsive, and data-dense user experience.

---

## 🌟 Key Highlights

- **Brand-Faithful Design System**: Integrates NCU's signature color palette (`#0d6efd` primary blue, grays, and rounded cards) with modern UI layout patterns.
- **Data-Dense Dashboard**: Features student schedules, backlog courses, quick stats, course progress, and announcements.
- **Zero-Build Architecture**: Built entirely with standard Web technologies (HTML5, CSS3, Vanilla JS) for fast loading and low overhead.
- **Chart & Analytics Integration**: Powered by Chart.js (via CDN) for real-time visual statistics.

---

## 📁 Project Structure

```text
ERP/
├── dashboard.html          # Main student portal dashboard
├── styles.css              # Custom styling & NCU design tokens
├── script.js               # Interactive components & chart scripts
├── claude.md               # Iterative design & comparison guidelines
└── reference/
    ├── ncu-brand/          # Screenshots of live NCU portal (style baseline)
    └── erp-target/         # PreSkool redesign references (structure & layout target)
```

---

## 🚀 Getting Started

### Option 1: Open Directly
Simply double-click `dashboard.html` or open it in your web browser of choice.

### Option 2: Local Static Server
You can also launch it using any static HTTP server:

```bash
# Using Python
python -m http.server 8000 --directory ERP

# Using Node / npx
npx serve ERP
```

Then visit `http://localhost:8000` (or `http://localhost:3000`).

---

## 🎨 Design Methodology

This project is built using an **Iterative Comparison Loop**:
1. **Style Source (`reference/ncu-brand`)**: Ensures brand accuracy (colors, logos, font hierarchies).
2. **Structure Source (`reference/erp-target`)**: Modernizes page layouts, navigation drawers, and widget cards.
