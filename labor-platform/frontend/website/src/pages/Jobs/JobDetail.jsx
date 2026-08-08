import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./JobDetail.css";

function JobDetail() {
  /*
   * ID tạm thời của tin tuyển dụng và Nhà cung ứng.
   *
   * Khi Backend hoạt động, hai giá trị này sẽ được
   * lấy trực tiếp từ dữ liệu Tin tuyển dụng.
   */
  const tinTuyenDungId = 1;
  const nhaCungUngId = 1;

  const handleViewSupplierPhone = () => {
    /*
     * Người lao động KHÔNG cần đăng nhập để thực hiện
     * hành động này.
     *
     * Hệ thống đưa người lao động tới màn hình đăng ký
     * 3 trường:
     *
     * - Họ và tên
     * - Số điện thoại
     * - Quê quán
     *
     * Đồng thời truyền ID của:
     *
     * - Tin tuyển dụng
     * - Nhà cung ứng
     *
     * để sau này Backend có thể tạo đúng
     * Hồ sơ kết nối.
     */

    window.location.hash =
      `#/register?tin_tuyen_dung_id=${tinTuyenDungId}` +
      `&nha_cung_ung_id=${nhaCungUngId}`;
  };

  return (
    <MainLayout>
      <div className="job-detail">

        <h1 className="job-detail-title">
          Chi tiết việc làm
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
            <strong>Số lượng tuyển:</strong>{" "}
            100 người
          </p>

          <p>
            <strong>Mô tả công việc:</strong>{" "}
            Tham gia sản xuất và lắp ráp linh kiện
            theo nội dung tuyển dụng.
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
              Đăng ký 3 thông tin cơ bản để tạo
              Hồ sơ kết nối và xem số điện thoại
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
