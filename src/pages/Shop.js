import { productData } from "../data";
import Product from "../components/Product";

import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animate";

const Shop = () => {
  return (
    <motion.div variants={fade} className="shop" style={{ background: "#fff" }}>
      <ItemList>
        {productData.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </ItemList>
    </motion.div>
  );
};

const ItemList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 80%;
  margin: 0 auto;
  padding: 5vh 0 10vh 0;

  .productCard {
    border-radius: 15px;
    width: 300px;
    height: 560px;
    display: flex;
    flex-direction: column;

    .image-container {
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .infoContainer {
      height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .addToCartBtn {
      color: black;
    }
  }

  p {
    padding: 1rem 0rem;
  }
`;

export default Shop;
