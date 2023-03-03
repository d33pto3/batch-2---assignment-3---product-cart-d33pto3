import { useDispatch } from "react-redux";
import { addItem, removeItem, deleteProduct } from "../../redux/cart/actions";
import { returnProduct, turnProduct, turnProductWithQuantity } from "../../redux/products/actions";

export default function CartCard({productInfo}) {
  const dispatch = useDispatch();
  const {id, productName, productCategory, imageURI, price, quantity} = productInfo;

  const handleAdd = () => {
    dispatch(addItem(id));
    dispatch(turnProduct(id));
  }

  const handleRemove = () => {
    dispatch(removeItem(id));
    dispatch(returnProduct(id));
  }

  const handleDelete = () => {
    dispatch(turnProductWithQuantity(id, quantity));
    dispatch(deleteProduct(id));
  }
    return(
      <div>
        {quantity > 0 && (<div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img
          className="lws-cartImage"
          src={imageURI.includes("https://")
          ? imageURI
          : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
          alt="product"
        />

        <div className="space-y-2">
          <h4 className="lws-cartName">
            {productName}
          </h4>
          <p className="lws-cartCategory">{productCategory}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
         

       
          <button onClick={() => handleAdd()} className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-plus"></i>
          </button>

          <span className="lws-cartQuantity">{quantity}</span>
          
          <button onClick={() => handleRemove()} className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-minus"></i>
          </button>

        </div>

        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={() => handleDelete()} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>)}
      </div>
    )
}
