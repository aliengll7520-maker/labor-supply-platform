import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./ApplyJob.css";

function ApplyJob() {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [queQuan, setQueQuan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !hoTen.trim() ||
      !soDienThoai.trim() ||
      !queQuan.trim()
    ) {
      return;
    }

    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Backend sau này sẽ:
     *
     * 1. Kiểm tra dữ liệu người lao động.
     * 2. Tạo hoặc cập nhật Người lao động.
     * 3. Tạo Hồ sơ kết nối.
     * 4. Ghi nhận hành động vào Quá trình kết nối.
     * 5. Sau khi tạo Hồ sơ kết nối thành công
     *    mới cho phép mở số điện thoại Nhà cung ứng.
     */
  };

  return (
    <MainLayout>
      <div className="apply-job">

        <h1 className="apply-job-title">
          Tạo Hồ sơ kết nối
        </h1>

        <Card>

          <p>
            Nhập 3 thông tin cơ bản để tạo Hồ sơ kết nối
            với Nhà cung ứng.
          </p>

          <Input
            placeholder="Họ và tên"
            value={hoTen}
            onChange={(event) => setHoTen(event.target.value)}
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
            onClick={handleSubmit}
          />

        </Card>

      </div>
    </MainLayout>
  );
}

export default ApplyJob;
