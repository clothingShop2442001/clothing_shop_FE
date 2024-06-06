import {
  AudioOutlined,
  AimOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex  mt-5 font-sans ml-3">
        {/* brand  */}
        <div className="flex  flex-col">
          <h1 className="text-[#484848] font-bold text-lg">
            Hệ Thống Cửa Hàng
          </h1>
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Hồ Chí Minh
          </h2>
          <p className="text-[16p] text-[#484848] text-[#484848]">
            <span className="text-[#484848] font-bold">TP. Thủ Đức</span> - Quận
            9 - Tầng 2 TTTM Vincom Mega Mall Vinhomes Grand Park.
          </p>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Quận 1</span> - 160
            Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh.
          </p>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Quận 10 </span> - 561 Sư
            Vạn Hạnh, Phường 13.
          </p>{" "}
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Quận 1 </span> - The New
            Playground 26 Lý Tự Trọng, Phường Bến Nghé.
          </p>{" "}
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Quận Gò Vấp</span>- 326
            Quang Trung, Phường 10.
          </p>
          <h2 className="text-[#484848] font-bold text-[16p] text-[#484848]">
            <AimOutlined /> Chi Nhánh Biên Hòa:
          </h2>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">TP. Biên Hòa</span> -
            151A Phan Trung, Phường Tân Mai.
          </p>
          <h2 className="text-[#484848] font-bold text-[16p] text-[#484848]">
            <AimOutlined /> Chi Nhánh Bình Dương:
          </h2>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">TP. Thủ Dầu Một </span>-
            28 Yersin, Phường Hiệp Thành.
          </p>
          <h2 className="text-[#484848] font-bold text-[16p] text-[#484848]">
            <AimOutlined /> Chi Nhánh Cần Thơ:
          </h2>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Quận Ninh Kiều</span> -
            52 Mậu Thân, Phường An Phú.
          </p>
          <h2 className="text-[#484848] font-bold text-[16p] text-[#484848]">
            <AimOutlined /> Chi Nhánh Hà Nội:
          </h2>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Đống Đa</span> - 151A
            Phan Trung, Phường Tân Mai.
          </p>
          <h2 className="text-[#484848] font-bold text-[16p] text-[#484848]">
            <AimOutlined /> Chi Nhánh Hưng Yên:
          </h2>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Văn Giang</span> - PT.TV
            136 - Mega Grand World - Ocean Park
          </p>
          <h2 className="text-[#484848] font-bold text-[16p] text-[#484848]">
            <AimOutlined />
            Chi Nhánh Hải Phòng:
          </h2>
          <p className="text-[16p] text-[#484848]">
            <span className="text-[#484848] font-bold">Lê Chân </span> - Tầng 2
            TTTM Aeon Mall Hải Phòng Lê Chân số 10 Võ Nguyên Giáp, Phường Kênh
          </p>
        </div>
        {/* social network  */}
        <div className="flex  flex-col">
          <h1 className="text-[#484848] font-bold text-lg">
            Hệ Thống Cửa Hàng
          </h1>
          <div className="flex gap-2 ml-5">
            <a className="text-3xl" href="">
              <FacebookOutlined />
            </a>
            <a className="text-3xl " href="">
              <YoutubeOutlined />{" "}
            </a>{" "}
            <a className="text-3xl" href="">
              <InstagramOutlined />{" "}
            </a>
          </div>
          <div className="mt-5">
            <h1 className="text-[#484848] font-bold text-lg">Chính Sách </h1>
            <a className="text-[16p] text-[#484848]" href="">
              <li>Chính sách bảo mật</li>
            </a>
            <a className="text-[16p] text-[#484848]" href="">
              <li>FAQ</li>
            </a>
            <a className="text-[16p] text-[#484848]" href="">
              <li>Chính sách Thẻ Thành viên</li>
            </a>
            <a className="text-[16p] text-[#484848]" href="">
              <li>Chính sách Bảo hành & Đổi trả</li>
            </a>
            <a className="text-[16p] text-[#484848]" href="">
              <li>Chính sách giao hàng hỏa tốc</li>
            </a>
          </div>
        </div>
        {/* fanpage  */}
      </div>
    </>
  );
}
