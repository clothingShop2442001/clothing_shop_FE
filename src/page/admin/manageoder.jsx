import React from "react";
import HeaderAdmin from "../../component/headerAdmin";
import SideBar from "../../component/sidebarAdmin";
import { Input } from "antd";
import { Table } from "antd";
const columns = [
  {
    title: "ID Đơn hàng",
    dataIndex: "idOrder",
    key: "idUser",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "ID khách hàng",
    dataIndex: "IdUserName",
    key: "IdUserName",
  },
  {
    title: "Nhân viên",
    dataIndex: "staff",
    key: "staff",
  },
  {
    title: "Ngày đặt hàng",
    dataIndex: "OrderDate",
    key: "OrderDate",
  },
  {
    title: "Tổng giá trị",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
  {
    title: "Địa chỉ giao hàng",
    dataIndex: "addressShipping",
    key: "addressShipping",
  },
];
const data = [
  {
    key: "1",
    idOrder: "#45162",
    IdUserName: "45162",
    staff: "Trần Nhật Hoàng",
    OrderDate: "24/7/2001",
    totalPrice: "3000000",
    addressShipping: "Quế Châu, Quế Sơn",
  },
  {
    key: "1",
    idOrder: "#45162",
    IdUserName: "45162",
    staff: "Trần Nhật Hoàng",
    OrderDate: "24/7/2001",
    totalPrice: "3000000",
    addressShipping: "Quế Châu, Quế Sơn",
  },
  {
    key: "1",
    idOrder: "#45162",
    IdUserName: "45162",
    staff: "Trần Nhật Hoàng",
    OrderDate: "24/7/2001",
    totalPrice: "3000000",
    addressShipping: "Quế Châu, Quế Sơn",
  },
  {
    key: "1",
    idOrder: "#45162",
    IdUserName: "45162",
    staff: "Trần Nhật Hoàng",
    OrderDate: "24/7/2001",
    totalPrice: "3000000",
    addressShipping: "Quế Châu, Quế Sơn",
  },
];
export default function ManageOder() {
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
              <Table className="mt-1" columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
