// Prompting user to enter two numbers and displaying their sum
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let sum = num1 + num2;
alert("The sum is: " + sum);


// Prompting user to enter two numbers and displaying multiple arithmetic results
let numA = parseFloat(prompt("Enter first number:"));
let numB = parseFloat(prompt("Enter second number:"));
alert("Sum: " + (numA + numB) +
      "\nDifference: " + (numA - numB) +
      "\nProduct: " + (numA * numB) +
      "\nQuotient: " + (numA / numB));


// Calculating average age of 10 students
let age1 = parseInt(prompt("Enter the age of student 1:"));
let age2 = parseInt(prompt("Enter the age of student 2:"));
let age3 = parseInt(prompt("Enter the age of student 3:"));
let age4 = parseInt(prompt("Enter the age of student 4:"));
let age5 = parseInt(prompt("Enter the age of student 5:"));
let age6 = parseInt(prompt("Enter the age of student 6:"));
let age7 = parseInt(prompt("Enter the age of student 7:"));
let age8 = parseInt(prompt("Enter the age of student 8:"));
let age9 = parseInt(prompt("Enter the age of student 9:"));
let age10 = parseInt(prompt("Enter the age of student 10:"));
let totalAge = age1 + age2 + age3 + age4 + age5 + age6 + age7 + age8 + age9 + age10;
let averageAge = totalAge / 10;
alert("The average age is: " + averageAge);


// Reversing and displaying a 4-digit number with commas
let number = prompt("Enter a four-digit number:");
alert(number.split("").reverse().join(", "));


// Calculating circle properties from radius
let radius = parseFloat(prompt("Enter the radius of the circle:"));
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
alert("Diameter: " + diameter + 
      "\nCircumference: " + circumference + 
      "\nArea: " + area);


// Simulating a shop billing process
alert("Welcome to our shop!");
let item = prompt("Enter the name of the item:");
let price = parseFloat(prompt("Enter the price of the item (in PKR):"));
let quantity = parseInt(prompt("Enter the quantity:"));
let subtotal = price * quantity;
alert(`You bought ${quantity} ${item}s.\nSubtotal: PKR ${subtotal.toFixed(2)}`);


// Pizza billing system based on size and toppings
let size = prompt("What size pizza do you want? (S/M/L)");
let addPepperoni = prompt("Do you want pepperoni? (Y/N)");
let extraCheese = prompt("Do you want extra cheese? (Y/N)");
let bill = 0;
if (size === "S") {
    bill = 15;
    if (addPepperoni === "Y") bill += 2;
} else if (size === "M") {
    bill = 20;
    if (addPepperoni === "Y") bill += 3;
} else if (size === "L") {
    bill = 25;
    if (addPepperoni === "Y") bill += 3;
}
if (extraCheese === "Y") {
    bill += 1;
}
alert("Thank you for choosing Python Pizza Deliveries!\nYour final bill is: $" + bill);



// Car driving eligibility based on age
let age = prompt("Enter your age:");
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}


// Weeks left to live if lifespan is 90 years
const currentAge = prompt("Enter your current age:");
const weeksLeft = (90 - currentAge) * 52;
console.log(`You have ${weeksLeft} weeks left.`);


// Calculating BMI and showing category
const height = parseFloat(prompt("Enter your height in inches:"));
const weight = parseFloat(prompt("Enter your weight in lbs:"));
const bmi = (weight * 703) / (height * height);
let category = "";
if (bmi < 16.0) category = "Severely Underweight";
else if (bmi < 18.5) category = "Underweight";
else if (bmi < 25) category = "Normal";
else if (bmi < 30) category = "Overweight";
else if (bmi < 35) category = "Moderately Obese";
else if (bmi < 40) category = "Severely Obese";
else category = "Morbidly Obese";
console.log(`Your BMI of ${bmi} makes you ${category}`);


// Tweet character limit checker
const tweet = prompt("Enter your tweet:");
const length = tweet.length;
if (length <= 140) {
    console.log(`That ${length} char tweet will work!`);
} else {
    const extra = length - 140;
    console.log(`Your ${length} char tweet is ${extra} chars too long`);
}


// BMI calculator function
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}
const weightVal = 65; 
const heightVal = 1.7; 
console.log("BMI is:", calculateBMI(weightVal, heightVal).toFixed(2));


// Display months based on quarter input
function printQuarterMonths(quarter) {
    switch (quarter) {
        case 1:
            console.log("January, February, March");
            break;
        case 2:
            console.log("April, May, June");
            break;
        case 3:
            console.log("July, August, September");
            break;
        case 4:
            console.log("October, November, December");
            break;
        default:
            console.log("Invalid input. Enter a number between 1 and 4.");
    }
}
printQuarterMonths(2); 


// Reversing an array of strings
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
const sentence = ['sense.', 'make', 'all', 'will', 'This'];
const reversedSentence = reverseArray(sentence);
console.log(reversedSentence); 


// Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}


// Compare shirt color to favorite color
function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
        return 'The shirt is your favorite color!';
    } else {
        return 'That is a nice color.';
    }
}


// Calculate final letter grade from three grades
function finalGrade(grade1, grade2, grade3) {
    if (
        grade1 < 0 || grade1 > 100 ||
        grade2 < 0 || grade2 > 100 ||
        grade3 < 0 || grade3 > 100
    ) {
        return 'You have entered an invalid grade.';
    }
    let average = (grade1 + grade2 + grade3) / 3;
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


// Determine life phase based on age
function lifePhase(age) {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 140) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
}
