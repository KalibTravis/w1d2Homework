/*
Section 1
Terms
For any answers that require a written response, write the response as commented-out code

// 1. The difference between interpolation and
// concatentation is . . .
Write these answers in first_js_homework.js

Remember:

Run your file by typing node first_js_homework.js
Then, press the up arrow to retrieve the node first_js_homework.js command after you have used it the first time, instead of typing it out every single time
Answer: first_js_homework.js == answers.js

node answers.js

What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
Don't repeat yourself
What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
let and var will enable variables to be changed later and const will not

Section 2
Boolean expressions
... and variable assignment

Code:

Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to true (some may have more than one right answer, just choose one)
Test your answers by using console.log for each expression in your answer file.
*/
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;


a < b
console.log(a < b);
c > d
console.log(c > d);
'Name' == 'Name'
console.log('Name' == 'Name');
a < b < c
console.log(a < b < c);
a == a < d
console.log(a == a < d);
e == 'Kevin'
console.log(e == 'Kevin');
48 == '48'
console.log(48 == '48');
f !== e
console.log(f !== e)
//Set a new variable g to 0
let g = 0;
//console.log g
console.log(g);
//Then set the variable g to be equal to b + c
g = b + c;

//console.log g
console.log(g);
//Answer:
//Did you use const, let or var? Why did you choose the one you chose?
//Used let so it can be an altered variable later in code
/*What happens if you don't use const , let or var? Do you get an error? If so what does it say?
what happens if you write 10 = g?
It wont be initialized as a variable 
Bonus Challenge (optional):

Replace the underscores to make a Boolean expression that evaluates to true. Use > , < and === only.
*/
a > (b || f) === !f && e < c


/*
Section 3
While loops
Increase your code literacy by reading code, line by line.

Infinite loop?
Read the following code very carefully.

DO NOT RUN the code because it might run an infinite loop

Infinite loops can sometimes be hard to stop and may require you to reboot your computer. Being able to determine whether you've created an infinite loop before running your code is a handy skill to have

Answer:

Is the code below an infinite loop? Why or why not?
Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.
You should NOT test (run) this code, so read it line by line and 'execute' the code in your head.

while (true) {
	console.log('Do not run this loop');
}
Infinite loop II
is this loop an infinite loop? Why or why not?
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
Answer:

Infinite or not infinite? What is the expected output?

Reading code
Ok rest easy, no more infinite loops for now!

The following while loop uses a compound assignment (Links to an external site.) operator, i.e. +=

Without running this loop, what is the expected output?

Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal by adding comments before each line of code, explaining what that line of code will do. Be patient with your thought! There is no rush.

Example:

let q = 20;

// start a while loop that will run as long as q is greater than 10
while (q > 10){
  // prints the value of q to the screen/Terminal window
  console.log(q)
  // decrements the value of q by 1
  q--
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}
Code:

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
Copy the above code into your .js file
Add a comment for each line, like the above example
Write a comment with your expected result
Run the code
Write another sentence confirming whether the code was what you expected.

20 As
*/
/*
Section 4
For loops
Answer:

A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
In 'for' loop iteration statement is written at top, hence, executes only after all statements in loop are executed. 
In 'while' loop, the iteration statement can be written anywhere in the loop.
For loop control panel
Here is an example for loop that prints a message 100 times:

for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
Answer:

What are the three components of the control panel? Each component is separated by a semicolon ;.

Remember: Write your answers as comments in the file.

The first part of the control panel is: intializing a variable to iterate through loop
The second part of the control panel is: loop bounds/limit
The third part of the control panel is: loop incrementation/decrementation
For loop II
Write a for loop that will console.log the numbers 0 to 999.
*/
for (let i = 0; i < 1000; i++) {
    console.log(i);

};
/*Bonus Challenge (optional):

What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)?
URLs use forward slashes ( / ) (on all platforms). Backslashes ( \ ) are used for local file paths on Windows
What is \ doing in the string?
Think of the forward slash as quotation marks for regular expressions. 
The slashes contain the expression but are not themselves part of the expression.
 (If you want to test for a forward slash, you have to escape it with a backwards slash.)
  console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
  console.log("Without you, today's emotions are the scurf of yesterday's");
For loop in reverse
Code:

Using a postfix operator (Links to an external site.) i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
*/
for (let i = 999; i >= 0; i--) {
    console.log(i);

};


