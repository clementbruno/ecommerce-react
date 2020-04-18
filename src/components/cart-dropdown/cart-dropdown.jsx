import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { connect } from "react-redux";
import "./cart-dropdown.scss";

const CartDropdown = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: selectCartItems(state),
  };
};

// Alternative syntax without destructuring and without selector (NB: Selectors are used for memoization i.e. to avoid unnecessary re-render of components)
// const mapStateToProps = (state) => {
//   return {
//     items: state.cart.cartItems,
//   };
// };

export default connect(mapStateToProps, null)(CartDropdown);
