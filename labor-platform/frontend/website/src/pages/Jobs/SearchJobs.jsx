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
     * Tìm kiếm tin tuyển dụng là chức năng công khai.
     *
     * Người lao động:
     * - Không cần đăng nhập.
     * - Không cần đăng ký.
     * - Không tạo Hồ sơ kết nối khi tìm kiếm.
     *
     * Backend sau này sẽ tìm trong:
     * 03_TinTuyenDung
     */
  };

  const handleViewJob = (jobId) => {
    /*
     * Xem chi tiết tin tuyển dụng.
     *
     * Chưa tạo Hồ sơ kết nối.
     */
    window.location.hash = "#/job-detail";
  };

  return (
    <MainLayout>
      <div className="search-jobs">

        <h1>
          Tìm kiếm việc làm
        </h1>

        <p>
          Tìm công việc phù hợp mà không cần đăng nhập.
        </p>

        <form onSubmit={handleSearch}>

          <Input
            placeholder="Nhập tên công việc hoặc ngành nghề..."
            value={keyword}
            onChange={(event) =>
              setKeyword(event.target.value)
            }
          />

          <div className="space"></div>

          <Button
            text="TÌM KIẾM"
            type="submit"
          />

        </form>

        <div className="space"></div>

        <Card>

          <h2>
            Công nhân điện tử
          </h2>

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
            onClick={() => handleViewJob(1)}
          />

        </Card>

      </div>
    </MainLayout>
  );
}

export default SearchJobs;
