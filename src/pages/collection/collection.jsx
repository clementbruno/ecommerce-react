import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item, idx) => (
          <CollectionItem item={item} key={idx} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
