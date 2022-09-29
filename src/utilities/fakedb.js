// use local storage to manage cart data
const addToDb = id => {
    let selectBoard = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        selectBoard = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = selectBoard[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        selectBoard[id] = newQuantity;
    }
    else {
        selectBoard[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(selectBoard));
}

const getstoreData = () => {
    let selectBoard = {};

    //get the shopping cart from local storage
    const storeData = localStorage.getItem('shopping-cart');
    if (storeData) {
        selectBoard = JSON.parse(storeData);
    }
    return selectBoard;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const selectBoard = JSON.parse(storedCart);
        if (id in selectBoard) {
            delete selectBoard[id];
            localStorage.setItem('shopping-cart', JSON.stringify(selectBoard));
        }
    }
}


export {
    addToDb,
    getstoreData,
    removeFromDb,
   
}