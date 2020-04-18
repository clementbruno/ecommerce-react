import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// Alternative syntax with destructuring and without selector (NB: Selectors are used for memoization  i.e. to avoid unnecessary re-render of components)
// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return {
//     itemCount:
//       cartItems.length > 0
//         ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
//         : 0,
//   };
// };

// Alternative syntax without destructuring and without selector (NB: Selectors are used for memoization i.e. to avoid unnecessary re-render of components)
// const mapStateToProps = (state) => {
//   return {
//     itemCount:
//       state.cart.cartItems.length > 0
//         ? state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)
//         : 0,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
