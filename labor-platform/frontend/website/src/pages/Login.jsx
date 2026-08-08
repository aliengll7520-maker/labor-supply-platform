import React, { useState } from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "./Login.css";

function Login() {
  const [soDienThoai, setSoDienThoai] = useState("");
  const [matKhau, setMatKhau] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!soDienThoai.trim() || !matKhau.trim()) {
      return;
    }

    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Backend sau này sẽ xác thực tài khoản.
     *
     * Lưu ý:
     * - Số điện thoại + mật khẩu = thông tin xác thực.
     * - Không dùng Họ tên + Số điện thoại + Quê quán
     *   làm thông tin đăng nhập.
     *
     * 3 trường của Người lao động chỉ phục vụ:
     * tạo Người lao động và Hồ sơ kết nối.
     */
  };

  const handleRegister = () => {
    /*
     * Sau khi hệ thống route được kết nối hoàn chỉnh,
     * nút này sẽ chuyển tới Register.jsx.
     */
  };

  return (
    <div className="login-page">

      <Card>

        <div className="login-header">
          <h1>Đăng nhập</h1>

          <p>
            Đăng nhập vào nền tảng
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <Input
            type="tel"
            placeholder="Số điện thoại"
            value={soDienThoai}
            onChange={(event) =>
              setSoDienThoai(event.target.value)
            }
          />

          <div className="space"></div>

          <Input
            type="password"
            placeholder="Mật khẩu"
            value={matKhau}
            onChange={(event) =>
              setMatKhau(event.target.value)
            }
          />

          <div className="space"></div>

          <Button
            text="ĐĂNG NHẬP"
            type="submit"
          />

        </form>

        <div className="login-register">

          <p>
            Chưa có tài khoản?
          </p>

          <Button
            text="ĐĂNG KÝ"
            onClick={handleRegister}
          />

        </div>

      </Card>

    </div>
  );
}

export default Login;
