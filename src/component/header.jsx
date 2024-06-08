import React from "react";
import {
  AudioOutlined,
  AimOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Input, Form } from "antd";
import logo from "../img/logo.png";
import { Dropdown, Space } from "antd";
const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Search } = Input;
export default function Header() {
  return (
    <>
      <div className="bg-[#F1F1F1] h-[100px] flex items-center  ">
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
          <a className="text-[30px]" href="#">
            {" "}
            <UserOutlined />{" "}
          </a>
          <div className="relative">
            <a className="text-[33px]" href="">
              <ShoppingCartOutlined />
            </a>
            <span className="absolute text-[12px] font-bold top-[13px] right-[10px] text-red-500">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
