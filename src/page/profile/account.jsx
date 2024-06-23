import React, { useState, useEffect } from "react";
import Header from "../../component/header";
import { Table, Modal, Input, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer";
import CartTab from "../../component/cartTab";
// import ModalEditProfile from "../../component/modalEditProfile"; // Ensure this component is correctly imported
import axios, { Axios } from "axios";

const columns = [
  {
    title: "ID Đơn hàng",
    dataIndex: "_id",
    key: "idUser",
  },
  {
    title: "Tên người dùng",
    dataIndex: "userName",
    key: "IdUserName",
  },

  {
    title: "Địa chỉ giao hàng",
    dataIndex: "addres",
    key: "OrderDate",
  },
  {
    title: "Tổng giá trị",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
];

const data = [
  {
    key: "1",
    order: "#45162",
    date: "24/4/2003",
    address: "Đà Nẵng, Vietnam",
    price: "615.000₫",
    orderStatus: "Chưa thanh toán",
    Detail: "Xem chi tiết",
  },
  {
    key: "2",
    order: "#45162",
    date: "24/4/2003",
    address: "Đà Nẵng, Vietnam",
    price: "615.000₫",
    orderStatus: "Chưa thanh toán",
    Detail: "Xem chi tiết",
  },
  {
    key: "3",
    order: "#45162",
    date: "24/4/2003",
    address: "Đà Nẵng, Vietnam",
    price: "615.000₫",
    orderStatus: "Chưa thanh toán",
    Detail: "Xem chi tiết",
  },
];

export default function Account() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [editInfo, setEditInfo] = useState();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
      setEditInfo(JSON.parse(storedUser));
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleUpdateProfile = () => {
    const payload = {
      fullname: editInfo.fullName,
      address: editInfo.address,
      email: editInfo.email,
      phoneNumber: editInfo.phoneNumber,
    };

    console.log("🚀 ~ handleUpdateProfile ~ editInfo:", editInfo);
    axios
      .put(`http://localhost:3001/users/${editInfo.userId}`, payload)
      .then((data) => {
        message.success("Bạn đã cập nhập thành công");
      });
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(editInfo));
    setUserInfo(editInfo);
    handleCancel();
  };
  const fetchOrders = () => {
    axios
      .get("http://localhost:3001/orders/orders")
      .then(({ data }) => setOrders(data.data))
      .catch((error) =>
        console.error("Lỗi khi lấy danh sách sản phẩm:", error)
      );
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrderId = (orderID) => {
    axios.get(`http://localhost:3001/orders/${orderID}`).then((response) => {
      fetchOrders();
    });
  };

  const handleFormChange = (changedValues) => {
    setEditInfo({ ...editInfo, ...changedValues });
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      {/* history order and my account  */}
      <div className="flex mx-auto w-[80%] mt-36">
        {/* history order  */}
        <div className="flex flex-col">
          <h1 className="font-serif font-bold text-[18px]">
            THÔNG TIN TÀI KHOẢN
          </h1>
          <p className="text-[#484871] font-semibold text-[14px] mt-1">
            Xin chào, {userInfo.fullName}
          </p>
          <p className="text-[#484871] font-semibold mt-5 text-[14px]">
            Đơn hàng gần nhất
          </p>
          <div>
            <Table className="mt-1" columns={columns} dataSource={orders} />
          </div>
        </div>
        {/* my account  */}
        <div className="flex flex-col ml-6">
          <p className="font-serif font-bold text-[18px]">Tài khoản của tôi</p>
          <p className=" text-gray-500 font-semibold mt-1 text-[14px]">
            Tên tài khoản:{" "}
            <span className="font-bold text-black">{userInfo.fullName}</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Địa chỉ: <span>{userInfo.addres}</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Email: <span>{userInfo.email}</span>
          </p>
          <p className="text-gray-500 font-semibold mt-1 text-[14px]">
            Số điện thoại: <span>{userInfo.phoneNumber}</span>
          </p>
          <div className="flex gap-6 mt-10">
            <button
              type="primary"
              onClick={showModal}
              className="py-1 text-gray-500 rounded-md font-semibold text-[14px] w-[100px] border-2 border-black"
            >
              Sửa thông tin
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-400 text-white rounded-md font-semibold text-[14px] w-[100px] border-2 border-black py-1"
            >
              Đăng xuất
            </button>
          </div>

          <Modal
            className="relative"
            width={400}
            footer={null}
            open={isModalOpen}
            onCancel={handleCancel}
          >
            <h1 className="text-[16px] font-bold mb-5 text-center">
              Chỉnh sửa thông tin tài khoản
            </h1>
            <Form
              layout="vertical"
              initialValues={editInfo}
              onValuesChange={(_, allValues) => handleFormChange(allValues)}
              onFinish={handleUpdateProfile}
            >
              <Form.Item
                label="Tên tài khoản"
                name="fullName"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input />
              </Form.Item>
              <div className="flex  justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md border-2   border-blue font-semibold text-[14px] w-[100px] py-1"
                >
                  Cập nhật
                </button>
              </div>
            </Form>
            <button
              onClick={handleCancel}
              className="w-[100px] text-[14px] font-semibold absolute bottom-[17px] border-2 border-black rounded-md bg-white text-black font-bold py-[3.5px]"
            >
              Hủy bỏ
            </button>
          </Modal>
        </div>
        <CartTab />
      </div>
      <div className="mt-36">
        <Footer />
      </div>
    </>
  );
}
