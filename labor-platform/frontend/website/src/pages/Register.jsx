import React, { useState } from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";

function Register() {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [queQuan, setQueQuan] = useState("");
  const [dongY, setDongY] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!hoTen.trim() || !soDienThoai.trim() || !queQuan.trim()) {
      return;
    }

    if (!dongY) {
      return;
    }

    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Backend sau này sẽ:
     * 1. Tạo Người lao động.
     * 2. Tạo Hồ sơ kết nối.
     * 3. Sau khi thành công mới cho phép mở
     *    số điện thoại Nhà cung ứng.
     */
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <Card>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              <h2>Đăng ký</h2>

              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                Đăng ký để tiếp tục kết nối với Nhà cung ứng
              </p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <Input
                placeholder="Họ và tên"
                value={hoTen}
                onChange={(event) => setHoTen(event.target.value)}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <Input
                type="tel"
                placeholder="Số điện thoại"
                value={soDienThoai}
                onChange={(event) => setSoDienThoai(event.target.value)}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <Input
                placeholder="Quê quán"
                value={queQuan}
                onChange={(event) => setQueQuan(event.target.value)}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Checkbox
                label="Tôi đồng ý với điều khoản sử dụng"
                checked={dongY}
                onChange={(event) => setDongY(event.target.checked)}
              />
            </div>

            <Button text="ĐĂNG KÝ" type="submit" />
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Register;
