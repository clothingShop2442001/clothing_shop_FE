import React, { useEffect, useState, useRef } from "react";
import {
  Input,
  Table,
  Button,
  Modal,
  Dropdown,
  message,
  Form,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import axios from "axios";
import HeaderAdmin from "../../component/headerAdmin";
import SideBar from "../../component/sidebarAdmin";

const items = [
  { label: "S", key: "1" },
  { label: "M", key: "2" },
  { label: "L", key: "3" },
  { label: "XL", key: "4" },
];
const menuProps = { items };

export default function ManageProduct() {
  // handle get all product
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios
      .get("http://localhost:3001/products/products")
      .then(({ data }) => setProducts(data.data))
      .catch((error) =>
        console.error("Lỗi khi lấy danh sách sản phẩm:", error)
      );
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // handle add product
  const [isAddModalOpen, setIsAddModalOpen] = useState();
  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };
  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };
  const handleAddProductSubmit = (values) => {
    axios
      .post("http://localhost:3001/products", values)
      .then((response) => {
        message.success("Tạo sản phẩm thành công!");
        fetchProducts();
        handleAddModalClose();
      })
      .catch((error) => {
        console.error("Lỗi khi tạo sản phẩm:", error);
        message.error("Tạo sản phẩm thất bại!");
      });
  };
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // Sản phẩm hiện tại để chỉnh sửa
  // Mở modal để chỉnh sửa sản phẩm
  const handleEditModalOpen = (product) => {
    setCurrentProduct(product); // Đặt sản phẩm hiện tại để chỉnh sửa
    setIsEditModalOpen(true);

    // Đặt giá trị của form trong modal chỉnh sửa
    if (editFormRef.current) {
      editFormRef.current.setFieldsValue(product);
    }
  };

  // Đóng modal chỉnh sửa sản phẩm
  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };
  const editFormRef = useRef(null); // Tham chiếu tới form trong modal chỉnh sửa
  const handleEditProductSubmit = (values) => {
    axios
      .put(`http://localhost:3001/products/${currentProduct._id}`, values)
      .then((response) => {
        message.success("Cập nhật sản phẩm thành công!");
        fetchProducts();
        handleEditModalClose();
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
        message.error("Cập nhật sản phẩm thất bại!");
      });
  };

  const handleFormFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleMenuClick = (e) => {
    message.info(`Click vào item menu: ${e.key}`);
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3001/products/${productId}`)
      .then((response) => {
        message.success("Xóa sản phẩm thành công!");
        fetchProducts();
      });
  };

  const columns = [
    { title: "ID sản phẩm", dataIndex: "_id", key: "idProduct" },
    { title: "Tên sản phẩm", dataIndex: "name", key: "productName" },
    { title: "Giá sản phẩm", dataIndex: "price", key: "price" },
    { title: "Mô tả", dataIndex: "description", key: "description" },
    { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Thao tác",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEditModalOpen(record)}>
            Sửa
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteProduct(record._id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <HeaderAdmin />
      </div>
      <div className="flex">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="w-[80%]">
          <div className="w-[95%] mt-3 mx-auto">
            <h1 className="font-semibold">Danh sách sản phẩm</h1>
            <div className="mt-5">
              <Button
                onClick={handleAddModalOpen}
                className="bg-blue-500 py-2 px-2 border-2 border-black text-black text-[12px]"
              >
                Thêm sản phẩm
              </Button>
              <Modal
                title="Tạo sản phẩm"
                open={isAddModalOpen}
                onCancel={handleAddModalClose}
                footer={null}
              >
                <Form
                  layout="Vertical"
                  onFinish={handleAddProductSubmit}
                  onFinishFailed={handleFormFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập tên sản phẩm" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Giá tiền"
                    name="price"
                    rules={[
                      { required: true, message: "Vui lòng nhập giá tiền" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Hình ảnh"
                    name="image"
                    rules={[{ required: true, message: "Vui lòng up ảnh" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
                  >
                    <Input />
                  </Form.Item>
                  <div className="mt-16 ml-20">
                    <Button
                      onClick={handleAddModalClose}
                      className="w-[150px] mb-8 rounded-md bg-black text-white font-bold py-2 px-4"
                    >
                      Hủy
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-[150px] ml-6 mb-8 rounded-md bg-blue-500 text-black font-bold py-2 px-4"
                    >
                      Tạo sản phẩm
                    </Button>
                  </div>
                </Form>
              </Modal>

              <Modal
                title="Chỉnh sửa sản phẩm"
                open={isEditModalOpen}
                onCancel={handleEditModalClose}
                footer={null}
              >
                <Form
                  ref={editFormRef} // Gán tham chiếu cho form chỉnh sửa
                  layout="Vertical"
                  initialValues={currentProduct || {}} // Đặt giá trị ban đầu từ sản phẩm hiện tại hoặc rỗng
                  onFinish={handleEditProductSubmit}
                  onFinishFailed={handleFormFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập tên sản phẩm" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Giá tiền"
                    name="price"
                    rules={[
                      { required: true, message: "Vui lòng nhập giá tiền" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Hình ảnh"
                    name="image"
                    rules={[{ required: true, message: "Vui lòng up ảnh" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
                  >
                    <Input />
                  </Form.Item>
                  <div className="mt-16 ml-20">
                    <Button
                      onClick={handleEditModalClose}
                      className="w-[150px] mb-8 rounded-md bg-black text-white font-bold py-2 px-4"
                    >
                      Hủy
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-[150px] ml-6 mb-8 rounded-md bg-blue-500 text-black font-bold py-2 px-4"
                    >
                      Cập nhật sản phẩm
                    </Button>
                  </div>
                </Form>
              </Modal>
            </div>
            <hr className="mt-2 border-[1px] border-gray" />
            <div className="bg-gray-200 w-full h-[90px] mt-3 flex">
              <div className="flex mt-3 gap-5 ml-3 justify-start">
                <div>
                  <p className="mb-1 text-[12px]">Tên sản phẩm</p>
                  <Input className="w-[150px]" placeholder="Tên sản phẩm" />
                </div>
                <div>
                  <p className="mb-1 text-[12px]">Số lượng</p>
                  <Dropdown menu={menuProps}>
                    <Button>
                      <Space className="w-[70px]">
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </div>
                <div>
                  <p className="mb-1 text-[12px]">Giá sản phẩm</p>
                  <Input className="w-[150px]" placeholder="Giá sản phẩm" />
                </div>
                <div>
                  <p className="mb-1 text-[12px]">Số lượng hàng tồn</p>
                  <Input
                    className="w-[150px]"
                    placeholder="Số lượng hàng tồn"
                  />
                </div>
                <div className="flex gap-3 ml-[250px] mt-3">
                  <button className="w-[50px] h-[40px] text-[10px] bg-blue-400 rounded-md">
                    Tìm
                  </button>
                  <button className="w-[50px] h-[40px] text-[10px] bg-red-400 border-radius rounded-md">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Table className="mt-1" columns={columns} dataSource={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
