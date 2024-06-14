let bangla = 90;
let english = 70;
let math = 49;

if (bangla >= 80) {
  console.log("bangla=", "A+");
} else if (bangla >= 70) {
  console.log("bangla=", "A");
} else if (bangla >= 65) {
  console.log("bangla=", "A-");
} else if (bangla >= 60) {
  console.log("bangla=", "B");
} else if (bangla >= 50) {
  console.log("bangla=", "c");
} else if (bangla >= 40) {
  console.log("bangla=", "d");
} else {
  console.log("bangla=", "failed");
}

let total_marks = bangla + english + math;
let avarage = total_marks / 3;

console.log("total marks=", total_marks);
console.log("total marks=", avarage);

if (avarage >= 80) {
  console.log("you got", "A+");
} else if (avarage >= 70) {
  console.log("you got", "A");
} else if (avarage >= 65) {
  console.log("you got", "A-");
} else if (avarage >= 60) {
  console.log("you got", "B");
} else if (avarage >= 50) {
  console.log("you got", "c");
} else if (avarage >= 40) {
  console.log("you got", "d");
} else {
  console.log("you got", "failed");
}
