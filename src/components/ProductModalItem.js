import React from "react";

const ProductModalItem = (props) => {
  const { productName, price, image, id, description } = props.data;
  return (
    <div className="modalItem">
      <div className="container">
        <img src={image} alt={image} />
        <div className="sub">
          <p>{productName}</p>
          <p>
            <b>${price}</b>
          </p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProductModalItem;
