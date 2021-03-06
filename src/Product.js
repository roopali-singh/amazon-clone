import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";


function Product({ id, title, price, rating, image }) {
  //Change info with dispatch
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket >>>", basket);
  const addToBasket = () => {
//     // dispatch some item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>₹</small>
          <strong>
            {price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
