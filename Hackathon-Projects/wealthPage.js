// Sample data for assets and investments (replace with your actual data or fetch from an API)
const assetsData = [
    { name: "Savings Account", balance: 5000 },
    { name: "Stocks", balance: 10000 },
    // Add more assets as needed
];

const investmentsData = [
    { name: "Real Estate", value: 75000 },
    { name: "Mutual Funds", value: 20000 },
    // Add more investments as needed
];

// Function to populate assets data into the HTML
function populateAssets() {
    const assetsList = document.querySelector('.assets ul');
    assetsData.forEach(asset => {
        const listItem = document.createElement('li');
        listItem.textContent = `${asset.name}: $${asset.balance}`;
        assetsList.appendChild(listItem);
    });
}

// Function to populate investments data into the HTML
function populateInvestments() {
    const investmentsList = document.querySelector('.investments ul');
    investmentsData.forEach(investment => {
        const listItem = document.createElement('li');
        listItem.textContent = `${investment.name}: $${investment.value}`;
        investmentsList.appendChild(listItem);
    });
}

// Call the populateAssets and populateInvestments functions when the page loads
window.onload = function() {
    populateAssets();
    populateInvestments();
};
