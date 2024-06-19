import React from "react";
import HeaderAdmin from "../../component/headerAdmin";
import SideBar from "../../component/sidebarAdmin";
import { Button, Input, Modal, message } from "antd";
import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageOder() {
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
      dataIndex: "address",
      key: "OrderDate",
    },
    {
      title: "Tổng giá trị",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },

    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <Button
          type="link"
          danger
          onClick={() => handleDeleteOrder(record._id)}
        >
          Xóa
        </Button>
      ),
    },
  ];
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios
      .get("http://localhost:3001/users/users")
      .then(({ data }) => setOrders(data.data))
      .catch((error) =>
        console.error("Lỗi khi lấy danh sách sản phẩm:", error)
      );
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDeleteOrder = (orderID) => {
    Modal.confirm({
      title: "Bạn có muốn xóa đơn hàng này",
      centered: true,
      onOk: () => {
        axios
          .delete(`http://localhost:3001/orders/${orderID}`)
          .then((response) => {
            message.success("xóa đơn hàng thành công");
            fetchOrders();
          })
          .catch((erro) => {
            message.error("Xóa người dùng thất bại!");
          });
      },
    });
  };

  return (
    <>
      {/* header admin  */}
      <div>
        <HeaderAdmin />
      </div>
      <div className="flex">
        {/* sidebar  */}
        <div className="w-[20%]">
          <SideBar />
        </div>
        {/* table manage  */}
        <div className="w-[80%]">
          <div className="w-[95%] mt-3 mx-auto">
            <h1 className="font-semibold ">Danh sách đơn hàng</h1>
            <hr className="mt-2 border-[1px] border-gray" />

            {/* search area  */}
            <div className="bg-gray-200 w-full  h-[90px] mt-3 flex ">
              <div className="flex mt-3 gap-5 ml-3  justify-start ">
                <div className="">
                  {" "}
                  <p className="mb-1 text-[12px]">Tên đơn hàng</p>
                  <Input className="w-[150px]" placeholder="Tên đăng nhập" />
                </div>{" "}
                <div className="">
                  {" "}
                  <p className="mb-1 text-[12px]">ID người dùng</p>
                  <Input className="w-[150px]" placeholder="ID Người dùng" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Địa chỉ đơn hàng</p>
                  <Input className="w-[150px]" placeholder="Số điện thoại" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Ngày đặt hàng</p>
                  <Input className="w-[150px]" placeholder="Địa chỉ" />
                </div>{" "}
                <div className="flex gap-3 ml-[250px] mt-3 ">
                  {" "}
                  <button className="w-[50px] h-[40px] text-[10px] bg-blue-400 rounded-md	">
                    Tìm kiếm
                  </button>
                  <button className="w-[50px] h-[40px]  text-[10px] bg-red-400 border-radius rounded-md	">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
            {/* table  */}
            <div className="mt-3">
              <Table className="mt-1" columns={columns} dataSource={orders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
