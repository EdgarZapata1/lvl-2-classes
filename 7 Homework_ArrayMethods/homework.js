// ARRAY METHODS HOMEWORK – MINI TASK LIST
// ------------------------------------------------------
// GOAL: Manage a small task list using array methods and log changes
//       to the console.

// STEP 1: Create an array called tasks that starts with 3 task strings.
//         Example:
//         "Study JavaScript", "Drink water", "Go for a walk"

// STEP 2: Use console.log to show the initial tasks array.

// STEP 3: Use .push() to add a new task to the end,
//         then log the tasks array again.

// STEP 4: Use .unshift() to add a "priority" task at the beginning,
//         then log the tasks array again.

// STEP 5: Use .pop() to remove the last task.
//         Save the removed task in a variable called removedTask.
//         Log a message that shows which task was removed.

// STEP 6: Use .forEach() to log each remaining task with a number,
//         for example:
//         "1. Study JavaScript"
//         "2. Drink water"
//         etc.

// STEP 7: Use .filter() to create a new array called longTasks
//         that only keeps tasks with a length greater than, for example, 15 characters.
//         (task.length > 15)

// STEP 8: Log longTasks to see which tasks were kept.

let tasks = ["Study JavaScript", "Drink water", "Go for a walk"];

console.log(tasks);

tasks.push("Cook");
console.log(tasks);

tasks.unshift("Drive to work");
console.log(tasks);

let removedTask = tasks.pop();
console.log("After pop:", removedTask);

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});

let longTasks = tasks.filter(f => f.length > 15);

console.log(longTasks);