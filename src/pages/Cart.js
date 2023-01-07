import { useContext } from "react";
import { productData } from "../data";
import { ShopContext } from "../ShopContext";
import CartItem from "../components/CartItem";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2);
  const navigate = useNavigate();

  return (
    <CartStyle>
      <div className="cartContainer">
        <div className="panel1">
          <h1>Your cart:</h1>
          <div className="cartItems">
            {productData.map((product, index) => {
              if (items[product.id] !== 0) {
                return <CartItem data={product} key={index} />;
              }
            })}
          </div>
        </div>
        <div className="panel2">
          <div className="container">
            <h1>Order summary:</h1>
            <div className="Estimated shipping">
              <p>Extimated Shipping</p>
              <p>Free</p>
            </div>
            <div className="Estimated Total">
              <p>Extimated Total</p>
              <p>${totalAmount}</p>
            </div>
            <div className="cartButtons">
              <button onClick={() => navigate("/shop")}>
                Continue Shopping
              </button>
              <button
                onClick={() => {
                  alert("this function has not been integrated yet");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  background: #fff;

  .cartContainer {
    width: 90%;
    margin: 0 auto;
    padding: 5vh 0 10vh 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 4rem;

    @media (max-width: 1250px) {
      grid-template-columns: 1fr;
    }

    .panel1 {
      h1 {
        color: black;
        font-size: 2.5rem;
        font-weight: lighter;
        margin-bottom: 4rem;
      }
    }

    .panel2 {
      position: sticky;
      top: 0;
      height: 100vh;

      @media (max-width: 1250px) {
        position: static;
        top: unset;
        height: auto;
      }

      .container {
        margin-top: 12vh;
        width: 100%;
        border: 2px solid #cccccc1f;
        padding: 2rem;
        border-radius: 10px;

        h1 {
          color: black;
        }

        .Estimated {
          display: flex;
          justify-content: space-between;
          font-size: 1.5rem;

          p {
            padding: 1.5rem 0rem;
          }
        }

        .cartButtons {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;

          button {
            color: black;
          }
        }
      }
    }
  }
`;

export default Cart;
