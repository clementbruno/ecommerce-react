import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";
import shopReducer from "./shop/shop-reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // importing this tells persist that we want to use the local storage (we could import sessionStorage instead if we wanted to use the session storage)

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // This tells that we want to persist the cart reducer. No need for user here since it is persisted by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
