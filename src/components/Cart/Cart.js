import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartCard from "./CartCard";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {products.map((product) => (
              <CartCard key={product.id} productInfo={product}/>
            ))}
          </div>
          <BillDetails />
        </div>
      </div>
    </main>
  );
}
