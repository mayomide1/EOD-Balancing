const Cashcapital = document.getElementById("cash-capital");
const cashLeft = document.getElementById("cash-left");
const salesCash = document.getElementById("sales-cash");
const salesPos = document.getElementById("sales-pos");
const currentPosAmount = document.getElementById("current-pos-amount");
const posCapital = document.getElementById("pos-capital");
const calculateBtn = document.getElementById("calculate-btn");
const calculationReport = document.getElementById("calculation-report");
const profitOrLoss = document.getElementById("profit-or-loss");

calculateBtn.addEventListener("click", calculate);

function calculate() {
  const CashcapitalValue = Number(Cashcapital.value);
  const cashLeftValue = Number(cashLeft.value);
  const salesCashValue = Number(salesCash.value);
  const salesPosValue = Number(salesPos.value);
  const currentPosAmountValue = Number(currentPosAmount.value);
  const posCapitalValue = Number(posCapital.value);
  const posCalculationResult = currentPosAmountValue - posCapitalValue - Number(salesPosValue);
  const totalCashLeft = (cashLeftValue + salesCashValue)
  const cafeTotal = cashLeftValue + posCalculationResult;
  const cafeDifference = posCalculationResult - CashcapitalValue;
  const salesTotal = salesCashValue + salesPosValue;

  if (posCalculationResult > CashcapitalValue) {
    profitOrLoss.innerHTML = `You made a profit of + ${cafeDifference}`;
  } else {
    profitOrLoss.innerHTML = `You made a loss of + ${cafeDifference}`;
  }
  profitOrLoss.style.color = posCalculationResult > CashcapitalValue ? "green" : "red";

  calculationReport.innerHTML += `
    <p>Here's the breakdown</p>
    <p><Strong>Cash Capital</Strong>: ${CashcapitalValue}</p>
    <p><Strong>POS Capital</Strong>: ${posCapitalValue}</p>
    <p></p>
    <h2>Cyber Cafe / POS</h2>
    <p><Strong>Cash Amount</Strong>: ${cashLeftValue}</p>
    <p><Strong>POS Amount</Strong>: ${posCalculationResult}</p>
    <p><Strong>Total</Strong>: ${cafeTotal}</p>
    <h2>SALES</h2>
    <p><Strong>Cash Amount</Strong>: ${salesCashValue}</p>
    <p><Strong>POS Amount</Strong>: ${salesPosValue}</P>
    <p><Strong>Total</Strong>: ${salesTotal}</p>
    <h2>Calculation Amount in POS</h2>
    <p>Current Amount - Amount Left(POS Capital) - Sales POS Amount = </p>
    <p>${currentPosAmountValue} - ${posCapitalValue} -  ${salesPosValue} = <strong>${posCalculationResult}</strong></p>
    <h3>Total Cash Left (New Capital) = ${totalCashLeft}
    
    `;
}
