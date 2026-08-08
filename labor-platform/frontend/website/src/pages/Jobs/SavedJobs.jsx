import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./SavedJobs.css";

function SavedJobs() {
  const handleViewJob = (jobId) => {
    /*
     * Xem lại tin tuyển dụng.
     *
     * Lưu tin không tạo Hồ sơ kết nối.
     * Người lao động vẫn có thể xem tin mà
     * không cần đăng nhập.
     */
    window.location.hash = "#/job-detail";
  };

  const handleRemoveSavedJob = (jobId) => {
    /*
     * Sau này Backend sẽ xóa tin khỏi danh sách
     * đã lưu của Người lao động.
     *
     * Việc bỏ lưu không ảnh hưởng đến:
     * - Người lao động
     * - Nhà cung ứng
     * - Hồ sơ kết nối
     * - Quá trình kết nối
     */
    console.log("Bỏ lưu tin:", jobId);
  };

  return (
    <MainLayout>
      <div className="saved-jobs">

        <h1 className="saved-jobs-title">
          Tin tuyển dụng đã lưu
        </h1>

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

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <Button
              text="XEM CHI TIẾT"
              onClick={() => handleViewJob(1)}
            />

            <div className="space"></div>

            <Button
              text="BỎ LƯU"
              onClick={() => handleRemoveSavedJob(1)}
            />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default SavedJobs;
