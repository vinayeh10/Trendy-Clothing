const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemFound = cartItems.find(item => item.id === cartItemToAdd.id);

    if (cartItemFound) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export default addItemToCart;