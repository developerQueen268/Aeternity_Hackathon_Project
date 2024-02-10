// Function to fetch transaction history data from an API
function fetchTransactionHistory() {
    // Replace 'your-api-endpoint' with the actual endpoint to fetch transaction history data
    fetch('your-api-endpoint')
        .then(response => response.json())
        .then(data => populateTransactionHistory(data))
        .catch(error => console.error('Error fetching transaction history:', error));
}

// Function to populate transaction history data into the table
function populateTransactionHistory(data) {
    const tbody = document.querySelector('.history-table tbody');
    
    // Clear any existing rows in the table body
    tbody.innerHTML = '';

    // Loop through the transaction data and create table rows
    data.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
        `;
        tbody.appendChild(row);
    });
}

// Call the fetchTransactionHistory function when the page loads
window.onload = fetchTransactionHistory;
