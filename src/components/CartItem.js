import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

const CartItem = (props) => {
  const { items, addToCart, removeFromCart, delFromCart, updateItemQuantity } =
    useContext(ShopContext);
  const { productName, price, image, id } = props.data;
  return (
    <CartItemStyle>
      <div className="sub1">
        <img src={image} alt={image} />
        <div className="info">
          <p>{productName}</p>
          <div className="cartItemButtons">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              value={items[id]}
              onChange={(e) => updateItemQuantity(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
          <button className="removeBtn" onClick={() => delFromCart(id)}>
            <BsTrash />
            Remove
          </button>
        </div>
      </div>
      <div className="sub2">
        <p>
          <b>${price}</b>
        </p>
      </div>
    </CartItemStyle>
  );
};

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.5rem;
  gap: 2rem;

  .sub1 {
    display: flex;
    width: 100%;

    img {
      max-width: 300px;
      max-height: 300px;
    }

    .info {
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cartItemButtons {
        display: flex;
        align-items: center;

        button {
          border-radius: 15px;
          padding: 0.8rem 1.6rem;
          font-size: 2rem;
          color: black;
        }

        input {
          outline: none;
          border: none;
          background: none;
          width: 60px;
          height: 50px;
          margin: 0 1.5rem;
          font-size: 2rem;
          text-align: center;
        }
      }

      .removeBtn {
        font-size: 1.5rem;
        width: 40%;
        margin-top: 1rem;
        border-radius: 15px;
        font-weight: lighter;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        padding: 0.8rem;

        svg {
          padding-right: 0.3rem;
        }
      }
    }
  }
`;

export default CartItem;
