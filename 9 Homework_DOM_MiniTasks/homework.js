// DOM HOMEWORK – FAVORITE MOVIES
// ----------------------------------------------
// GOAL: Practice selectors, textContent, and creating/removing elements.

// STEP 1: Select the heading element with id "moviesTitle" and store
//         it in a variable.
const moviesTitleEl = document.getElementById("moviesTitle");
// STEP 2: Select the paragraph with id "moviesInfo" and store it
//         in a variable.
const moviesInfoEl = document.getElementById("moviesInfo");
// STEP 3: Select the list with id "moviesList" and store it in a variable.
const moviesListEl = document.getElementById("moviesList");
// STEP 4: Change the textContent of moviesTitle to a new heading,
//         for example "Movie List".
moviesTitleEl.textContent("Movie List");
// STEP 5: Use moviesList.children.length (or querySelectorAll)
//         to count how many movie items there are.
//         Store this number in a variable (for example, movieCount).
let movieCount = moviesListEl.children.length
// STEP 6: Update moviesInfo.textContent to show a message like:
//         "You currently have X favorite movies in your list."
//         (Use the value of movieCount in the message.)
moviesInfoEl.textContent(`You currently have ${movieCount} favorite movies in your list.`)
// STEP 7: Create a new li element for another movie using
//         document.createElement("li").
//         - Set its textContent to a new movie name.
//         - Add the class "movie-item" to it.
//         - Append it to moviesList.
const newListItem = document.createElement("li");

newListItem.textContent("Nobody");
newListItem.classList.add("movie-item");
moviesListEl.appendChild(newListItem);
// STEP 8: Select one of the existing movie items (for example,
//         the first one) and remove it using .remove().
const oneItem = moviesListEl.querySelector("li");
oneItem.remove()
// STEP 9: (Optional) After adding/removing, update moviesInfo again
//         to show the new total number of movies.
