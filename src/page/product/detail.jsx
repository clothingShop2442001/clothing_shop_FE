import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products";
export default function Detail() {
  const { slug } = useParams;
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = products.filter((product) => products.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  });
  return (
    <>
      <div>
        <h2 className="text-3xl text-center">CHI TIẾT SẢN PHẨM</h2>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <img className="w-full" src={detail.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
