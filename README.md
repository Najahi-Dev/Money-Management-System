Pocket Money Tracker
Overview
The Pocket Money Tracker is a web-based application designed to help you manage your personal finances and daily tasks. It features a sleek dark-themed interface with dynamic animations, a smooth curve line chart for visualizing transactions, and a separate to-do list page. Built with HTML, CSS, and JavaScript, it uses localStorage for data persistence and includes a PDF report export option.

Current Date and Time: 11:20 AM +0530, Friday, June 13, 2025
Platforms: Accessible on any modern web browser
Dependencies: Chart.js and jsPDF (loaded via CDN)

Features
Financial Management

Transaction Tracking: Add, delete, and filter transactions (income or expense) with amounts in LKR (Sri Lankan Rupees).
Date-Wise Filtering: Filter transactions by a customizable date range using start and end date inputs.
Balance Calculation: Real-time balance updates based on total income and expenses.
Chart Visualization: Smooth curve line chart showing daily income and expenses within the selected date range.
PDF Report: Download a comprehensive report including balance, total income, total expenses, and all transactions.

To-Do List

Task Management: Add, mark as complete, and delete daily tasks on a separate to-do page.
Persistence: Tasks are saved using localStorage and accessible across sessions.
User Interface: Animated task list with checkboxes and delete buttons.

Navigation

Navigation Bar: Switch between "Home" (transactions) and "To-Do" pages with a styled navigation bar.

Design

Dark Theme: Consistent dark color scheme for a modern look.
Animations: Smooth fade-in, slide-in, and row animations for an engaging experience.

Installation

Clone or Download: Obtain the project files by cloning the repository or downloading the ZIP file.
File Structure: Ensure both index.html and todo.html are in the same directory.
Open in Browser: Open index.html in any modern web browser (e.g., Chrome, Firefox, Edge) to start using the application.
Internet Connection: Required initially for loading Chart.js and jsPDF from CDNs. For offline use, download the libraries and host them locally.

Usage
Home Page (index.html)

Add Transaction: Enter a description, amount (in LKR), date (optional), and type (income/expense), then click "Add Transaction".
Filter Transactions: Use "Start Date" and "End Date" to filter transactions and update the chart.
Delete Transaction: Click "Delete" next to a transaction to remove it.
Clear All Data: Use "Clear All Data" with confirmation to reset transactions.
Download Report: Click "Download PDF Report" to generate a PDF file with all transaction details.
View Chart: See a dynamic chart of income and expenses based on the filtered date range.

File Structure

index.html: Main page for financial tracking and chart visualization.
No additional server setup required; runs client-side.

Customization

Offline Use: Replace CDN links with local copies of Chart.js and jsPDF.
Styling: Modify the CSS in the <style> tags to adjust colors, sizes, or animations.
Enhancements: Add more features like transaction categories, task deadlines, or export options by extending the JavaScript code.

Known Limitations

Requires an initial internet connection for CDN dependencies.
Data is stored in localStorage and cleared when the browser data is cleared.
PDF report includes all transactions, not just filtered ones.

Contributing
Feel free to fork the repository, make improvements, and submit pull requests. Suggestions for new features or bug fixes are welcome!
License
This project is open-source and available under the MIT License. See the LICENSE file for details (if included).
Contact
For questions or support, please reach out via the project repository or contact the developer.

Last Updated: June 13, 2025