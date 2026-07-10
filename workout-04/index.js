/* ==========================================================
   MINI-PROJECT: Student Grade Book
   ==========================================================
   Goal: practice LOOPS and ARRAYS.

   How to use:
   1. Run with Node.js: node gradebook.js
      (or paste it into the browser console - F12)
   2. Complete each function where it says "YOUR CODE HERE"
   3. Run it and check if the result matches what's expected.

   ========================================================== */

const students = [
  { name: "Ana",    grades: [8, 7, 9] },
  { name: "Bruno",  grades: [4, 5, 6] },
  { name: "Carla",  grades: [9, 10, 8] },
  { name: "Diego",  grades: [3, 4, 5] },
  { name: "Elis",   grades: [7, 6, 7] },
];

const PASSING_AVERAGE = 6;


/* ----------------------------------------------------------
   CHALLENGE 1: List student names
   Loop through the "list" array and print each name, format:
   "- Ana"
---------------------------------------------------------- */
function listStudents(list) {
  for (let list of students){
    console.log(`- ${list.name}`)
  }
}

/* ----------------------------------------------------------
   CHALLENGE 2: Sum a student's grades
   Receives a single student object (e.g. { name: "Ana", grades: [8,7,9] })
   and returns the SUM of all their grades.
   Hint: loop through student.grades with a for and add each value.
---------------------------------------------------------- */
function sumGrades(student) {

  return student.grades.reduce((acc, curr) => acc + curr, 0)
  
}

/* ----------------------------------------------------------
   CHALLENGE 3: Calculate a student's average
   Receives a student object and returns the average of their grades.
   Hint: you can reuse sumGrades()! Average = sum / count.
---------------------------------------------------------- */
function calculateAverage(student) {
  let total = student.grades.reduce((acc, curr) => acc + curr, 0)

  let totalGrades = student.grades.length

  let av = total / totalGrades

  return av
}

/* ----------------------------------------------------------
   CHALLENGE 4: List passing students
   Loop through "list" (array of students) and return a NEW array
   with just the NAMES of students whose average >= PASSING_AVERAGE.
   Hint: create an empty array with a different name, like "passing".
   Use calculateAverage() inside the loop.
---------------------------------------------------------- */
function listPassingStudents(list) {
  list = []

  for (i of students){
    let total = i.grades.reduce((acc, curr) => acc + curr, 0)

    let totalGrades = i.grades.length

    let av = total / totalGrades

    if (av >= 6){
      list.push(i.name)
    }
  }

  return list
}

/* ----------------------------------------------------------
   CHALLENGE 5 (harder): Find the student with the highest average
   Loop through "list" and return the NAME of the student with
   the highest average.
   Hint: keep the "highest average so far" and "its owner's name"
   in two variables outside the loop, updating them as you go.
---------------------------------------------------------- */
function bestStudent(list) {
   
  let topStudent = null

  let highestAverage = -1

  for (i of students){
    let total = i.grades.reduce((acc, curr) => acc + curr, 0)

    let totalGrades = i.grades.length

    let av = total / totalGrades

    if (av > highestAverage){
      topStudent = i.name

      highestAverage = av
    }
  }

  return topStudent
}

/* ==========================================================
   TESTS
   ========================================================== */
console.log("=== Challenge 1: List students ===");
listStudents(students);
// Expected: 5 names listed with "- " in front

console.log("\n=== Challenge 2: Sum of Ana's grades ===");
console.log(sumGrades(students[0]));
// Expected: 24

console.log("\n=== Challenge 3: Ana's average ===");
console.log(calculateAverage(students[0]));
// Expected: 8

console.log("\n=== Challenge 4: Passing students (average >= 6) ===");
console.log(listPassingStudents(students));
// Expected: ["Ana", "Carla", "Elis"]

console.log("\n=== Challenge 5: Best student ===");
console.log(bestStudent(students));
// Expected: "Carla"