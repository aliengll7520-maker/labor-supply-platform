import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./JobDetail.css";

function JobDetail() {
  const handleViewSupplierPhone = () => {
    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Luồng chính thức:
     *
     * 1. Người lao động xem tin công khai.
     * 2. Số điện thoại Nhà cung ứng bị ẩn.
     * 3. Người lao động yêu cầu xem số.
     * 4. Nếu chưa đăng ký -> chuyển sang đăng ký.
     * 5. Đăng ký đủ 3 trường:
     *    - Họ và tên
     *    - Số điện thoại
     *    - Quê quán
     * 6. Backend tạo Hồ sơ kết nối.
     * 7. Hệ thống mới mở số điện thoại Nhà cung ứng.
     */
  };

  return (
    <MainLayout>
      <div className="job-detail">
        <h1>Chi tiết việc làm</h1>

        <Card>
          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>
            <strong>Nhà cung ứng:</strong> Nhà cung ứng A
          </p>

          <p>
            <strong>Mức lương:</strong> 12.000.000 VNĐ
          </p>

          <p>
            <strong>Khu vực làm việc:</strong> Bắc Ninh
          </p>

          <p>
            <strong>Hình thức làm việc:</strong> Toàn thời gian
          </p>

          <p>
            <strong>Số lượng tuyển:</strong> 100 người
          </p>

          <p>
            <strong>Mô tả công việc:</strong> Tham gia sản xuất và
            lắp ráp linh kiện điện tử theo thông tin tuyển dụng.
          </p>

          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Số điện thoại Nhà cung ứng:</strong>
            </p>

            <p>
              🔒 Số điện thoại được bảo vệ
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Đăng ký 3 thông tin cơ bản để xem số điện thoại
              Nhà cung ứng và tạo Hồ sơ kết nối.
            </p>

            <Button
              text="XEM SỐ ĐIỆN THOẠI"
              onClick={handleViewSupplierPhone}
            />
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default JobDetail;
