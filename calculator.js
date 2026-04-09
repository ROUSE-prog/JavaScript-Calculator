// =====================================
// JavaScript Calculator with History
// =====================================

// Array to store calculation history
let history = [];

// -------------------------------------
// Function: addToHistory
// Stores each calculation as an object
// -------------------------------------
function addToHistory(num1, num2, operator, result) {
  const calculation = {
    num1: num1,
    num2: num2,
    operator: operator,
    result: result,
  };

  history.push(calculation);
}

// -------------------------------------
// Arithmetic Functions
// -------------------------------------

function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, num2, "+", result);
  return result;
}

function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, num2, "-", result);
  return result;
}

function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, num2, "*", result);
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero.");
    return null;
  }

  const result = num1 / num2;
  addToHistory(num1, num2, "/", result);
  return result;
}

// -------------------------------------
// Function: displayHistory
// Displays all past calculations
// -------------------------------------
function displayHistory() {
  if (history.length === 0) {
    console.log("No calculations stored.");
    return;
  }

  console.log("\n=== Calculation History ===");

  history.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.num1} ${item.operator} ${item.num2} = ${item.result}`
    );
  });
}

// -------------------------------------
// Optional Bonus Function
// -------------------------------------
function clearHistory() {
  history = [];
  console.log("History cleared.");
}

// =====================================
// TESTING SECTION (IMPORTANT)
// =====================================

console.log("=== Running Calculator Tests ===\n");

// Basic operations
console.log("Add:", add(10, 5));         // 15
console.log("Subtract:", subtract(8, 3)); // 5
console.log("Multiply:", multiply(4, 6)); // 24
console.log("Divide:", divide(20, 4));    // 5

// Edge case
console.log("Divide by zero:", divide(10, 0)); // null + error message

// Additional tests
console.log("Add (negative):", add(-4, 2));    // -2
console.log("Multiply (decimal):", multiply(2.5, 4)); // 10

// Display history
displayHistory();

// Optional: clear history (uncomment to test)
// clearHistory();
// displayHistory();

//I really wanted this to be great!!