function myFunction(){
    let x = document.getElementById("inPut").value;
    
    let amountOfCashout = Number(x);
    document.getElementById("demo").innerHTML = "Amount Of Cash Out = "+ amountOfCashout;

    let totalBKashCashOutFee = 1.85 * amountOfCashout /100;
    let totalBKashPrioAgentCashOutFee = 1.5 * amountOfCashout /100;
    let totalNagadCashOutFee = 1.149 * amountOfCashout /100;
    let totalBKashToBankFee = 1 * amountOfCashout /100;
    let totalNagadToBankFee = 1.5 * amountOfCashout /100;

    let totalCostOfBKashCashOut=totalBKashCashOutFee + amountOfCashout ;
    let totalCostOfBKashPrioAgentCashOut=totalBKashPrioAgentCashOutFee+amountOfCashout;
    let totalCostOfNagadCashOut=totalNagadCashOutFee+amountOfCashout;
    let totalCostOfBkashToBank=totalBKashToBankFee+amountOfCashout;
    let totalCostOfNagadToBank=totalNagadToBankFee+amountOfCashout;

    document.getElementById("BAF").innerHTML = totalBKashCashOutFee;
    document.getElementById("BAC").innerHTML = totalCostOfBKashCashOut;
    document.getElementById("BPAF").innerHTML = totalBKashPrioAgentCashOutFee;
    document.getElementById("BPAC").innerHTML = totalCostOfBKashPrioAgentCashOut;
    document.getElementById("NAF").innerHTML = totalNagadCashOutFee;
    document.getElementById("NAC").innerHTML = totalCostOfNagadCashOut;
    document.getElementById("BBF").innerHTML = totalBKashToBankFee;
    document.getElementById("BBC").innerHTML = totalCostOfBkashToBank;
    document.getElementById("NBF").innerHTML = totalNagadToBankFee;
    document.getElementById("NBC").innerHTML = totalCostOfNagadToBank;
}


