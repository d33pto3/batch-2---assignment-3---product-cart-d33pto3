import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function ProductsList() {
  const products = useSelector((state) => state.products);
  const totalProducts = products.length;

  return (
    <div className="productContainer" id="lws-productContainer">
      {totalProducts
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              productName={product.productName}
              productCategory={product.productCategory}
              imageURI={product.imageURI}
              price={product.price}
              quantity={product.quantity}
            />
          ))
        : "NO PRODUCTS TO SHOW"}
    </div>
  );
}
