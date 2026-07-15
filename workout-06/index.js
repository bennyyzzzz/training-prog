const cart = [
    {
        name: "tshirt",
        price: 99.00,
        qnty: 3,
    },
    {
        name: "jorts",
        price: 110.00,
        qnty: 2,
    },
    {
        name: "jersey",
        price: 105.00,
        qnty: 2,        
    },
]

function showCart() {
    for(let product of cart){
        console.log(`${product.name} - $${product.price} x${product.qnty}`)
    }
}

showCart(cart)

function calcTotal(){
    let totalPrice = 0

    for(let product of cart){
        totalPrice += product.price * product.qnty
    }

    return totalPrice
}

function addProduct(name, price, qnty){
   let newProduct = {name, price, qnty}

    cart.push(newProduct)

    console.log("Add product!")
}

function calcDiscount(){
    let total = calcTotal()
    let discountPrice = (10 * total) / 100

    if (total > 100){
        return total - discountPrice
    } else {
        return total
    }
}