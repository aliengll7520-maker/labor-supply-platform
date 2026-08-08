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
    const hash = window.location.hash;
    const queryIndex = hash.indexOf("?");

    if (queryIndex === -1) {
      return;
    }

    const params = new URLSearchParams(
      hash.substring(queryIndex + 1)
    );

    setTinTuyenDungId(
      params.get("tin_tuyen_dung_id") || ""
    );

    setNhaCungUngId(
      params.get("nha_cung_ung_id") || ""
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !hoTen.trim() ||
      !soDienThoai.trim() ||
      !queQuan.trim()
    ) {
      return;
    }

    if (!tinTuyenDungId || !nhaCungUngId) {
      return;
    }

    /*
     * Sau khi Backend được xây:
     *
     * 1. Tạo Người lao động.
     * 2. Tạo Hồ sơ phỏng vấn.
     * 3. Ghi 04_QuaTrinhPhongVan:
     *      dang_ky_ho_so_phong_van
     *      mo_so_dien_thoai
     * 4. Ghi nhật ký hệ thống.
     * 5. Trả về số điện thoại Nhà cung ứng.
     *
     * Hiện tại chuyển sang màn hình kết quả
     * để khóa đúng luồng giao diện.
     */

    window.location.hash =
      `#/interview-profile-result?` +
      `tin_tuyen_dung_id=${encodeURIComponent(
        tinTuyenDungId
      )}` +
      `&nha_cung_ung_id=${encodeURIComponent(
        nhaCungUngId
      )}`;
  };

  const handleBackToJobs = () => {
    window.location.hash = "#/jobs";
  };

  return (
    <div className="register-page">

      <Card>

        <div className="register-header">

          <h1>
            Đăng ký Hồ sơ phỏng vấn
          </h1>

          <p>
            Vui lòng cung cấp 3 thông tin cơ bản
            để đăng ký Hồ sơ phỏng vấn cho vị trí này.
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
            text="ĐĂNG KÝ HỒ SƠ PHỎNG VẤN"
            type="submit"
          />

        </form>

        <div style={{ marginTop: "20px" }}>

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
