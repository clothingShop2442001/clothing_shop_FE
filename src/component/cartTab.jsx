import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { toggleStatusTab } from "../store/cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);

  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-500 shadow-2xl w-96 h-full mt-[98px]  
    transform transition-transform duration-500 
    ${statusTab === false ? "translate-x-full" : ""}
    `}
    >
      <h2 className="p-5 text-white text-2xl">Giỏ hàng của tôi</h2>
      <div className="p-5 h-[68%] text-[12px]">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="h-[30%] ml-10 mt-0 gap-5 flex mx-auto">
        <button
          className="bg-black hover:bg-white hover:text-black delay-150 border-2  border-black	 rounded-md  w-[150px] h-[40px] text-white"
          onClick={handleCloseTabCart}
        >
          Đóng
        </button>
        <button className="bg-blue-500 hover:bg-green-500 hover:text-black delay-150 border-2 rounded-md  w-[150px] h-[40px] text-white">
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default CartTab;
