let nums = [3, 7, 2, 9, 10, 1, 8]
// ทวน Method เอาโจทย์มาจาก chatGPT ครับ :)
// 1.สร้าง array ใหม่ที่มีเฉพาะ เลขคู่
// 2.สร้าง array ใหม่ที่ทุกตัวเลข เพิ่มทีละ 1
// 3.หาผลรวมของเลขทั้งหมด
// 4.พิมพ์เลขที่ มากกว่า 5 ทั้งหมด
// 5. หาค่ามากกว่า 5 ตัวแรก
// 6. มีเลขมากกว่า 100 มั้ย?  
// 7. ทุกตัวเป็นเลขบวกไหม?
// 8. เรียงน้อยไปมาก
// 9. เอาเลข 3 ตัวกลาง
// 10. ลบ index 2 แล้วแทนที่ด้วย 999
// 11. แปลง array เป็น string

// 1. 
let even = nums.filter(n => n % 2 === 0)// ใช้ filter เพราะคัดค่ามันง่ายละสั้น ชัดเจนกว่า
console.log("1.Even:", even)             // มีการใช้ Arrow function ด้วย

// 2.
let plus1 = nums.map(n => n + 1) // ใช้ map เพราะว่า ต้องการเปลี่ยนค่าทุกตัวใน array
console.log("2.PlusOne:", plus1)

// 3.
let sum = nums.reduce((acc, val) => acc + val, 0) // ผมยังงง กับการใช้ reduce อยู่เลยให้ chatGPT แนะแนวให้
console.log("3.Sum:", sum)                        // ละก็นำ code ไปวางบนเว็บที่อาจจารย์แนะนำจึงเห็นภาพมากขึ้น

// 4.
let greaterthan5 = nums.filter(n => n > 5)
console.log("4.Greaterthan5:", greaterthan5)

// 5.
let findFirstGreaterthan5 = nums.find(n => n > 5)
console.log("5.findFirstGreaterthan5:", findFirstGreaterthan5)

// 6.
let morethan100 = nums.some(n => n > 100)
console.log("6.morethan100:", morethan100)

// 7.
let allPositive = nums.every(n => n > 0)
console.log("7.allPositive:", allPositive)

// 8. 
let sorted = nums.sort((a, b) => a - b)
console.log("8.sorted:", sorted)

// 9.
let mid3 = nums.slice(2, 5) // index
console.log("9.middle 3:", mid3)

// 10. 
let replace = [...nums] // มีการใช้ spread operator
replace.splice(2, 1, 999)
console.log("10.replace:" , replace)

// 11.
let convert = nums.join(", ")
console.log("11.array to string", convert)