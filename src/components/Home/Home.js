import React from "react";
import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";

export default function Home() {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductsList />
        <div>
          <AddProduct />
        </div>
      </div>
    </main>
  );
}
