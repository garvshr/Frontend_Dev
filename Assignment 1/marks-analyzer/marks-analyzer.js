let marks = [95, 82, 76, 88, 90];
let total = 0;
let failCount = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] < 40) failCount++;
}

let avg = total / marks.length;
let grade = "";

if (avg >= 90) grade = "A+";
else if (avg >= 75) grade = "A";
else if (avg >= 60) grade = "B";
else if (avg >= 40) grade = "C";
else grade = "Fail";

if (failCount >= 2) console.log("Repeat Year");
else {
  console.log("Average: " + avg.toFixed(2));
  console.log("Grade: " + grade);
}
