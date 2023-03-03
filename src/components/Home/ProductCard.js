import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/actions";
import { turnProduct } from "../../redux/products/actions";

export default function ProductCard(productInfo) {
  const dispatch = useDispatch();
  const { id,productName, productCategory, imageURI, price, quantity } =
    productInfo;

  const handleProductChange = (e) => {
    e.preventDefault();
    dispatch(addItem(id));
    dispatch(turnProduct(id))
  };

  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src={imageURI}
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{productCategory}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>

        {quantity <= 0 ? <button
          onClick={(e) => handleProductChange(e)}
          className="lws-btnAddToCart"
          disabled
        >
          Add To Cart
        </button> : <button
          onClick={(e) => handleProductChange(e)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>}
      </div>
    </div>
  );
}
