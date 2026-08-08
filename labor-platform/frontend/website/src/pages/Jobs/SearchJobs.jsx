import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import "./SearchJobs.css";

function SearchJobs() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Backend sau này sẽ tìm kiếm Tin tuyển dụng
     * từ dữ liệu 03_TinTuyenDung.sql.
     *
     * Tìm kiếm chỉ phục vụ việc tìm công việc.
     * Không tạo Hồ sơ kết nối.
     */
  };

  return (
    <MainLayout>
      <div className="search-jobs">

        <h1>Tìm kiếm việc làm</h1>

        <form onSubmit={handleSearch}>

          <Input
            placeholder="Nhập tên công việc hoặc ngành nghề..."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />

          <div className="space"></div>

          <Button
            text="TÌM KIẾM"
            type="submit"
          />

        </form>

        <div className="space"></div>

        <Card>

          <h3>Công nhân điện tử</h3>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <p>
            <strong>Địa điểm:</strong>{" "}
            Bắc Ninh
          </p>

          <p>
            <strong>Mức lương:</strong>{" "}
            12.000.000 VNĐ
          </p>

          <Button
            text="XEM CHI TIẾT"
          />

        </Card>

      </div>
    </MainLayout>
  );
}

export default SearchJobs;
