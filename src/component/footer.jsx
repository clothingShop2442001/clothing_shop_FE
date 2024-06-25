import React from "react";
import {
  PhoneOutlined,
  AimOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const StoreBranch = ({ city, address }) => (
  <p className="text-[16px] text-[#484848]">
    <span className="font-bold">{city}</span> - {address}
  </p>
);

const SocialIcon = ({ href, icon, label }) => (
  <a className="text-3xl" href={href} aria-label={label}>
    {icon}
  </a>
);

const PolicyLink = ({ href, children }) => (
  <a className="text-[16px] text-[#484848]" href={href}>
    <li>{children}</li>
  </a>
);

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <div className="bg-[#F1F1F1] h-[70px] mt-40 flex items-center gap-3">
        <div className="text-[20px] ml-5">
          <PhoneOutlined />
        </div>
        <p className="text-[14px]">
          Hỗ trợ / Mua hàng:{" "}
          <span className="text-[14px] text-red-600 font-bold">
            0933 800 190
          </span>
        </p>
      </div>

      {/* Footer Content */}
      <div className="flex mt-5 font-sans ml-3 gap-10">
        {/* Store Locations */}
        <div className="flex flex-col">
          <h1 className="text-[#484848] font-bold text-lg">
            Hệ Thống Cửa Hàng
          </h1>
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Hồ Chí Minh
          </h2>
          <StoreBranch
            city="TP. Thủ Đức"
            address="Quận 9 - Tầng 2 TTTM Vincom Mega Mall Vinhomes Grand Park."
          />
          <StoreBranch
            city="Quận 1"
            address="160 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh."
          />
          <StoreBranch city="Quận 10" address="561 Sư Vạn Hạnh, Phường 13." />
          <StoreBranch
            city="Quận 1"
            address="The New Playground 26 Lý Tự Trọng, Phường Bến Nghé."
          />
          <StoreBranch
            city="Quận Gò Vấp"
            address="326 Quang Trung, Phường 10."
          />
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Biên Hòa
          </h2>
          <StoreBranch
            city="TP. Biên Hòa"
            address="151A Phan Trung, Phường Tân Mai."
          />
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Bình Dương
          </h2>
          <StoreBranch
            city="TP. Thủ Dầu Một"
            address="28 Yersin, Phường Hiệp Thành."
          />
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Cần Thơ
          </h2>
          <StoreBranch
            city="Quận Ninh Kiều"
            address="52 Mậu Thân, Phường An Phú."
          />
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Hà Nội
          </h2>
          <StoreBranch
            city="Đống Đa"
            address="151A Phan Trung, Phường Tân Mai."
          />
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Hưng Yên
          </h2>
          <StoreBranch
            city="Văn Giang"
            address="PT.TV 136 - Mega Grand World - Ocean Park"
          />
          <h2 className="text-[#484848] font-bold text-[16px]">
            <AimOutlined /> Chi Nhánh Hải Phòng
          </h2>
          <StoreBranch
            city="Lê Chân"
            address="Tầng 2 TTTM Aeon Mall Hải Phòng Lê Chân số 10 Võ Nguyên Giáp, Phường Kênh"
          />
        </div>

        {/* Social Networks and Policies */}
        <div className="flex flex-col">
          <h1 className="text-[#484848] font-bold text-lg">
            Kết Nối Với Chúng Tôi
          </h1>
          <div className="flex gap-2 ml-5">
            <SocialIcon href="#" icon={<FacebookOutlined />} label="Facebook" />
            <SocialIcon href="#" icon={<YoutubeOutlined />} label="YouTube" />
            <SocialIcon
              href="#"
              icon={<InstagramOutlined />}
              label="Instagram"
            />
          </div>
          <div className="mt-5">
            <h1 className="text-[#484848] font-bold text-lg">Chính Sách</h1>
            <PolicyLink href="#">Chính sách bảo mật</PolicyLink>
            <PolicyLink href="#">FAQ</PolicyLink>
            <PolicyLink href="#">Chính sách Thẻ Thành viên</PolicyLink>
            <PolicyLink href="#">Chính sách Bảo hành & Đổi trả</PolicyLink>
            <PolicyLink href="#">Chính sách giao hàng hỏa tốc</PolicyLink>
          </div>
        </div>
      </div>
    </>
  );
}
