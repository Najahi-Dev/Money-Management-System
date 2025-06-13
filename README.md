# 💰 Pocket Money Tracker

### Overview  
The **Pocket Money Tracker** is a web-based application designed to help you manage personal finances and daily tasks. Featuring a sleek dark-themed interface with dynamic animations and data visualization, it includes a smooth curve line chart for transactions and a separate to-do list page. Built with **HTML**, **CSS**, and **JavaScript**, it uses `localStorage` for data persistence and allows **PDF report export**.

---

### 📅 Current Date and Time
**11:23 AM +0530, Friday, June 13, 2025**

---

### 🌐 Platforms
Accessible via any modern web browser.

---

### 📦 Dependencies
- [Chart.js](https://www.chartjs.org/) (via CDN)
- [jsPDF](https://github.com/parallax/jsPDF) (via CDN)

---

## 🔧 Features

### 💸 Financial Management

- **Transaction Tracking:** Add, delete, and filter transactions (Income/Expense) with values in **LKR**.
- **Date-Wise Filtering:** Filter transactions using start and end date inputs.
- **Balance Calculation:** Real-time calculation of **total income, expenses**, and **remaining balance**.
- **Chart Visualization:** Smooth curve **line chart** to display daily transactions within a date range.
- **PDF Report:** Generate a PDF report with **balance, income, expenses**, and all transactions.


### 🎨 Design

- **Dark Theme:** Modern UI with a consistent dark color scheme.
- **Animations:** Smooth **fade-in**, **slide-in**, and **row animations** for a better experience.

---

## 🚀 Installation

1. **Clone or Download:**  
   Clone the repo or download the ZIP file.

2. **File Structure:**  
   Ensure the following structure:

3. **Open in Browser:**  
Launch `index.html` in any modern browser (Chrome, Firefox, Edge, etc.)

4. **Internet Required:**  
The app fetches **Chart.js** and **jsPDF** from CDNs. For **offline** use, download and host them locally.

---

## 📋 Usage Guide

### 🏠 Home Page (`index.html`)
- **Add Transaction:** Enter description, amount (LKR), date, and type (income/expense), then click **Add**.
- **Filter Transactions:** Use **Start Date** and **End Date** to filter records and update chart.
- **Delete Transaction:** Click **Delete** on a row to remove a transaction.
- **Clear All Data:** Reset all data with confirmation.
- **Download Report:** Click **Download PDF Report** to generate and save a detailed report.
- **View Chart:** See a line chart of income and expenses filtered by date.

---

## 📁 File Structure


> *No server setup is required. This app runs entirely client-side.*

---

## ⚙️ Customization

- **Offline Support:** Replace CDN links with local copies of Chart.js and jsPDF.
- **Styling:** Modify `<style>` blocks in HTML to change colors, fonts, or animations.
- **Feature Enhancement:** Add features like:
  - Transaction categories
  - Task deadlines
  - Export/import data
  - Recurring transactions

---

## ⚠️ Known Limitations

- Requires internet access for CDN dependencies unless hosted locally.
- Data stored in `localStorage` is cleared when browser data is reset.
- PDF report includes **all** transactions, not just filtered ones.

---

## 🤝 Contributing

Fork the repository, make improvements, and submit a **pull request**.  
Suggestions for features or bug fixes are highly welcome!

---

## 🪪 License

This project is open-source and available under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 📬 Contact

For questions or support, reach out via the project repository or contact the developer.

**Last Updated:** June 13, 2025