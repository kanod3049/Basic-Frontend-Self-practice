let user = {
    name : "nod",
    sayHi: function() {
        return "Hi, " + this.name
    },
    sayAgian: function() {
        return this.sayHi() + "!!!"
    }
}
console.log(user.sayHi())
console.log(user.sayAgian())

function createCounter() {
    let count = 0
    return function() {
        count++
        return count
    }
}
let count = createCounter()
console.log(count()) // 1
console.log(count()) // 2 closure ทำให้ฟังก์ชันจำตัวแปร count ไว้ได้

let scores = [75, 80, 95, 60, 88]
console.log(scores.some(s => s > 90)) // true some อย่างน้อย 1 ตัวตรงเงื่อนไข
console.log(scores.every(s => s > 90)) // false every ทุกตัวต้องตรงเงื่อนไข

let students = [
    {id:1, name:"Nod", year:2},
    {id:2, name:"Pam", year:1},
    {id:3, name:"Win", year:2}
]
let nod = students.find(s => s.name.toLocaleLowerCase() === "nod") // find หา element ตัวแรกที่ตรงเงื่อนไข
console.log(nod)

function sumAll(...nums) {
  return nums.reduce((a,b)=>a+b,0)
}
console.log(sumAll(1,2,3,4)) // 10

let obj1 = {a:1, b:2}
let obj2 = {b:3, c:4}
let merged1 = Object.assign({}, obj1, obj2)
let merged2 = {...obj1, ...obj2}
console.log(merged1) // {a:1, b:3, c:4}
console.log(merged2) // {a:1, b:3, c:4}
// Object.assign และ spread ใช้รวม object โดยค่า key ซ้ำจะถูก override