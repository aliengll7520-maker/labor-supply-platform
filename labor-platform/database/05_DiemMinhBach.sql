/*
==========================================================
05_DiemMinhBach.sql
Quản lý Điểm minh bạch
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE diem_minh_bach (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL COMMENT 'ID Nhà cung ứng',

    tin_tuyen_dung_id BIGINT UNSIGNED NULL COMMENT 'ID Tin tuyển dụng',

    diem_hien_tai DECIMAL(5,2) DEFAULT 0 COMMENT 'Điểm hiện tại',

    diem_cong DECIMAL(5,2) DEFAULT 0 COMMENT 'Điểm cộng',

    diem_tru DECIMAL(5,2) DEFAULT 0 COMMENT 'Điểm trừ',

    ly_do TEXT NULL COMMENT 'Lý do thay đổi điểm',

    tong_luot_xem INT DEFAULT 0,

    tong_luot_mo_so INT DEFAULT 0,

    tong_ung_tuyen INT DEFAULT 0,

    tong_da_goi INT DEFAULT 0,

    tong_da_hen INT DEFAULT 0,

    tong_nhan_viec INT DEFAULT 0,

    tong_huy INT DEFAULT 0,

    ti_le_phan_hoi DECIMAL(5,2) DEFAULT 0,

    ti_le_nhan_viec DECIMAL(5,2) DEFAULT 0,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_nha_cung_ung (nha_cung_ung_id)

);
