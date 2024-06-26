import React from "react";
import "./ShowMore.css";
import ProductList from "../ProductList";

const ShowMore = () => {
  return (
    <div className="container-5">
      <div className="product-list">
        {ProductList.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <h5>{product.price}</h5>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowMore;
