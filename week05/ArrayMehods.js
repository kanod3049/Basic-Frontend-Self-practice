export const students = [
  { id: 101, name: "Alice", scores: { math: 85, eng: 78 }, hobbies: ["reading", "coding"] },
  { id: 102, name: "Bob", scores: { math: 92, eng: 88 }, hobbies: ["sports"] },
  { id: 103, name: "Charlie", scores: { math: 68, eng: 70 }, hobbies: ["gaming", "music"] },
  { id: 104, name: "David", scores: { math: 100, eng: 100 }, hobbies: [] },
  { id: 105, name: "Eve", scores: { math: 78, eng: 85 }, hobbies: ["reading", "music"] }
]

// Object.entries
// console.log(Object.entries(students[1].scores))

// Array.isArray
export function checkHobbies(students) {
    return students.map(s => Array.isArray(s.hobbies))
}
// console.log(checkHobbies(students))

// Spread Operator
export const allHobbies = [...new Set(students.flatMap(s => s.hobbies))] // Set ลบค่าซ้ำ flatMap เรียง Array ซ้อน Array
// console.log(allHobbies) 

// Rest + Default
export function sumScores(subject, ...ids) {
    return students.filter(s => ids.includes(s.id)).reduce((sum, s) => sum + (s.scores[subject] || 0), 0)
}
// console.log(sumScores("eng", 102, 101))

// sort average
export const sortByAvg = [...students].sort((a, b) => {
    const avgA = (a.scores.math + a.scores.eng) / 2
    const avgB = (b.scores.math + b.scores.eng) / 2
    return avgB - avgA
})
// console.log(sortByAvg.map(s => s.name))

export function getTopStudent(students) {
  return students.reduce((top, s) => {
    let avg = (s.scores.math + s.scores.eng) / 2
    let topAvg = (top.scores.math + top.scores.eng) / 2
    return avg > topAvg ? s : top
  })
}