/*
More counting
Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.

The loop should run from 1 to 10.

Expected Result:

The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
Bonus Challenge (optional):

Rewrite the above loop using String Interpolation/Template Literals (Links to an external site.) instead of concatenation

Note: string interpolation uses backticks, this is a different character than a single quote. The backtick can usually be found above the left tab key/below the esc key and it shares it with the tilda ~

Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
Iterate over the StarWars array and print each element to the console.

Iterate over the StarWars array again and print each character's name as well as the value of i.

Bonus Challenge (optional):

Figure out how to iterate over every second element of the StarWars array, starting with the first element.
=> Han, R2D2, Leia
*/
// // api how to interact with a program
// // rest api how you interact with the server or take actions generally
// // having multiple .then.then.catch.etc... is called chaining methods. Don't break the chain even if they are on different lines. Only put ; at the very end of all methods
// fetch("https://swapi.dev/api/people") // this is using the /people endpoint. What do you think we'll get back?
//   .then((res) => res.json()) // res is going to be a sort of blob of information which is hard to use. so we turn it to JSON with res.json()
//   .then((peopleData) => {
//     console.log(peopleData); // if data is a big JSON object/object then we could use a property to get to the info we want
//     console.log(peopleData.results); // the array of people is inside of the results property
//     // how could I loop over the results in the data?
//     // how could I get to the array with the names of the people?
//     // could use a for loop
//     // array.name is this possible?
//     // how do we access info in an array
//     // array[index] the index is a numerical value
//     peopleData.results.map((person) => {
//       // here we're going to render the info
//       console.log(person.name); // what would we see?
//       // how did I render information onto a screen?
//       // how could I render it to my HTML?
//       // we're going to have to write into innerHTML
//       const list = document.getElementById("people"); // this is going to be the UL inside of the HTML
//       const listItem = document.createElement("li");
//       listItem.innerHTML = `
//         <h4>${person.name}</h4>
//         <h5>${person.birth_year}</h5>
//       `;
//       list.appendChild(listItem);
//     }); // I'm using .map because since it makes a new array it will preserve the integrity of the original array
//   }) // data is actually the JSON information. Very easy to use. Is literally like a javascript object (with some special rules)
//   .catch((e) => console.error(e.message)); // just in case it throws an error it'll tell you what the error is
fetch("https://swapi.dev/api/planets/")
  .then((res) => res.json())
  .then((planetData) => {
    console.log(planetData);
    console.log(planetData.results);
    planetData.results.map((planets) => {
      //creating a function
      console.log(planets, "note"); //this was done to check console
      console.log(planets.name);
      const list = document.getElementById("planets");
      const listItem = document.createElement("li");
      //html populates to the bullet points
      listItem.innerHTML = `
    <h4>${planets.name}</h4>
    <h5>${planets.population}</h5>`;
      listItem.style.color = "blue";
      list.appendChild(listItem);
    });
  })
  .catch((e) => console.error(e.message)); //catch errors
fetch("https://swapi.dev/api/films/")
  .then((res) => res.json())
  .then((filmData) => {
    console.log(filmData);
    console.log(filmData.results);
    filmData.results.map((title) => {
      console.log(title.name);
      const filmList = document.getElementById("films");
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div><h1>${title.episode_id}</h1></div>`;
      filmList.appendChild(listItem);
    });
  });
fetch("https://swapi.dev/api/starships/")
  .then((res) => res.json())
  .then((starshipsData) => {
    console.log(starshipsData);
    console.log(starshipsData.results);
    starshipsData.results.map((title) => {
      console.log(title.name);
      const starshipsList = document.getElementById("starships");
      const listItem = document.createElement("li");
      listItem.innerHTML = `
    <li><h2>${title.model}</h2></li>`;
      starshipsList.appendChild(listItem);
    });
  });
fetch("https://swapi.dev/api/planets/")
  .then((res) => res.json())
  .then((planetData) => {
    console.log(planetData);
    console.log(planetData.results);
    planetData.results.map((planets) => {
      //creating a function
      console.log(planets, "note"); //this was done to check console
      console.log(planets.name);
      const list = document.getElementById("planets");
      const listItem = document.createElement("li");
      //html populates to the bullet points
      listItem.innerHTML = `
    <h4>${planets.name}</h4>
    <h5>${planets.population}</h5>`;
      //document.body.style.backgroundColor = "blue";
      list.appendChild(listItem);
    });
  })
  .catch((e) => console.error(e.message));