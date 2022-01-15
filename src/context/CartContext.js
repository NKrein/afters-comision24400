import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartArray, setCartArray] = useState([]);

  const addToCart = (product, count) => {
    if (isInCart(product.id)) {
      console.log('ya está el producto en el carrito.'); // esta sería la acción para cuando ya está agregado.
    } else {
      console.log(`Agregaste ${product.title}, cantidad: ${count}.`);
      const newObj = {
        item: product,
        count
      }
      setCartArray([...cartArray, newObj])
    }
  }

  const deleteItem = (id) => {
    const updatedCart = cartArray.filter(element => element.item.id !== id);
    setCartArray(updatedCart);
  }

  const clearCart = () => {
    setCartArray([]);
  }

  const isInCart = (id) => {
    return cartArray.some(element => element.item.id === id);
  }

  const productCounter = () => {
    return cartArray.reduce((accum, item) => accum = accum + item.count, 0)
  }

  const value = {
    cartArray,
    addToCart,
    deleteItem,
    clearCart,
    productCounter
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
