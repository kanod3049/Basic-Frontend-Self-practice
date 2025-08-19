// Shallow Equality
let obj1 = {name: "Nod", year: 2}
let obj2 = {name: "Nod", year: 2}

console.log(obj1 === obj2)  // false 

function shallowEqual(objA, objB) {
  let keysA = Object.keys(objA)
  let keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  return keysA.every(key => objA[key] === objB[key])
}

console.log(shallowEqual(
  {name: "Nod", year: 2}, 
  {name: "Nod", year: 2}
)) // true

let user1 = {name: "Nod", address: {city: "Bangkok"}}
let user2 = {name: "Nod", address: {city: "Bangkok"}}

console.log(shallowEqual(user1, user2)) // false

function shallowEqual(a, b) {
  // ถ้าเป็น object
  if (typeof a === "object" && typeof b === "object") {
    // null check (เพราะ typeof null === "object")
    if (a === null || b === null) return a === b
    
    // Array case
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false
      return a.every((val, idx) => val === b[idx])
    }

    // Object case
    let keysA = Object.keys(a)
    let keysB = Object.keys(b)

    if (keysA.length !== keysB.length) return false

    return keysA.every(key => a[key] === b[key])
  }
  // ถ้าไม่ใช่ object → ใช้ ===
  return a === b
}

// Test Cases
console.log(shallowEqual({a:1, b:2}, {a:1, b:2}))   // true
console.log(shallowEqual({a:1, b:2}, {a:1, b:3}))   // false
console.log(shallowEqual([1,2,3], [1,2,3]))         // true
console.log(shallowEqual([1,2,3], [1,3,2]))         // false
console.log(
  shallowEqual(
    {name: "Nod", scores: [90,80]},
    {name: "Nod", scores: [90,80]}
  )
) // false (เพราะ array เป็นคนละ reference)
