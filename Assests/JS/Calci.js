//Calculate Count
function calculateCount() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleAmt").value;
    var BillAmount = parseInt(billAmt)

    //validate input
    
    if (billAmt === "" || serviceQual == 0 || numOfPeople == "") {
         alert("Please enter values");
        // throw "empty";
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate each person tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
     total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    //Calculate each person Bill
    var NewBill = (BillAmount * (serviceQual / numOfPeople)) + BillAmount / numOfPeople;
    NewBill = NewBill.toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalBill").style.display = "block";
    document.getElementById("Bill").innerHTML = NewBill;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("totalBill").style.display = "none";
document.getElementById("each").style.display = "none";
//click to call function
document.getElementById("calculate").onclick = function () {
    calculateCount();
};