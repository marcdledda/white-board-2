console.log("JS TEST");

function Total (){
    let penn = document.getElementById("penny").value;
    let pennDollar = (penn / 100);
    let nick = document.getElementById("nickel").value;
    let nickDollar = (nick / 20);
    let dime = document.getElementById("dime").value;
    let dimeDollar = (dime / 10);
    let quart = document.getElementById("quarter").value;
    let quartDollar = (quart / 4);
    console.log("Pennies:", pennDollar, "Nickels:", nickDollar, "Dimes:", dimeDollar, "Quarters", quartDollar);
    let totalDollar = pennDollar + nickDollar + dimeDollar + quartDollar;
    console.log("Total:", totalDollar);
    let output = document.getElementById("outputDollars").innerHTML = "$" + totalDollar;
}

let btnCalculate = document.getElementById("calculate").addEventListener("click", Total);

