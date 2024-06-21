import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function ModalEditProfile() {
  return (
    <>
      <Form
        className="h-[350px] max-w-[600px] "
        layout="Vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên Tài khoản"
          name="userName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên tài khoản",
            },
          ]}
        >
          <Input className="" />
        </Form.Item>{" "}
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập địa chỉ",
            },
          ]}
        >
          <Input />
        </Form.Item>{" "}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email",
            },
          ]}
        >
          <Input />
        </Form.Item>{" "}
        <Form.Item
          label="Số điện thoại"
          name="phonenumber"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <button
          onClick={onFinish}
          type="primary"
          htmlType="submit"
          className="w-[100px] mr-[90px] mb-8 rounded-md absolute -bottom-4 -right-16 bg-black text-white font-bold py-2 px-4  "
        >
          Cập nhập
        </button>
      </Form>
    </>
  );
}
