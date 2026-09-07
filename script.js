const cashCapital = document.getElementById("cash-capital");
const cashLeft = document.getElementById("cash-left");
const salesCash = document.getElementById("sales-cash");
const salesPos = document.getElementById("sales-pos");
const currentPosAmount = document.getElementById("current-pos-amount");
const posCapital = document.getElementById("pos-capital");
const calculateBtn = document.getElementById("calculate-btn");
const calculationReport = document.getElementById("calculation-report");
const profitOrLoss = document.getElementById("profit-or-loss");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expense = document.getElementById("expense");
const expensesList = document.getElementById("expenses-list");
const expenseAmount = document.getElementById("expense-amount");

calculateBtn.addEventListener("click", calculate);
addExpenseBtn.addEventListener("click", addExpense);

function calculate() {
  const CashcapitalValue = Number(cashCapital.value);
  const cashLeftValue = Number(cashLeft.value);
  const salesCashValue = Number(salesCash.value);
  const salesPosValue = Number(salesPos.value);
  const currentPosAmountValue = Number(currentPosAmount.value);
  const posCapitalValue = Number(posCapital.value);
  const posCalculationResult =
    currentPosAmountValue - posCapitalValue - Number(salesPosValue);
  const totalCapital = CashcapitalValue + posCapitalValue;
  const totalCashLeft = cashLeftValue + salesCashValue;
  const cafeTotal = cashLeftValue + posCalculationResult;
  const cafeDifference = cafeTotal - CashcapitalValue;
  const salesTotal = salesCashValue + salesPosValue;

  if (posCalculationResult > CashcapitalValue) {
    profitOrLoss.innerHTML = `You made a profit of + ${cafeDifference}`;
  } else {
    profitOrLoss.innerHTML = `You made a loss of + ${cafeDifference}`;
  }
  profitOrLoss.style.color = cafeTotal > CashcapitalValue ? "green" : "red";

  calculationReport.innerHTML += `
    <h2>Here's the breakdown:</h2>
    <p><Strong>Cash Capital</Strong>: ${CashcapitalValue}</p>
    <p><Strong>POS Capital</Strong>: ${posCapitalValue}</p>
    <p><Strong>Total Capital</Strong>: ${totalCapital}</p>
    <h2>Cyber Cafe / POS</h2>
    <p><Strong>Cash Amount</Strong>: ${cashLeftValue}</p>
    <p><Strong>POS Amount</Strong>: ${posCalculationResult}</p>
    <p><Strong>Total</Strong>: ${cafeTotal}</p>
    <h2>SALES</h2>
    <p><Strong>Cash Amount</Strong>: ${salesCashValue}</p>
    <p><Strong>POS Amount</Strong>: ${salesPosValue}</P>
    <p><Strong>Total</Strong>: ${salesTotal}</p>
    <h2>Amount in the POS for today</h2>
    <p>Current Amount - Amount Left(POS Capital) - Sales POS Amount = </p>
    <p>${currentPosAmountValue} - ${posCapitalValue} -  ${salesPosValue} = <strong>${posCalculationResult}</strong></p>
    <h3>Total Cash Left (New Capital) = ${totalCashLeft}
    
    `;
}

const expenseList = [];

function addExpense() {
  const expenseInput = expense.value;
  const expenseAmountValue = expenseAmount.value;

  const newExpense = {
    expense: expenseInput,
    amount: expenseAmountValue,
  };
  expenseList.push(newExpense);

  let totalSum = 0;
  for (const expense of expenseList) {
    totalSum += Number(expense.amount);
  }

  expensesList.innerHTML =
    `<h2>Expenses</h2>` +
    expenseList
      .map(
        (e, index) =>
          `
        <p>${index + 1}. ${e.expense} - ${e.amount}</p>
        `,
      )
      .join("") +
    `<p>Total: ${totalSum}</p>`;
}
