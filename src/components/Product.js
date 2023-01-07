import { useContext } from "react";
import { ShopContext } from "../ShopContext";

const Product = (props) => {
  const { productName, price, image, id } = props.data;
  const { items, addToCart } = useContext(ShopContext);
  const itemQuantity = items[id];
  return (
    <div className="productCard">
      <div className="image-container">
        <img src={image} alt={image} />
      </div>
      <div className="infoContainer">
        <p>{productName}</p>
        <p>
          <b>${price}</b>
        </p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart {itemQuantity > 0 && <>({itemQuantity})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
