import ProductModalItem from "./ProductModalItem";
import { productData } from "../data";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

const ProductModal = () => {
  const { items } = useContext(ShopContext);
  return (
    <div className="SelectedProduct">
      {productData.map((product) => {
        if (items[product.id] !== 0) {
          return <ProductModalItem data={product} />;
        }
      })}
    </div>
  );
};

export default ProductModal;
