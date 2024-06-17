import React from "react";
import Header from "../../component/header";
import logo from "../../img/logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Footer from "../../component/footer";

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
      <div>
        <Header />
      </div>
      {/* login and register  */}
      <div className="flex w-[80%] gap-8 mt-40 mx-auto">
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
            <a className="text-[16px] font-semibold mt-5 underline" href="">
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

      {/* footer  */}
      <div>
        <Footer />
      </div>
    </>
  );
}
