import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import "./JobList.css";

function JobList() {
  const handleViewJob = (jobId) => {
    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Danh sách chính thức sau này sẽ lấy dữ liệu từ:
     * 03_TinTuyenDung.sql
     *
     * Việc xem tin không tạo Hồ sơ kết nối.
     * Hồ sơ kết nối chỉ được tạo khi Người lao động
     * yêu cầu xem số điện thoại Nhà cung ứng.
     */
    console.log("Xem tin tuyển dụng:", jobId);
  };

  return (
    <MainLayout>
      <div className="job-list">

        <h1 className="job-list-title">
          Danh sách việc làm
        </h1>

        <Card>

          <h2>Công nhân lắp ráp điện tử</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <p>
            <strong>Mức lương:</strong>{" "}
            12.000.000 VNĐ
          </p>

          <p>
            <strong>Địa điểm:</strong>{" "}
            Bắc Ninh
          </p>

          <p>
            <strong>Số lượng:</strong>{" "}
            100 người
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

export default JobList;
