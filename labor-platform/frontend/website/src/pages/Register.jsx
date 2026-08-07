import React from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";

function Register() {
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
              Tạo tài khoản mới
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Input placeholder="Họ và tên" />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Input placeholder="Số điện thoại" />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Input
              type="password"
              placeholder="Mật khẩu"
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Input
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <Checkbox label="Tôi đồng ý với điều khoản sử dụng" />
          </div>

          <Button text="ĐĂNG KÝ" />

        </Card>
      </div>
    </div>
  );
}

export default Register;
