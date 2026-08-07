/*
==========================================================
09_CauHinhHeThong.sql
Quản lý Cấu hình hệ thống
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE cau_hinh_he_thong (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nhom VARCHAR(100) NOT NULL COMMENT 'Nhóm cấu hình',

    khoa VARCHAR(150) NOT NULL COMMENT 'Tên cấu hình',

    gia_tri TEXT NULL COMMENT 'Giá trị',

    mo_ta TEXT NULL COMMENT 'Mô tả',

    trang_thai ENUM(
        'bat',
        'tat'
    ) DEFAULT 'bat' COMMENT 'Trạng thái',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE KEY uk_khoa (khoa),

    INDEX idx_nhom (nhom)

);
