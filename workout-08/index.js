const products = [
  { name: 'Notebook', category: 'eletrônicos', price: 3500, stock: 5 },
  { name: 'Mouse', category: 'eletrônicos', price: 50, stock: 0 },
  { name: 'Cadeira', category: 'móveis', price: 800, stock: 12 },
  { name: 'Mesa', category: 'móveis', price: 1200, stock: 0 },
  { name: 'Fone', category: 'eletrônicos', price: 200, stock: 3 },
];

function filterByCategory(products, category) {
  return products.filter(p => p.category === category);
}

function getAvailableProductsSorted(products, category){
    const p = filterByCategory(products, category)

    const availableProducts = []

    for (const product of p){
        if (product.stock >= 1){
            
            const {name, price} = product
            availableProducts.push({name, price})
        }
    }
    
    availableProducts.sort((a, b) => a.price - b.price)

    return availableProducts
}