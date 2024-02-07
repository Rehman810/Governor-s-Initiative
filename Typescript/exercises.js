"use strict";
// Exercises
/*Ex-1 Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
let personName = "Abdul Rehman";
console.log(`Hello ${personName}, would you like to learn some python today?`);
/*Ex-2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let upperCase = personName.toUpperCase();
console.log("Uppercase: ", upperCase);
let lowerCase = personName.toLocaleLowerCase();
console.log("Lowercase: ", lowerCase);
let titleCase = personName.replace(/\b\w/g, a => a.toUpperCase());
console.log("Title Case: ", titleCase);
/*Ex-3 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:*/
console.log("Albert Einstein once said, 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world'.");
/*Ex-4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person = "Albert Einstein";
let message = "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world";
console.log(`${famous_person} once said, '${message}'.`);
/*Ex-5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination,
 "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let nameWithWhiteSpace = "\n\tAli\t\n";
console.log(`Name with White Space: ${nameWithWhiteSpace}`);
let nameWithoutWhiteSpace = "\n\tAli\t\n";
console.log(`Name without White Space: ${nameWithWhiteSpace.trim()}`);
