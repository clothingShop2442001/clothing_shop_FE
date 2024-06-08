import React from "react";
import { UserOutlined } from "@ant-design/icons";
import logo from "../img/logo.png";
import { Dropdown, Space } from "antd";

export default function HeaderAdmin() {
  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-[60px] flex items-center  ">
        {/* logo */}

        <div className="w-1/2">
          <img
            className="w-[120px]  h-[60px] bg-[#F1F1F1] ml-5"
            src={logo}
            alt=""
          />
        </div>
        <div className="w-1/2 justify-end mr-[5%] flex gap-3 items-center ">
          <p>Xin chào Clothing Shop</p>
          <a className="  text-[30px]" href="#">
            {" "}
            <UserOutlined />{" "}
          </a>
        </div>
      </div>
    </>
  );
}
