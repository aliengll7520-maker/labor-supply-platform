import React from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div style={{ width: "360px" }}>
        <Card>
          <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
            Labor Supply Platform
          </h2>

          <Input placeholder="Tên đăng nhập" />

          <div style={{ height: "16px" }} />

          <Input
            type="password"
            placeholder="Mật khẩu"
          />

          <div style={{ height: "24px" }} />

          <Button text="Đăng nhập" />
        </Card>
      </div>
    </div>
  );
}

export default Login;
