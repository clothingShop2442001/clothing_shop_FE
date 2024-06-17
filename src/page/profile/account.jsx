import React from "react";
import Header from "../../component/header";
import { Space, Table, Tag } from "antd";
import { Button, Modal, Form } from "antd";
import { useState, Input } from "react";
import ModalEditProfile from "../../component/modalEditProfile";
import Footer from "../../component/footer";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const columns = [
  {
    title: "Đơn hàng #",
    dataIndex: "order",
    key: "order",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ngày",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Chuyển đến",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Giá trị đơn hàng",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Tình trạng thanh toán",
    dataIndex: "orderStatus",
    key: "orderStatus",
  },
  {
    title: "Xem chi tiết",
    dataIndex: "Detail",
    key: "Detail",
    render: (text) => <a>{text}</a>,
  },
];
const data = [
  {
    key: "1",
    order: "#45162",
    date: "24/4/2003",
    address: "Đà Nẵng, Vietnam	",
    price: "615.000₫",
    orderStatus: "Chưa thanh toán",
    Detail: "Xem chi tiết",
  },
  {
    key: "2",
    order: "#45162",
    date: "24/4/2003",
    address: "Đà Nẵng, Vietnam	",
    price: "615.000₫",
    orderStatus: "Chưa thanh toán",
    Detail: "Xem chi tiết",
  },
  {
    key: "3",
    order: "#45162",
    date: "24/4/2003",
    address: "Đà Nẵng, Vietnam	",
    price: "615.000₫",
    orderStatus: "Chưa thanh toán",
    Detail: "Xem chi tiết",
  },
];

export default function Account() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      {/* history order and my account  */}
      <div className="flex   mx-auto w-[80%] mt-36">
        {/* history order  */}
        <div className="flex flex-col">
          <h1 className="font-serif font-bold text-[18px]">
            THÔNG TIN TÀI KHOẢN
          </h1>
          <p className="text-[#484871] font-semibold text-[14px] mt-1">
            Xin chào, Trần Nhật Hoàng
          </p>
          <p className="text-[#484871] font-semibold mt-5 text-[14px]">
            Đơn hàng gần nhất
          </p>
          <div>
            {" "}
            <Table className="mt-1" columns={columns} dataSource={data} />
          </div>
        </div>
        {/* my account  */}
        <div className="flex flex-col ml-6">
          <p className="font-serif font-bold text-[18px]">Tài khoản của tôi</p>
          <p className=" text-gray-500 font-semibold mt-1 text-[14px]">
            Tên tài khoản:{" "}
            <span className="font-bold text-black">Trần Nhật Hoàng</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Địa chỉ: <span>Kí túc xá DH FPT</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Thành phố: <span>Đà Nẵng</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Quốc gia: <span>Viet Nam</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Số điện thoại: <span>0987487401</span>
          </p>
          <button
            type="primary"
            onClick={showModal}
            className="py-1  text-gray-500 rounded-md font-semibold mt-4 text-[14px] w-[100px] border-2 border-black"
          >
            Sửa địa chỉ
          </button>

          <Modal
            width={400}
            footer={null}
            open={isModalOpen}
            onOk={onFinish}
            onCancel={handleCancel}
          >
            <h1 className="text-[16px] font-bold mb-5 text-center">
              Chỉnh sửa địa chỉ
            </h1>
            <ModalEditProfile />
            <button
              onClick={handleCancel}
              className="w-[100px] mr-[200px] mb-8 border-2 border-black rounded-md absolute -bottom-5 -right-16 border-2 bg-white text-black font-bold py-2 px-4    "
            >
              Hủy bỏ
            </button>
          </Modal>
        </div>
      </div>
      <div className="mt-36">
        <Footer />
      </div>
    </>
  );
}
