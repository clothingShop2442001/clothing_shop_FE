import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { clearCart, toggleStatusTab } from "../store/cart";
import axios from "axios";
import { message } from "antd";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  console.log("🚀 ~ CartTab ~ carts:", carts);
  const statusTab = useSelector((store) => store.cart.statusTab);

  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };
  const user = JSON.parse(localStorage.getItem("user"));

  const handleOrder = () => {
    const payload = {
      totalPrice: carts.reduce((accumulator, currentValue) => {
        return (
          accumulator + parseInt(currentValue.price) * currentValue.quantity
        );
      }, 0),
      userId: user.userId,
      userName: user.fullName,
      phoneNumber: user.phoneNumber,
      address: user.address,
    };

    axios
      .post("http://localhost:3001/orders", payload)
      .then((response) => {
        dispatch(clearCart());
        message.success("Đã thanh toán");
      })
      .catch((error) => {
        message.error("Thêm người dùng thất bại");
      });
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-500 shadow-2xl  w-96 h-full mt-[98px]  
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
      <div className="mt-2 bg-white w-[200px] pt-2 gap-5  ml-24 absolute rounded-lg top-[470px] text-[20px] flex">
        <p className="text-sm ml-3 font-bold ">Tổng đơn hàng: </p>
        <div className="text-xl ">
          {" "}
          {carts.reduce((accumulator, currentValue) => {
            return (
              accumulator + parseInt(currentValue.price) * currentValue.quantity
            );
          }, 0)}
        </div>
      </div>
      <div className="h-[30%] ml-10 mt-0 gap-5 flex mx-auto">
        <button
          className="bg-black hover:bg-white hover:text-black delay-150 border-2  border-black	 rounded-md  w-[150px] h-[40px] text-white"
          onClick={handleCloseTabCart}
        >
          Đóng
        </button>
        <button
          onClick={handleOrder}
          className="bg-blue-500 hover:bg-green-500 hover:text-black delay-150 border-2 rounded-md  w-[150px] h-[40px] text-white"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default CartTab;
