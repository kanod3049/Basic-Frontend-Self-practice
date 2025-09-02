const products = [
  { id: 1, name: "bag", price: 500, stock: 5 },
  { id: 2, name: "pen", price: 20, stock: 50 },
  { id: 3, name: "Book", price: 120, stock: 10 },
  { id: 4, name: "Pencil", price: 5, stock: 0 },
  { id: 5, name: "Bag", price: 600, stock: 2 },
]

let names = products.map((n) => n.name.toLowerCase())
console.log(names)

let stock = products.filter((s) => s.stock > 0)
console.log(stock)

let maxPriceProduct = products.reduce((sum, p) => sum += p.price * p.stock, 0)
console.log(maxPriceProduct)

function findName(products, key) {
    return products.filter(p => p.name.toLowerCase() === key.toLowerCase())
}
console.log(findName(products, "pencil"))

// Higher-Order Function
function applyDiscount(products, call) {
    return products.map(p => ({...p, price: call(p)}))  //ใช้ callback
}
let discounted = applyDiscount(products, p => p.price * 0.5)
console.log(discounted)

let productsID = []
products.forEach(p => productsID.push(p.id))
console.log(productsID)

