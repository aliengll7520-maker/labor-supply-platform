/*
==========================================================
02_NhaCungUng.sql
Quản lý dữ liệu Nhà cung ứng
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE nha_cung_ung (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ten_nha_cung_ung VARCHAR(255) NOT NULL COMMENT 'Tên Nhà cung ứng',

    nguoi_dai_dien VARCHAR(255) NOT NULL COMMENT 'Người đại diện',

    so_dien_thoai VARCHAR(20) NOT NULL COMMENT 'Số điện thoại (ẩn với người lao động)',

    email VARCHAR(255) DEFAULT NULL COMMENT 'Email',

    logo VARCHAR(255) DEFAULT NULL COMMENT 'Logo',

    dia_chi TEXT DEFAULT NULL COMMENT 'Địa chỉ',

    google_maps TEXT DEFAULT NULL COMMENT 'Google Maps',

    gioi_thieu TEXT DEFAULT NULL COMMENT 'Giới thiệu',

    giay_phep VARCHAR(255) DEFAULT NULL COMMENT 'Giấy phép (nếu có)',

    diem_minh_bach DECIMAL(5,2) DEFAULT 0 COMMENT 'Điểm minh bạch',

    tong_tin_tuyen_dung INT DEFAULT 0 COMMENT 'Tổng số tin tuyển dụng',

    tong_nguoi_nhan_viec INT DEFAULT 0 COMMENT 'Tổng số lao động đã nhận việc',

    thoi_gian_phan_hoi_trung_binh INT DEFAULT 0 COMMENT 'Thời gian phản hồi (phút)',

    trang_thai ENUM(
        'cho_duyet',
        'hoat_dong',
        'tam_khoa'
    ) DEFAULT 'cho_duyet' COMMENT 'Trạng thái',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP

);
