import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map((category) => collections[category])
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
