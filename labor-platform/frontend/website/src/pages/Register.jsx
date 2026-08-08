import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "./Register.css";

function Register() {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [queQuan, setQueQuan] = useState("");

  const [tinTuyenDungId, setTinTuyenDungId] = useState("");
  const [nhaCungUngId, setNhaCungUngId] = useState("");

  useEffect(() => {
    /*
     * Lấy thông tin kết nối từ URL.
     *
     * Ví dụ:
     *
     * #/register?tin_tuyen_dung_id=1&nha_cung_ung_id=1
     *
     * Hai ID này KHÔNG phải dữ liệu cá nhân của
     * Người lao động.
     *
     * Chúng dùng để xác định:
     *
     * Người lao động đang muốn kết nối với
     * Tin tuyển dụng nào và Nhà cung ứng nào.
     */

    const hash = window.location.hash;

    const queryIndex = hash.indexOf("?");

    if (queryIndex === -1) {
      return;
    }

    const queryString = hash.substring(queryIndex + 1);
    const params = new URLSearchParams(queryString);

    setTinTuyenDungId(
      params.get("tin_tuyen_dung_id") || ""
    );

    setNhaCungUngId(
      params.get("nha_cung_ung_id") || ""
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
     * Chỉ chấp nhận đúng 3 trường dữ liệu
     * của Người lao động:
     *
     * 1. Họ và tên
     * 2. Số điện thoại
     * 3. Quê quán
     */

    if (
      !hoTen.trim() ||
      !soDienThoai.trim() ||
      !queQuan.trim()
    ) {
      return;
    }

    /*
     * Kiểm tra ngữ cảnh kết nối.
     *
     * Không cho tạo Hồ sơ kết nối nếu không biết
     * Người lao động đang kết nối với tin nào.
     */

    if (!tinTuyenDungId || !nhaCungUngId) {
      return;
    }

    /*
     * Backend sau này sẽ:
     *
     * 1. Tạo hoặc xác định Người lao động.
     * 2. Tạo 00_HoSoKetNoi.
     * 3. Gắn:
     *
     *    nguoi_lao_dong_id
     *    nha_cung_ung_id
     *    tin_tuyen_dung_id
     *
     * 4. Ghi nhận 04_QuaTrinhKetNoi.
     * 5. Ghi nhật ký hệ thống.
     * 6. Cho phép mở số điện thoại Nhà cung ứng.
     *
     * Hiện tại chưa gọi API vì Backend chưa xây.
     */

    console.log({
      hoTen,
      soDienThoai,
      queQuan,
      tinTuyenDungId,
      nhaCungUngId,
    });
  };

  const handleBackToJobs = () => {
    window.location.hash = "#/jobs";
  };

  return (
    <div className="register-page">

      <Card>

        <div className="register-header">

          <h1>
            Đăng ký để xem số điện thoại
          </h1>

          <p>
            Nhập 3 thông tin cơ bản để tạo
            Hồ sơ kết nối với Nhà cung ứng.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <Input
            placeholder="Họ và tên"
            value={hoTen}
            onChange={(event) =>
              setHoTen(event.target.value)
            }
          />

          <div className="space"></div>

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
            placeholder="Quê quán"
            value={queQuan}
            onChange={(event) =>
              setQueQuan(event.target.value)
            }
          />

          <div className="space"></div>

          <Button
            text="TẠO HỒ SƠ KẾT NỐI"
            type="submit"
          />

        </form>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            text="QUAY LẠI XEM TIN"
            onClick={handleBackToJobs}
          />
        </div>

      </Card>

    </div>
  );
}

export default Register;
