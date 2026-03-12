// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.

let contacts = [
    {
        name: "Joseph",
        phone: 7877772345,
        isFavorite: true,
    },
    {
        name: "Joyce",
        phone: 9392223333,
        isFavorite: false,
    },
];

console.log(contacts[0].name);
console.log(contacts.length);

contacts[1].isFavorite = true;

contacts.push({name:"Bryan", phone: 7877999977, isFavorite: true});

console.log(contacts);