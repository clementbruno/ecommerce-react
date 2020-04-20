import React from "react";
import { connect } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact ">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// Alternative syntax without createStructuredSelector
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

// Alternative syntax without destructuring and without selector (NB: Selectors are used for memoization i.e. to avoid unnecessary re-render of components)
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//   return {
//     currentUser,
//     hidden,
//   };
// };

// Alternative, less complex syntax with no state parameter destructuring and without selector
// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden,
//   };
// };

export default connect(mapStateToProps)(Header);
