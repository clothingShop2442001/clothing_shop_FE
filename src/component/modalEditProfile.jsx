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
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
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
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên tài khoản",
            },
          ]}
        >
          <Input />
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
          label="Thành phố"
          name="city"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập thành phố",
            },
          ]}
        >
          <Input />
        </Form.Item>{" "}
        <Form.Item
          label="Quốc Gia"
          name="Nation"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập quốc gia",
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
        <Button
          type="primary"
          htmlType="submit"
          className="w-[150px] mr-[90px] rounded-md absolute -bottom-4 -right-16 bg-black text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3"
        >
          Tạo bài học
        </Button>
      </Form>
    </>
  );
}
