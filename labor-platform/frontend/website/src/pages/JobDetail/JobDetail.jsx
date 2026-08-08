import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
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
     * 3. Người lao động chọn xem số điện thoại.
     * 4. Nếu chưa có Hồ sơ kết nối -> đăng ký 3 trường.
     * 5. Backend tạo Hồ sơ kết nối.
     * 6. Sau khi tạo thành công -> mở số điện thoại.
     */
  };

  return (
    <MainLayout>
      <div className="job-detail">

        <h1 className="job-detail-title">
          Chi tiết việc làm
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
            <strong>Ngành nghề:</strong>{" "}
            Sản xuất
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

          <p>
            <strong>Thời gian làm việc:</strong>{" "}
            Theo ca
          </p>

          <p>
            <strong>Mô tả công việc:</strong>{" "}
            Lắp ráp linh kiện điện tử theo dây chuyền
            sản xuất.
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
              <strong>
                Số điện thoại Nhà cung ứng
              </strong>
            </p>

            <p>
              🔒 Số điện thoại đang được bảo vệ
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Bạn cần đăng ký 3 thông tin cơ bản
              để tạo Hồ sơ kết nối và xem số điện thoại
              Nhà cung ứng.
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
