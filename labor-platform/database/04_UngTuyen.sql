/*
==========================================================
04_UngTuyen.sql
Quản lý dữ liệu Ứng tuyển
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE ung_tuyen (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ket_noi_id BIGINT UNSIGNED NOT NULL COMMENT 'ID kết nối dữ liệu',

    nguoi_lao_dong_id BIGINT UNSIGNED NOT NULL COMMENT 'ID Người lao động',

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL COMMENT 'ID Nhà cung ứng',

    tin_tuyen_dung_id BIGINT UNSIGNED NOT NULL COMMENT 'ID Tin tuyển dụng',

    trang_thai ENUM(
        'moi_dang_ky',
        'da_xem',
        'da_goi',
        'da_hen',
        'da_phong_van',
        'da_nhan_viec',
        'khong_phu_hop',
        'da_huy'
    ) DEFAULT 'moi_dang_ky' COMMENT 'Trạng thái hồ sơ',

    ghi_chu TEXT NULL COMMENT 'Ghi chú nội bộ',

    ngay_dang_ky DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày đăng ký',

    ngay_cap_nhat DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',

    INDEX idx_nguoi_lao_dong (nguoi_lao_dong_id),

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_tin_tuyen_dung (tin_tuyen_dung_id),

    INDEX idx_trang_thai (trang_thai)

);
