import { getStoredCart } from "../component/db/db";

const customData = async () => {
    const loadedData = await fetch('products.json');
    const products = await loadedData.json();
    // console.log(products);
    const savedProduct = getStoredCart();
    // console.log(savedProduct);
    let inArray = [];
    for (const id in savedProduct) {
        const newProduct = products.find(pd => pd.id === id)
        if (newProduct) {
            const quantity = savedProduct[id]
            newProduct.quantity = quantity;
            inArray.push(newProduct);
        }
    }
    return { products, inArray };
    // return products;
}

// export default { customData, products };
export default customData;