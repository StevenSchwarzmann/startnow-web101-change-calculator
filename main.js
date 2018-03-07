// Write your JavaScript here


function clickEventHandler() {

var amountDue = parseFloat(document.getElementById('amount-due').value);
var amountReceived = parseFloat(document.getElementById('amount-received').value);

let change = (amountReceived * 100) - (amountDue * 100);

var coinValue = {
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
};

var dollars = Math.floor(change / coinValue.oneDollar);
change = change % coinValue.oneDollar;

var quarters =  Math.floor(change / coinValue.quarter);
change = change % coinValue.quarter;

var dimes = Math.floor(change / coinValue.dime);
change = change % coinValue.dime;

var nickels = Math.floor(change / coinValue.nickel);
change = change % coinValue.nickel;

var pennies = Math.round(change / coinValue.penny);
change = change % coinValue.penny;


document.getElementById("dollars-output").innerHTML =  dollars;
document.getElementById("quarters-output").innerHTML = quarters;
document.getElementById("dimes-output").innerHTML =  dimes;
document.getElementById("nickels-output").innerHTML = nickels;
document.getElementById("pennies-output").innerHTML = pennies;
}
