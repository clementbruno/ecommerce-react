export const addItemToCart = (currentCartItems, newItem) => {
  const existingCarItem = currentCartItems.find(
    (item) => item.id === newItem.id
  );

  if (existingCarItem) {
    return currentCartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...currentCartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (currentCartItems, itemToRemove) => {
  if (itemToRemove.quantity > 1) {
    return currentCartItems.map((item) => {
      return item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  } else {
    return clearItemFromCart(currentCartItems, itemToRemove);
  }
};

export const clearItemFromCart = (currentCartItems, itemToClear) => {
  return currentCartItems.filter((item) => item.id !== itemToClear.id);
};
