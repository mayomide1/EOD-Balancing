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

  calculationReport.innerHTML = `
        <h2>📊 Financial Breakdown</h2>
        <h2>💰 Capital</h2>
        <p><strong>Cash Capital</strong> <span>₦${CashcapitalValue.toLocaleString()}</span></p>
        <p><strong>POS Capital</strong> <span>₦${posCapitalValue.toLocaleString()}</span></p>
        <p class="total-row"><strong>Total Capital</strong> <strong>₦${totalCapital.toLocaleString()}</strong></p>
        
        <h2>💻 Cyber Cafe / POS</h2>
        <p><strong>Cash Amount</strong> <span>₦${cashLeftValue.toLocaleString()}</span></p>
        <p><strong>POS Amount</strong> <span>₦${posCalculationResult.toLocaleString()}</span></p>
        <p class="total-row"><strong>Total</strong> <strong>₦${cafeTotal.toLocaleString()}</strong></p>
        
        <h2>📈 Sales</h2>
        <p><strong>Cash Amount</strong> <span>₦${salesCashValue.toLocaleString()}</span></p>
        <p><strong>POS Amount</strong> <span>₦${salesPosValue.toLocaleString()}</span></p>
        <p class="total-row"><strong>Total</strong> <strong>₦${salesTotal.toLocaleString()}</strong></p>
        
        <h2>💳 POS Calculation</h2>
        <p class="formula-row">
            <strong>${currentPosAmountValue.toLocaleString()}</strong> 
            - <strong>${posCapitalValue.toLocaleString()}</strong> 
            - <strong>${salesPosValue.toLocaleString()}</strong> 
            = <strong>₦${posCalculationResult.toLocaleString()}</strong>
        </p>
        
        <h2>🏦 Total Cash Left (New Capital)</h2>
        <p class="total-row"><strong>Total</strong> <strong>₦${totalCashLeft.toLocaleString()}</strong></p>
        
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

  const expenseItems = expenseList
    .map(
      (e, index) => `
        <li>
            <span class="expense-name">${index + 1}. ${e.expense}</span>
            <span class="expense-amount">₦${e.amount.toLocaleString()}</span>
        </li>
    `,
    )
    .join("");

  let totalSum = 0;
  for (const expense of expenseList) {
    totalSum += Number(expense.amount);
  }

  expensesList.innerHTML = `
        <h2>📝 Expenses List</h2>
        <ul>${expenseItems}</ul>
        <div class="expenses-total">
            <span>Total Expenses</span>
            <span>₦${totalSum.toLocaleString()}</span>
        </div>
  `;
}
