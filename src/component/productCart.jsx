import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
export default function ProductCart(props) {
  const carts = useSelector((store) => store.cart.items);
  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  console.log(carts);
  return (
    <>
      <div className="w-[23%] h-[350px] rounded-sm shadow-xl flex flex-col">
        <Link to={slug}>
          <img className="w-full h-[200px]  " src={image} alt="" />
        </Link>
        <p className="text-sm mt-10 text-center tex-[#182C42]">{name}</p>
        <p className="text-sm text-center  text-black">{price} VND</p>
        <button
          onClick={handleAddToCart}
          className="w-[150px]   ml-10 mt-3 text-sm bg-gray-300 rounded-md item- py-1 tex-[#182C42]"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </>
  );
}
