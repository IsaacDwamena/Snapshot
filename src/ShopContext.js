import { useEffect } from "react";
import { useState, createContext } from "react";
import { productData } from "./data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < productData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [items, setItems] = useState(getDefaultCart());

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("storedProducts", JSON.stringify(items));
  }, [items]);

  const addToCart = (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const delFromCart = (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };

  const updateItemQuantity = (newQuantity, itemId) => {
    setItems((prev) => ({ ...prev, [itemId]: newQuantity }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in items) {
      if (items[item] > 0) {
        let itemInfo = productData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += items[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    items,
    setItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    getTotalCartAmount,
    delFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
