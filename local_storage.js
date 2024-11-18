const getItemForField = () => {
    const productField = document.getElementById('product-field')
    const quantityField = document.getElementById('quantity-field')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayTheField(product, quantity);
    saveProductToLocalStg(product, quantity);
}

const displayTheField = (product, quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ulContainer.appendChild(li);
}

const getStoredCardFormLocalStg = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

saveProductToLocalStg = (product, quantity) => {
    const cart = getStoredCardFormLocalStg();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const displayFromLocalStg = () => {
    const saveCartItem = localStorage.getItem('cart');
    const convertSaveCartItem = JSON.parse(saveCartItem);
    for (const cartItem in convertSaveCartItem) {
        const quantity = convertSaveCartItem[cartItem];
        displayTheField(cartItem, quantity);
    }
}

displayFromLocalStg();