// 1no
console.log("problem_1");
let mun1 = 40;
let mun2 = 60;
console.log(Math.max(mun1, mun2));

// 2no
console.log("problem_2");

let weather_value = 35;

if (weather_value < 0) {
  console.log("whether a number is negative");
} else if (weather_value === 0) {
  console.log("whether a number is zero");
} else {
  console.log("whether a number is positive");
}
// 3no
console.log("problem_3");

let divisible_weather = 31;

divisible_weather % 10 == 0
  ? console.log("whether a number is divisible by 10")
  : console.log("whether a number is not divisible by 10");
// 4 no
console.log("problem_4");

let weather_num = 10;

weather_num % 2 == 0
  ? console.log("whether a number is even ")
  : console.log("whether a number is odd ");

// 5no
console.log("problem_5");

// 6no
console.log("problem_6");

let weather = 25;

if (weather >= 30) {
  console.log(`weather is hot `);
} else if (weather >= 25) {
  console.log(`weather is cold `);
} else {
  console.log(`weather is normal `);
}

// 7 no
console.log("problem_7");

let number1 = 40;
let number2 = 20;
let number3 = 30;

if (number1 > number2 && number1 > number3) {
  console.log("The maximum number is", number1);
} else if (number2 > number1 && number2 > number3) {
  console.log("The maximum number is", number2);
} else {
  console.log("The maximum number is", number3);
}

// 8 no
console.log("problem_8");

let num = 10;
let devide_num = num % 2;

devide_num == 0 ? console.log("Even Number") : console.log("Odd Number");

// 9no
console.log("problem_9");

let numOne = 20;
let numTwe = 40;
if (numOne > 30 && numTwe > 30) {
  console.log("Both are greater than 30");
} else {
  console.log("Both are lower than 30");
}

// 10 no
console.log("problem_10");

let age = 50;
age >= 13 && age <= 19
  ? console.log("This person is teenager")
  : console.log("This person is not a teenager");
