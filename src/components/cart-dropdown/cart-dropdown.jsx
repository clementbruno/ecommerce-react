import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ items, history, dispatch }) => {
  function handleClick() {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

// Alternative syntax without destructuring and without selector (NB: Selectors are used for memoization i.e. to avoid unnecessary re-render of components)
// const mapStateToProps = (state) => {
//   return {
//     items: state.cart.cartItems,
//   };
// };

export default withRouter(
  // If we don't provide a mapDispatchToProps then dispatch is made available from the props of the component to be called directly in the component body
  connect(mapStateToProps)(CartDropdown)
);
