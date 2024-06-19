import React, { useEffect } from "react";
import Header from "../../component/header";
import logo from "../../img/logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, message } from "antd";
import Footer from "../../component/footer";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role === "Admin") {
        navigate("/manageuser");
      } else if (parsedUser.role === "User") {
        navigate("/listproduct");
      }
    }
  }, [navigate]);

  const handleLogin = (values) => {
    axios
      .post("http://localhost:3001/users/signin", values)
      .then((response) => {
        const { role, ...userData } = response.data.data;
        // Save user data in local storage
        localStorage.setItem("user", JSON.stringify(userData));

        if (role === "Admin") {
          navigate("/manageuser");
        } else if (role === "User") {
          navigate("/listproduct");
        }
      })
      .catch((error) => {
        message.error("Bạn đã nhập sai email hoặc mật khẩu, vui lòng nhập lại");
      });
  };

  const handleRegister = (values) => {
    axios
      .post("http://localhost:3001/users", values)
      .then((response) => {
        message.success("Đã tạo tài khoản thành công");
      })
      .catch((error) => {
        message.error("Thêm người dùng thất bại");
      });
  };

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
          onFinish={handleLogin}
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
          onFinish={handleRegister}
          autoComplete="off"
        >
          <h1 className="font-semibold">ĐĂNG KÝ THÀNH VIÊN MỚI</h1>
          <Form.Item
            className="w-[500px] mt-5"
            name="userName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên tài khoản",
              },
            ]}
          >
            <Input
              className="py-2"
              prefix={
                <UserOutlined className="site-form-item-icon text-[16px]" />
              }
              placeholder="Tên tài khoản"
            />
          </Form.Item>
          <Form.Item
            className="w-[500px] mt-5"
            name="fullname"
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
            name="phoneNumber"
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
          <Form.Item
            className="w-[500px] mt-5"
            name="confirmpassword"
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
              placeholder="Mật khẩu xác nhận"
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

export default Login;
