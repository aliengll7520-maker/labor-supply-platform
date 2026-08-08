import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./JobDetail.css";

function JobDetail() {
  const [tinTuyenDungId, setTinTuyenDungId] = useState("");
  const [nhaCungUngId, setNhaCungUngId] = useState("");

  useEffect(() => {
    /*
     * Đọc ID từ URL.
     *
     * Ví dụ:
     *
     * #/job-detail?tin_tuyen_dung_id=2
     *
     * Khi Backend hoạt động, nha_cung_ung_id sẽ được
     * lấy từ chính dữ liệu Tin tuyển dụng.
     */

    const hash = window.location.hash;
    const queryIndex = hash.indexOf("?");

    if (queryIndex === -1) {
      return;
    }

    const queryString = hash.substring(queryIndex + 1);
    const params = new URLSearchParams(queryString);

    setTinTuyenDungId(
      params.get("tin_tuyen_dung_id") || ""
    );

    /*
     * Hiện tại dữ liệu mẫu chưa lấy từ Backend.
     *
     * Khi Backend hoạt động:
     *
     * tin_tuyen_dung_id
     *        ↓
     * 03_TinTuyenDung
     *        ↓
     * nha_cung_ung_id
     *
     * Không được cho người dùng tự nhập ID Nhà cung ứng.
     */

    setNhaCungUngId(
      params.get("nha_cung_ung_id") || "1"
    );
  }, []);

  const handleViewSupplierPhone = () => {
    /*
     * Không có Tin tuyển dụng ID thì không tạo
     * Hồ sơ kết nối.
     */

    if (!tinTuyenDungId || !nhaCungUngId) {
      return;
    }

    /*
     * Người lao động không cần đăng nhập.
     *
     * Chỉ khi yêu cầu xem số điện thoại Nhà cung ứng
     * mới đi tới bước đăng ký 3 trường.
     */

    window.location.hash =
      `#/register?tin_tuyen_dung_id=${encodeURIComponent(
        tinTuyenDungId
      )}` +
      `&nha_cung_ung_id=${encodeURIComponent(
        nhaCungUngId
      )}`;
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
