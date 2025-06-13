let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let balance = transactions.reduce((acc, curr) =>
    curr.type === 'income' ? acc + curr.amount : acc - curr.amount, 0);
let chart;

function updateBalance() {
    document.getElementById('balance').textContent = `Balance: ₨${balance.toFixed(2)}`;
}

function showFeedback(message, isError = true) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.style.color = isError ? '#ff6b6b' : '#2ecc71';
    setTimeout(() => feedback.textContent = '', 3000);
}

function updateTable(filteredTransactions = transactions) {
    const tbody = document.getElementById('transactionBody');
    tbody.innerHTML = '';
    filteredTransactions.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.1}s`;
        row.innerHTML = `
  <td>${transaction.description}</td>
  <td class="${transaction.type}">${transaction.type === 'income' ? '+' : '-'}₨${transaction.amount.toFixed(2)}</td>
  <td>${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
  <td>${transaction.date}</td>
  <td><button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button></td>
`;
        tbody.appendChild(row);
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateBalance();
    updateChart();
}

function addTransaction() {
    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const transactionDate = document.getElementById('transactionDate').value || new Date().toISOString().split('T')[0];
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount) || amount <= 0) {
        showFeedback('Please enter a valid description and amount.');
        return;
    }

    const transaction = {
        description,
        amount,
        type,
        date: transactionDate
    };

    transactions.push(transaction);
    balance = type === 'income' ? balance + amount : balance - amount;

    updateTable();
    showFeedback('Transaction added successfully!', false);
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('transactionDate').value = '';
}

function deleteTransaction(index) {
    const transaction = transactions[index];
    balance = transaction.type === 'income' ? balance - transaction.amount : balance + transaction.amount;
    transactions.splice(index, 1);
    updateTable();
    showFeedback('Transaction deleted successfully!', false);
}

function filterByDate() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    let filteredTransactions = [...transactions];

    if (startDate && endDate) {
        filteredTransactions = transactions.filter(t => {
            const tDate = new Date(t.date);
            const start = new Date(startDate);
            const end = new Date(endDate);
            return tDate >= start && tDate <= end;
        });
    }

    updateTable(filteredTransactions);
}

function clearAll() {
    if (confirm('Are you sure you want to clear all transactions?')) {
        transactions = [];
        balance = 0;
        localStorage.removeItem('transactions');
        updateTable();
        showFeedback('All data cleared!', false);
    }
}

function downloadReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    doc.setFontSize(16);
    doc.text('Pocket Money Tracker Report', 20, 20);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleString('en-GB')}`, 20, 30);
    doc.text('----------------------------------------', 20, 35);
    doc.text(`Current Balance: ₨${balance.toFixed(2)}`, 20, 45);
    doc.text(`Total Income: ₨${totalIncome.toFixed(2)}`, 20, 55);
    doc.text(`Total Expenses: ₨${totalExpenses.toFixed(2)}`, 20, 65);
    doc.text('----------------------------------------', 20, 75);
    doc.text('Transactions:', 20, 85);

    let y = 95;
    transactions.forEach(t => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
        doc.text(
            `${t.date} | ${t.type.charAt(0).toUpperCase() + t.type.slice(1)} | ₨${t.amount.toFixed(2)} | ${t.description}`,
            20,
            y
        );
        y += 10;
    });

    doc.save(`Pocket_Money_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
    showFeedback('PDF report downloaded successfully!', false);
}

function updateChart() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    let filteredTransactions = [...transactions];

    if (startDate && endDate) {
        filteredTransactions = transactions.filter(t => {
            const tDate = new Date(t.date);
            const start = new Date(startDate);
            const end = new Date(endDate);
            return tDate >= start && tDate <= end;
        });
    }

    const dates = [...new Set(filteredTransactions.map(t => t.date))].sort();
    const incomeData = dates.map(date => {
        return filteredTransactions
            .filter(t => t.type === 'income' && t.date === date)
            .reduce((sum, t) => sum + t.amount, 0);
    });
    const expenseData = dates.map(date => {
        return filteredTransactions
            .filter(t => t.type === 'expense' && t.date === date)
            .reduce((sum, t) => sum + t.amount, 0);
    });

    if (chart) chart.destroy();
    const ctx = document.getElementById('transactionChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Income (LKR)',
                    data: incomeData,
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Expenses (LKR)',
                    data: expenseData,
                    borderColor: '#ff4757',
                    backgroundColor: 'rgba(255, 71, 87, 0.2)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount (LKR)',
                        color: '#e0e0e0'
                    },
                    grid: {
                        color: '#444'
                    },
                    ticks: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date',
                        color: '#e0e0e0'
                    },
                    grid: {
                        color: '#444'
                    },
                    ticks: {
                        color: '#e0e0e0'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e0e0e0'
                    }
                }
            }
        }
    });
}

// Initialize on page load
updateTable();