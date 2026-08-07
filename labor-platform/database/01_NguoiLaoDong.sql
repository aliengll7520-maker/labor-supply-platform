/*
==========================================================
01_NguoiLaoDong.sql
Quản lý dữ liệu Người lao động
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE nguoi_lao_dong (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ho_ten VARCHAR(255) NOT NULL COMMENT 'Họ và tên',

    so_dien_thoai VARCHAR(20) NOT NULL UNIQUE COMMENT 'Số điện thoại',

    que_quan VARCHAR(255) NOT NULL COMMENT 'Quê quán',

    trang_thai ENUM(
        'hoat_dong',
        'tam_khoa'
    ) DEFAULT 'hoat_dong' COMMENT 'Trạng thái tài khoản',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP

);
