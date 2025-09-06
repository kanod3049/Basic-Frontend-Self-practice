import { students, checkHobbies, allHobbies, sumScores, sortByAvg, getTopStudent } from "./ArrayMehods.js"

console.log(Object.entries(students[1].scores))

console.log(checkHobbies(students))

console.log(allHobbies)

console.log(sumScores("eng", 102, 101))

console.log(sortByAvg.map(s => s.name))

console.log(getTopStudent(students))