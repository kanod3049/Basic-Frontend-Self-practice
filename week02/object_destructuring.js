let student = {
  name: "Kanokpon",
  year: 2,
  scores: {
    math: 85,
    js: 92,
    css: 78
  }
}

// 1. keys
console.log(Object.keys(student))

// 2. values
console.log(Object.values(student))

// 3. entries
console.log(Object.entries(student))

// 4. for...in loop
for (let key in student) {
  console.log(key, ":", student[key])
}

// 5. destructuring
let {math, js} = student.scores
console.log("Math:", math, "JS:", js)

// 6. spread operator
let newStudent = {...student, status: "active"}
console.log(newStudent)