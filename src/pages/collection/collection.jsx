import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop-selectors";
import "./collection.scss";

const CollectionPage = ({ match, collection }) => {
  return (
    <div className="collection-page">
      <h2>CollectionPage</h2>
      <CollectionItem collection={collection} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollection,
});

export default connect(mapStateToProps)(CollectionPage);
