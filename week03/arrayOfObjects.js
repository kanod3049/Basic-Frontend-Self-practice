let students = [
  {
    id: 1,
    name: "Nod",
    year: 2,
    scores: { js: 60, css: 78, html: 85 },
    hobbies: ["gaming", "coding"]
  },
  {
    id: 2,
    name: "Kanok",
    year: 1,
    scores: { js: 85, css: 80, html: 70 },
    hobbies: ["reading", "music"]
  },
  {
    id: 3,
    name: "Vava",
    year: 2,
    scores: { js: 70, css: 65, html: 60 },
    hobbies: ["sports", "coding", "music"]
  }
]

for (let i of students) {
  console.log(students)
}

let names = students.map(s => s.name)
console.log(names)

let year2 = students.filter(s => s.year == 2)
console.log(year2)

let avgJs = students.reduce((sum,s) => sum + s.scores.js, 0) / students.length
console.log(avgJs)

for (let {name, year} of students) {
  console.log(`${name} (Year ${year})`)
}

function findByName(students, getName) {
  return students.find(s => s.name === getName) || null 
}

console.log(findByName(students, "Nod"))
console.log(findByName(students, "Nan"))

let year2Names = students.filter(s => s.year === 2).map(s => s.name)
console.log(year2Names)

// หาค่าเฉลี่ยรวมของทุกวิชา
let totalScore = students.reduce((sum, s) => { // อันนี้งง ให้ chat ช่วยคับ
  let subjectScores = Object.values(s.scores)
  let studentsTotal = subjectScores.reduce((a,b) => a + b, 0)
  return sum + studentsTotal
},0)
let avgScore = totalScore / students.length
console.log(avgScore)

let topJsStudent = students.reduce((max, s) => s.scores.js > max.scores.js ? s : max)
console.log(topJsStudent.name)

// สรุปรวมคะแนนทั้งหมดเป็น Array ใหม่
let summary = students.map(s => {
  let total = Object.values(s.scores).reduce((a,b) => a + b, 0)
  return { id: s.id ,name: s.name, totalScore:total }
})
console.log(summary)

let findCodingStudents = students.filter(s => s.hobbies.includes("coding"))
console.log(findCodingStudents.map(s => s.name))

// destructuring object ซ้อน
for (let {name, scores: {js, css, html}} of students) {
  console.log(`${name}: JS=${js} CSS=${css}, HTML=${html}`)
}

// ค้นหา hobby 
function findStudentsHobby(students, hobby) {
  return students.filter(s => s.hobbies.includes(hobby)).map(s => s.name)
}
console.log(findStudentsHobby(students,"music"))
