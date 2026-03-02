// OPERATORS HOMEWORK – SIMPLE BUDGET
// -------------------------------------------------
// GOAL: Use operators to calculate how much money is left after expenses
//       and print a summary in the console.

// STEP 1: Create a variable called monthlyIncome (number)
//         with how much money you receive in a month.
let monthlyIncome = 2000;
// STEP 2: Create a variable called rentCost (number)
//         with how much you pay for rent.
let rentCost = 400;
// STEP 3: Create a variable called foodCost (number)
//         with how much you spend on food.
let foodCost = 400;
// STEP 4: Create a variable called transportCost (number)
//         with how much you spend on transportation.
let transportCost = 500;
// STEP 5: Create a variable called funBudget (number)
//         with how much money you like to save for fun activities.
let funBudget = 100;
// STEP 6: Create a variable called totalExpenses.
//         Use the + operator to add rentCost, foodCost, transportCost, and funBudget
//         together and store the result in totalExpenses.
let totalExpenses = rentCost + foodCost + transportCost + funBudget;
// STEP 7: Create a variable called moneyLeft.
//         Use the - operator to subtract totalExpenses from monthlyIncome.
let moneyLeft = monthlyIncome - totalExpenses;
// STEP 8: Use console.log to print a clear summary, for example:
//         --- SIMPLE BUDGET ---
//         Monthly income: ...
//         Total expenses: ...
//         Money left: ...
console.log(`--- SIMPLE BUDGET ---
Monthly income: ${monthlyIncome}
Total expenses: ${totalExpenses}
Money left: ${moneyLeft}`)
// STEP 9: Now imagine you decide to increase your funBudget a little.
//         Use the += operator to add some extra amount to funBudget,
//         for example funBudget += 500;
funBudget += 500;
// STEP 10: Recalculate totalExpenses and moneyLeft with the new funBudget value.
totalExpenses = rentCost + foodCost + transportCost + funBudget;
moneyLeft = monthlyIncome - totalExpenses;
// STEP 11: Use console.log again to print an UPDATED summary
//          that shows how much money is left after increasing your funBudget.
console.log(`--- SIMPLE BUDGET ---
Monthly income: ${monthlyIncome}
Total expenses: ${totalExpenses}
Money left: ${moneyLeft}`)