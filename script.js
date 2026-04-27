let balance = 1000;

function addMoney() {
  balance = balance + 100; document.getElementById("balance").innerText = balance + " €";}
function addCustomMoney() {
  let amount = Number(document.getElementById("amount").value);

  balance = balance + amount;
document.getElementById("balance").innerText = balance + " €";}
function withdrawMoney() {
  let amount = Number(document.getElementById("amount").value);
balance = balance - amount;
document.getElementById("balance").innerText = balance + " €";}
function withdrawMoney() {
  let amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    alert("Bitte einen gültigen Betrag eingeben!");
    return;
  }  balance = balance - amount;
document.getElementById("balance").innerText = balance + " €";}
