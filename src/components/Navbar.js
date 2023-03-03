import logo from "../assets/images/logo.png";
import React from "react";
import { useSelector } from "react-redux";

const findTotalProducts = (products) => {
  return products.reduce((totalProducts, product) => {return totalProducts + product.quantity}, 0)
}

export default function Navbar({ setToggle }) {
  const cartProducts = useSelector(state => state.cart);
  const totalProducts = findTotalProducts(cartProducts);

  const showCart = (e) => {
    e.preventDefault();
    setToggle(true);
  };
  const showHome = (e) => {
    e.preventDefault();
    setToggle(false);
  };
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a onClick={(e) => showHome(e)} href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a
              onClick={(e) => showHome(e)}
              href="index.html"
              className="navHome"
              id="lws-home"
            >
              {" "}
              Home{" "}
            </a>
            <a
              onClick={(e) => showCart(e)}
              href="cart.html"
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{totalProducts}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
