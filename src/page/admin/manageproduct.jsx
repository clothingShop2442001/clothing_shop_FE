import React from "react";
import HeaderAdmin from "../../component/headerAdmin";
import SideBar from "../../component/sidebarAdmin";
import { Input } from "antd";
import { Table } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "S",
    key: "1",
  },
  {
    label: "M",
    key: "2",
  },
  {
    label: "L",
    key: "3",
  },
  {
    label: "XL",
    key: "4",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const columns = [
  {
    title: "ID sản phẩm",
    dataIndex: "idProduct",
    key: "idProduct",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Giá sản phẩm",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Số lượng sản phẩm",
    dataIndex: "unit",
    key: "unit",
  },

  {
    title: "Ngày tạo",
    dataIndex: "creatDay",
    key: "creatDay",
  },
];
const data = [
  {
    key: "1",
    idProduct: "#45162",
    productName: "Áo T-Shirt",
    price: "5.000.000",
    unit: "2",
    creatDay: "24/4/2001",
  },
  {
    key: "1",
    idProduct: "#45162",
    productName: "Áo T-Shirt",
    price: "5.000.000",
    unit: "2",
    creatDay: "24/4/2001",
  },
  {
    key: "1",
    idProduct: "#45162",
    productName: "Áo T-Shirt",
    price: "5.000.000",
    unit: "2",
    creatDay: "24/4/2001",
  },
  {
    key: "1",
    idProduct: "#45162",
    productName: "Áo T-Shirt",
    price: "5.000.000",
    unit: "2",
    creatDay: "24/4/2001",
  },
  {
    key: "1",
    idProduct: "#45162",
    productName: "Áo T-Shirt",
    price: "5.000.000",
    unit: "2",
    creatDay: "24/4/2001",
  },
  {
    key: "1",
    idProduct: "#45162",
    productName: "Áo T-Shirt",
    price: "5.000.000",
    unit: "2",
    creatDay: "24/4/2001",
  },
];
export default function ManageProduct() {
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
            <h1 className="font-semibold ">Danh sách sản phẩm</h1>
            <hr className="mt-2 border-[1px] border-gray" />

            {/* search area  */}
            <div className="bg-gray-200 w-full  h-[90px] mt-3 flex ">
              <div className="flex mt-3 gap-5 ml-3  justify-start ">
                <div className="">
                  {" "}
                  <p className="mb-1 text-[12px]">Tên sản phẩm</p>
                  <Input className="w-[150px]" placeholder="Tên đăng nhập" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Số lượng</p>
                  <Dropdown menu={menuProps}>
                    <Button>
                      <Space className="w-[70px]">
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Giá sản phẩm</p>
                  <Input className="w-[150px]" placeholder="Giá sản phẩm" />
                </div>{" "}
                <div>
                  {" "}
                  <p className="mb-1 text-[12px]">Số lượng hàng tồn</p>
                  <Input
                    className="w-[150px]"
                    placeholder="Số lượng hàng tồn"
                  />
                </div>
                <div className="flex gap-3 ml-[250px] mt-3 ">
                  {" "}
                  <button className="w-[50px] h-[40px] text-[10px] bg-blue-400 rounded-md	">
                    Tìm
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
