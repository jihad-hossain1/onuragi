///

const addToDatabase = id => {
    let shoppingCart = {};
    // localStorage.setItem('shoping-cart', id);

    // get previous data from local storage
    const storedCart = localStorage.getItem('shoping-cart', id);
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    // let shoppingCart = {}

    // const storedCart = localStorage.getItem('shoping-cart');
    // if (storedCart) {
    //     shoppingCart = JSON.parse(storedCart);
    // }
    // return shoppingCart;
    let inObj = {};
    const storedcard = localStorage.getItem('shoping-cart')
    if (storedcard) {
        inObj = JSON.parse(storedcard)
    }
    return inObj;
}
// remove a specific element form local storage
const removeFromDB = (id) => {
    const storedCart = localStorage.getItem('shoping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart))
        }
    }
}

// clear all data from local storage
const deleteShopingCart = () => localStorage.removeItem('shoping-cart')


export { addToDatabase, getStoredCart, removeFromDB, deleteShopingCart };