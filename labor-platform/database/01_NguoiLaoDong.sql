/*
==========================================================
01_NguoiLaoDong.sql
Quản lý Người lao động
Labor Supply Platform
Version: 2.0
==========================================================

Người lao động chỉ đăng ký tối thiểu.

Mục tiêu:
- Đăng ký nhanh.
- Dễ tiếp cận việc làm.
- Tạo Hồ sơ kết nối.
- Không thu thập hồ sơ xin việc.

==========================================================
*/

CREATE TABLE nguoi_lao_dong (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_nguoi_lao_dong VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã người lao động',

    ho_ten VARCHAR(255) NOT NULL
        COMMENT 'Họ và tên',

    so_dien_thoai VARCHAR(20) NOT NULL UNIQUE
        COMMENT 'Số điện thoại',

    que_quan VARCHAR(255) NOT NULL
        COMMENT 'Quê quán',

    tong_lan_mo_so INT DEFAULT 0
        COMMENT 'Tổng số lần mở số điện thoại',

    tong_ho_so_ket_noi INT DEFAULT 0
        COMMENT 'Tổng số Hồ sơ kết nối',

    tong_nhan_viec INT DEFAULT 0
        COMMENT 'Tổng số lần nhận việc',

    tong_huy INT DEFAULT 0
        COMMENT 'Tổng số lần hủy',

    lan_hoat_dong_cuoi DATETIME NULL
        COMMENT 'Lần hoạt động gần nhất',

    trang_thai ENUM(

        'hoat_dong',

        'tam_khoa'

    ) DEFAULT 'hoat_dong'
        COMMENT 'Trạng thái',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_so_dien_thoai (so_dien_thoai),

    INDEX idx_trang_thai (trang_thai)

);
