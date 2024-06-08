import React from "react";
import Header from "../../component/header";
import bglistproduct from "../../img/background_listproduct.jpg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import GamTshirt from "../../img/GamTshirt.jpg";
import Tshirt01 from "../../img/Tshirt01.jpg";
import Tshirt02 from "../../img/Tshirt02.jpg";
import Tshirt03 from "../../img/Tshirt03.jpg";
import Tshirt04 from "../../img/Tshirt04.jpg";
import Tshirt05 from "../../img/Tshirt05.jpg";
import Tshirt06 from "../../img/Tshirt06.jpg";
import Tshirt07 from "../../img/Tshirt07.jpg";

import { useEffect, useState } from "react";

import { Pagination } from "antd";
import Footer from "../../component/footer";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export default function ListProduct() {
  return (
    <>
      <div>
        <Header />
        <img className="w-full" src={bglistproduct} alt="" />
      </div>
      {/* list produc  */}
      <div className="mt-14 w-[80%]  mx-auto">
        {/* filter product  */}
        <div className="flex gap-5 ml-6">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="text-black font-bold text-[18px]">
                Lọc giá
                <p className="text-[10px]">
                  {" "}
                  <DownOutlined />
                </p>
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="text-black font-bold text-[18px]">
                Loại
                <p className="text-[10px]">
                  {" "}
                  <DownOutlined />
                </p>
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="text-black font-bold text-[18px]">
                Kích thước
                <p className="text-[10px]">
                  {" "}
                  <DownOutlined />
                </p>
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="text-black font-bold text-[18px]">
                Màu sắc
                <p className="text-[10px]">
                  {" "}
                  <DownOutlined />
                </p>
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <button className="w-[150px] border-2  border-black">
                <Space className="text-black text-[18px]">
                  Sắp xếp{" "}
                  <p className="text-[10px]">
                    {" "}
                    <DownOutlined />
                  </p>
                </Space>
              </button>
            </a>
          </Dropdown>
        </div>
        <hr className="mt-3 border-[1px] border-black" />
        {/* product  */}
        <div className="w-full flex-wrap gap-7 mt-3 flex justify-start ">
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={GamTshirt} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
              <button className="w-[150px] ml-10 mt-2 text-sm bg-gray-300 rounded-md item- py-1 tex-[#182C42]">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt01} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt02} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt03} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt04} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt05} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt06} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
          <div className="w-[23%] h-[350px] flex flex-col ">
            <a href="">
              <img className="w-full h-[200px]" src={Tshirt07} alt="" />
            </a>
            <div className="mt-10">
              <a href="">
                <p className=" text-sm text-center tex-[#182C42]">
                  DC X GAM GAMTIME T-SHIRT
                </p>
              </a>
              <p className="text-sm text-center  text-black">390.000₫</p>
            </div>
          </div>
        </div>
        <hr className="mt-3 border-[1px] border-gray " />
        <Pagination
          className="mt-3 text-black text-[16px] text-right mr-3"
          defaultCurrent={1}
          total={50}
        />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
