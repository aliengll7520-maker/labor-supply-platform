import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import "./Jobs.css";

function Jobs() {
  const handleViewJob = (jobId) => {
    /*
     * Chuyển người lao động tới đúng tin tuyển dụng.
     *
     * Không yêu cầu đăng nhập.
     * Không tạo Hồ sơ kết nối.
     *
     * Hồ sơ kết nối chỉ được tạo khi người lao động
     * yêu cầu xem số điện thoại Nhà cung ứng.
     */

    window.location.hash =
      `#/job-detail?tin_tuyen_dung_id=${jobId}`;
  };

  return (
    <MainLayout>
      <div className="jobs">

        <h1 className="jobs-title">
          Việc làm
        </h1>

        <p>
          Xem các tin tuyển dụng công khai
          từ Nhà cung ứng.
        </p>

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

        <Card>

          <h2>
            Công nhân may
          </h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng B
          </p>

          <p>
            <strong>Mức lương:</strong>{" "}
            11.500.000 VNĐ
          </p>

          <p>
            <strong>Địa điểm:</strong>{" "}
            Hải Phòng
          </p>

          <p>
            <strong>Số lượng:</strong>{" "}
            50 người
          </p>

          <Button
            text="XEM CHI TIẾT"
            onClick={() => handleViewJob(2)}
          />

        </Card>

      </div>
    </MainLayout>
  );
}

export default Jobs;
