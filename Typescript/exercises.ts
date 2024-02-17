// Exercises

/*Ex-1 Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
let personName: string = "Abdul Rehman";
console.log(`Hello ${personName}, would you like to learn some python today?`);

/*Ex-2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let upperCase: string = personName.toUpperCase();
console.log("Uppercase: ", upperCase);

let lowerCase: string = personName.toLocaleLowerCase();
console.log("Lowercase: ", lowerCase);

let titleCase: string = personName.replace(/\b\w/g, a => a.toUpperCase());
console.log("Title Case: ", titleCase);

/*Ex-3 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:*/
console.log("Albert Einstein once said, 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world'.");

/*Ex-4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person: string = "Albert Einstein";
let message: string = "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world";
console.log(`${famous_person} once said, '${message}'.`)

/*Ex-5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination,
 "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let nameWithWhiteSpace: string = "\n\tAli\t\n";
console.log(`Name with White Space: ${nameWithWhiteSpace}`);

let nameWithoutWhiteSpace: string = "\n\tAli\t\n";
console.log(`Name without White Space: ${nameWithWhiteSpace.trim()}`);

/*Ex-6 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results. */
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

/*Ex-7 Favorite Number: Store your favorite number in a variable. Then, using that variable,
create a message that reveals your favorite number. Print that message. */
let favoriteNum = 5;
console.log(`This is my favorite number ${favoriteNum}.`)

/*Ex-8 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. */

//This is Abdul Rehman Waseem, today is 16 of Feb, 2024.
//This code simply reveals my favorite number which is saved in a variable.
let favoriteNum1 = 5;
console.log(`This is my favorite number ${favoriteNum1}.`)

/*Ex-9 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. */
let names: string[] = ["ali", "huzaifa", "rafay"];
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

/*Ex-10 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name. */
for(let i = 0; i < names.length; i++){
    console.log(`Hello ${names[i]}, Welcome to our TypeScript journey.`)
}

/*Ex-11 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let models: string[] = ["honda", "superPower", "unique", "dhoom"];
for(let i = 0; i < models.length; i++){
    console.log(`I would like to own a ${models[i]} motorcycle.`)
}

/*Ex-12 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
let guests: string[] = ["abdullah", "ali", "hamza"];
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, You are inviting to dinner at our home. Please come, we will be waiting for you.`)
}

/*Ex-13 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite. */
guests[1] = "iqbal";
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, You are inviting to dinner at our home. Please come, we will be waiting for you.`)
}

/*Ex-14 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

console.log("Great news! We found a bigger dinner table!");
guests.unshift("asif");
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "hina");
guests.push("waseem");
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, You are inviting to dinner at our home. Please come, we will be waiting for you.`)
}

/*Ex-15 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
while(guests.length > 2){
    let removeGuests = guests.pop()
    console.log(`Sorry, ${removeGuests}, we can't invite you to dinner.`)
}
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, You are still inviting to dinner at our home. Please come, we will be waiting for you.`)
}
guests.pop();
guests.pop();
console.log("Empty list:", guests);

/*Ex-16 Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.*/

let places: string[] = ["maldives", "dubai", "thailand", "canada"];
for(let i = 0; i < places.length; i++){
    console.log(places[i])
}
console.log("Sorted Array");
let newPlaces: string[] = [...places];
newPlaces.sort();
newPlaces.map((a)=>{console.log(a)})

console.log("Original array after sorting.");
for(let i = 0; i < places.length; i++){
    console.log(places[i])
}

console.log("Sorted Array in reversed");
newPlaces.reverse();
newPlaces.map((a)=>{console.log(a)})

console.log("Original array after sorting.");
for(let i = 0; i < places.length; i++){
    console.log(places[i])
}

/*Ex-17 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. */
console.log("Number of people invited to dinner: " + guests.length);

/*Ex-18 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
or anything else you’d like. Write a program that creates a list containing these items.*/
let languages: string[] = ["english", "urdu", "hindi", "arabic", "french"];
languages.forEach( a => console.log(a) );

/*Ex-19 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */
let students: {name: string, fatherName: string, rollNum: number}[] = [
    {
        name: "rehman",
        fatherName: "waseem",
        rollNum: 85
    },
    {
        name: "ali",
        fatherName: "huzaifa",
        rollNum: 78
    },
    {
        name: "hamza",
        fatherName: "abbas",
        rollNum: 14
    }
]
students.forEach( a => console.log(a) );

/*Ex-20 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */
console.log(languages[8]); //undefined

/*Ex-21 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let language: string = "JavaScript";

console.log("Is language == 'JavaScript'? I predict True.")
console.log(language == 'JavaScript') //true

console.log("Is language == 'python'? I predict False.")
console.log(language == 'python') //false

console.log("Is language != 'C'? I predict True.")
console.log(language != 'C') //true

console.log("Is language === 'javaScript'? I predict False.")
console.log(language === 'javaScript') //false

console.log("Is language !== 'python'? I predict True.")
console.log(language !== 'python') //true

console.log("Is language.length > 10? I predict False.")
console.log(language.length > 10) //false

console.log("Is language.length < 8? I predict True.")
console.log(language.length < 8) //true

console.log("Is language[0] == 'p'? I predict False.")
console.log(language[0] == "p") //false

console.log("Is language[1] == 'a'? I predict True.")
console.log(language[1] == "a") //true

console.log("Is language[0] == 'p'? I predict False.")
console.log(language[2] == "s") //false

/*Ex-22 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array */

let fruit: string = 'apple';
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple'); // true

let city: string = 'Karachi';
console.log("Is city not equal to 'Islamabad'? I predict True.");
console.log(city != 'Islamabad'); // true

let country: string = 'USA';
console.log("Is country in lowercase equal to 'usa'? I predict True.");
console.log(country.toLowerCase() == 'usa'); // true

let number: number = 10;
console.log("Is number equal to 10? I predict True.");
console.log(number == 10); // true

console.log("Is number greater than 5? I predict True.");
console.log(number > 5); // true

console.log("Is number less than or equal to 20? I predict True.");
console.log(number <= 20); // true

let age: number = 25;
console.log("Is age greater than 18 and less than 30? I predict True.");
console.log(age > 18 && age < 30); // true
console.log("Is age greater than 30 or less than 20? I predict False.");
console.log(age > 30 || age < 20); // false

let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana')); // true

console.log("Is 'grape' not in the fruits array? I predict False.");
console.log(fruits.includes('mango')); // false


/*Ex-23 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */

let alien_color: string = "green";
if(alien_color === "green") console.log("Congratulations, you just earned 5 points.")

alien_color = "yellow";
if(alien_color === "green") console.log("Congratulations, you just earned 5 points.")

/*Ex-24 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */

alien_color = "green";
if(alien_color === "green") console.log("Congratulations, you just earned 5 points for shooting the alien.");
else console.log("Congratulations, you just earned 10 points.");

alien_color = "yellow";
if(alien_color === "green") console.log("Congratulations, you just earned 5 points for shooting the alien.");
else console.log("Congratulations, you just earned 10 points.");




