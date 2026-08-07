import React from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";

function Login() {
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
            <h2>Đăng nhập</h2>

            <p
              style={{
                color: "#666",
                fontSize: "14px",
              }}
            >
              Nền tảng điều phối cung ứng lao động
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Input
              placeholder="Số điện thoại"
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <Input
              type="password"
              placeholder="Mật khẩu"
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <Checkbox
              label="Ghi nhớ đăng nhập"
            />
          </div>

          <Button
            text="ĐĂNG NHẬP"
          />

          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <a href="#">
              Quên mật khẩu?
            </a>
          </div>

          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Chưa có tài khoản?
          </div>

          <div
            style={{
              marginTop: "12px",
            }}
          >
            <Button
              text="ĐĂNG KÝ"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
