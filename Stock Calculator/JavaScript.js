function myFunction(){
    let x = document.getElementById("buyPrice").value;
    let buyPrice = Number(x);
    document.getElementById("buyPriceO").innerHTML = buyPrice;
    
    let y = document.getElementById("sellPrice").value;
    let sellPrice = Number(y);
    document.getElementById("sellPriceO").innerHTML = sellPrice;

    let z = document.getElementById("amount").value;
    let amount = Number(z);
    document.getElementById("amountO").innerHTML = amount;

    let asset = amount / buyPrice;
    let priceOfAsset = asset * sellPrice;
    let profit = priceOfAsset - amount;

    document.getElementById("asset").innerHTML = asset;
    document.getElementById("priceOfAsset").innerHTML = priceOfAsset;
    document.getElementById("profit").innerHTML = profit;
}