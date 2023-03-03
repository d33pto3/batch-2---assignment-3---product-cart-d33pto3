import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/actions";
import { addToCart } from "../../redux/cart/actions";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productCategory: "",
    imageURI: "",
    price: "",
    quantity: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productInfo));
    dispatch(addToCart(productInfo));

    setProductInfo({
      productName: "",
      productCategory: "",
      imageURI: "",
      price: "",
      quantity: "",
    });
    e.target.reset();
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            onChange={(e) => handleInput(e)}
            className="addProductInput"
            name="productName"
            id="lws-inputName"
            type="text"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            onChange={(e) => handleInput(e)}
            name="productCategory"
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            onChange={(e) => handleInput(e)}
            name="imageURI"
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              onChange={(e) => handleInput(e)}
              name="price"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              onChange={(e) => handleInput(e)}
              name="quantity"
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>

        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
