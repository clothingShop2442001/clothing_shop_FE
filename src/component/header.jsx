import React, { useState, useEffect } from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Form } from "antd";
import logo from "../img/logo.png";
import shoppingcart from "../img/shoppingcart.jpg";
import { Dropdown, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";
import { useNavigate } from "react-router-dom";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Search } = Input;
export default function Header() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  // handle navigate login
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="bg-[#F1F1F1] h-[100px] flex items-center  fixed top-0 left-0 right-0   shadow-md  ">
        {/* logo */}
        <div>
          <img className="w-24  h-24 bg-[#F1F1F1] ml-5" src={logo} alt="" />
        </div>
        {/* menu  */}
        <div className="mx-auto flex gap-6">
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="/listproduct"
          >
            SHOP
          </a>
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="#"
          >
            BEST SELLER
          </a>{" "}
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="#"
          >
            COLLAB'S
          </a>{" "}
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="#"
          >
            NEW
          </a>{" "}
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="#"
          >
            CONTACT
          </a>
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="#"
          >
            ABOUT
          </a>
        </div>
        {/* login  */}
        <div className="flex gap-5 mr-4 bg-[F1F1F1]">
          <Space direction="vertical">
            <div className=" bg-[F1F1F1]"></div>
            <Search
              placeholder="Tìm kiếm"
              onSearch={onSearch}
              style={{
                width: 150,
              }}
            />{" "}
          </Space>
          <a className="text-[30px]">
            {" "}
            <UserOutlined onClick={handleNavigateLogin} />{" "}
          </a>
          <div onClick={handleOpenTabCart} className="relative">
            <img
              className="w-8 h-8 mt-2 cursor-pointer "
              src={shoppingcart}
              alt=""
            />

            <span
              className="absolute top-[70%] right-1/2 bg-red-500 text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center"
            >
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
