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
