import React from "react";
import {
  UserOutlined,
  CreditCardOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col h-[610px] max-h-[610px] py-4  bg-gray-300 border-[1px] border-black">
        <div className="ml-4">
          <UserOutlined />
          <a className="ml-4" href="/manageuser">
            Quản lý người dùng
          </a>
        </div>
        <div className="py-5 ml-4">
          <CreditCardOutlined />
          <a className="ml-4" href="/manageoder">
            Quản lý đơn hàng
          </a>
        </div>{" "}
        <div className="ml-4">
          <ShoppingCartOutlined />
          <a className="ml-4" href="/manageproduct">
            Quản lý sản phẩm
          </a>
        </div>{" "}
        <div className="ml-4 mt-[450px]">
          <LogoutOutlined />
          <a className="ml-4" href="/manageproduct">
            Đăng xuất
          </a>
        </div>
      </div>
    </>
  );
}
