function deposit(accountType) {
  var amount = parseFloat(document.getElementById(accountType + "Amount").value);
  var balanceElement = document.getElementById(accountType + "Balance");
  var currentBalance = parseFloat(balanceElement.textContent);
  var newBalance = currentBalance + amount;
  balanceElement.textContent = newBalance.toFixed(2);
}

function withdraw(accountType) {
  var amount = parseFloat(document.getElementById(accountType + "Amount").value);
  var balanceElement = document.getElementById(accountType + "Balance");
  var currentBalance = parseFloat(balanceElement.textContent);
  if (amount > currentBalance) {
      alert("Insufficient funds.");
  } else {
      var newBalance = currentBalance - amount;
      balanceElement.textContent = newBalance.toFixed(2);
  }
}
