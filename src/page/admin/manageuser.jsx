import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/headerAdmin";
import SideBar from "../../component/sidebarAdmin";
import { Input } from "antd";
import { Table } from "antd";
import axios from "axios";

const columns = [
  {
    title: "ID người dùng",
    dataIndex: "_id",
    key: "idUser",
  },
  {
    title: "Tên đăng nhập",
    dataIndex: "useraaName",
    key: "userName",
  },
  {
    title: "Họ và tên",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "creatDay",
  },
];

export default function ManageUser() {
  const [users, setUsers] = useState([]);

  const fetchUser = () => {
    axios
      .get("http://localhost:3001/users/users")
      .then(({ data }) => setUsers(data.data))
      .catch((error) =>
        console.error("Lỗi khi lấy danh sách sản phẩm:", error)
      );
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
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
            <h1 className="font-semibold ">Danh sách người dùng</h1>
            <hr className="mt-2 border-[1px] border-gray" />

            {/* search area  */}
            <div className="bg-gray-200 w-full  h-[90px] mt-3 flex ">
              <div className="flex mt-3 gap-5 ml-3  justify-start ">
                <div className="">
                  {" "}
                  <p className="mb-1 text-[12px]">Tên đăng nhập</p>
                  <Input className="w-[150px]" placeholder="Tên đăng nhập" />
                </div>{" "}
                <div className="">
                  {" "}
                  <p className="mb-1 text-[12px]">ID người dùng</p>
                  <Input className="w-[150px]" placeholder="ID Người dùng" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Số điện thoại</p>
                  <Input className="w-[150px]" placeholder="Số điện thoại" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Địa chỉ</p>
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
              <Table className="mt-1" columns={columns} dataSource={users} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
