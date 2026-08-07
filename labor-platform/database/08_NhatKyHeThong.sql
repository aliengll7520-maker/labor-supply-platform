/*
==========================================================
08_NhatKyHeThong.sql
Quản lý Nhật ký hệ thống
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE nhat_ky_he_thong (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    doi_tuong ENUM(
        'quan_tri',
        'nha_cung_ung',
        'nguoi_lao_dong',
        'he_thong'
    ) NOT NULL COMMENT 'Đối tượng thực hiện',

    doi_tuong_id BIGINT UNSIGNED NULL COMMENT 'ID đối tượng',

    hanh_dong VARCHAR(255) NOT NULL COMMENT 'Hành động',

    bang_du_lieu VARCHAR(100) DEFAULT NULL COMMENT 'Bảng dữ liệu tác động',

    du_lieu_id BIGINT UNSIGNED NULL COMMENT 'ID dữ liệu',

    dia_chi_ip VARCHAR(45) DEFAULT NULL COMMENT 'Địa chỉ IP',

    thiet_bi VARCHAR(255) DEFAULT NULL COMMENT 'Thông tin thiết bị',

    ghi_chu TEXT DEFAULT NULL COMMENT 'Ghi chú',

    thoi_gian TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_doi_tuong (doi_tuong, doi_tuong_id),

    INDEX idx_bang_du_lieu (bang_du_lieu),

    INDEX idx_thoi_gian (thoi_gian)

);
