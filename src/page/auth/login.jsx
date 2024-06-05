import React from "react";
import Header from "../../component/header";
import logo from "../../img/logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import {
  AudioOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Input, Form } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function Login() {
  return (
    <>
      {/* header */}
      <div className="bg-[#F1F1F1] h-[100px] flex items-center  ">
        {/* logo */}
        <div>
          <img className="w-24  h-24 bg-[#F1F1F1] ml-5" src={logo} alt="" />
        </div>
        {/* menu  */}
        <div className="mx-auto flex gap-6">
          <a
            className=" font-serif text-[16px] font-bold text-[#3D4246]"
            href="#"
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
          <a className="text-[30px]" href="">
            <ShoppingCartOutlined />
          </a>
        </div>
      </div>
      {/* login and register  */}
      <div className="flex w-[50%] gap-8 mt-14 ml-[300px]">
        {/* login  */}

        <Form
          className=" text-center"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className="font-semibold">ĐĂNG NHẬP</h1>
          <Form.Item
            className="w-[500px] mt-5 "
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <MailOutlined className="site-form-item-icon text-[16px]" />
              }
              placeholder="Email của bạn"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <LockOutlined className="site-form-item-icon text-[16px]" />
              }
              type="password"
              placeholder="Nhập mật khẩu"
            />
          </Form.Item>
          <div className="flex flex-col">
            <button className="font-semibold w-[500px] border-black border-solid border-[1px]	bg-white hover:bg-black hover:text-white  h-10">
              Đăng nhập{" "}
            </button>
            <a className="text-sm font-semibold mt-5 underline" href="">
              Quên mật khẩu?
            </a>
          </div>
        </Form>

        {/* register  */}
        <Form
          className="text-center"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className="font-semibold">ĐĂNG KÝ THÀNH VIÊN MỚI</h1>
          <Form.Item
            className="w-[500px] mt-5"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <UserOutlined className="site-form-item-icon text-[16px]" />
              }
              placeholder="Họ và tên"
            />
          </Form.Item>
          <Form.Item
            className="w-[500px] mt-5"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <MailOutlined className="site-form-item-icon text-[16px] " />
              }
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            className="w-[500px] mt-5"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <PhoneOutlined className="site-form-item-icon text-[16px]" />
              }
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item
            className="w-[500px] mt-5"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <LockOutlined className="site-form-item-icon text-[16px]" />
              }
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <button className="font-semibold w-[500px] border-black border-solid border-[1px]	bg-white hover:bg-black hover:text-white  h-10">
            Đăng kí
          </button>
        </Form>
      </div>
      {/* hỗ trợ và mua hàng  */}
      <div className="bg-[#F1F1F1] h-[70px] mt-40   flex items-center gap-3 ">
        <div className="text-[20px] ml-5">
          {" "}
          <PhoneOutlined />
        </div>
        <p className="text-[14px]">
          Hỗ trợ / Mua hàng:{" "}
          <span className="text-[14px] text-red-600 font-bold">
            0933 800 190
          </span>
        </p>
      </div>
    </>
  );
}
