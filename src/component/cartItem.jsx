import React, { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

export default function CartItem(props) {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <>
      <div className="flex shadow-xl justify-between items-center h-14  bg-white text-black p2 border-1 border-black rounded-sm     mb-4  border-slate-700 ">
        <img className="w-12 h-10 ml-2 " src={detail.image} alt="" />/
        <h2 className="">{detail.name}</h2>
        <p>${detail.price * quantity}</p>
        <div className="w-20 flex justify-between">
          <button
            onClick={handleMinusQuantity}
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          >
            -
          </button>
          <button>{quantity}</button>
          <button
            onClick={handlePlusQuantity}
            className="bg-gray-200 rounded-full mr-2 w-6 h-6 text-cyan-600"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
