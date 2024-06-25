import React from "react";
import Header from "../../component/header";
import bglistproduct from "../../img/background_listproduct.jpg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { products } from "../../products";
import ProductCart from "../../component/productCart";

import { useEffect, useState } from "react";

import { Pagination } from "antd";
import Footer from "../../component/footer";
import CartTab from "../../component/cartTab";
import axios from "axios";

export default function ListProduct() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products/products").then(({ data }) => {
      setItems(data.data);
    });
  }, []);
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

        <div>
          <div className="w-full flex-wrap gap-5 mt-3 flex justify-start">
            {items.map((product, key) => (
              <ProductCart key={key} data={product} />
            ))}
          </div>
        </div>
        <hr className="mt-3 border-[1px] border-gray " />
        <Pagination
          className="mt-3 text-black text-[16px] text-right mr-3"
          defaultCurrent={1}
          total={50}
        />
      </div>
      {/* view cart  */}
      <div>
        <CartTab />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
