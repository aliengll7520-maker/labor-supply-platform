/*
==========================================================
07_BaoCaoThongKe.sql
Quản lý Báo cáo & Thống kê
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE bao_cao_thong_ke (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nha_cung_ung_id BIGINT UNSIGNED NULL COMMENT 'ID Nhà cung ứng',

    ngay DATE NOT NULL COMMENT 'Ngày thống kê',

    tong_tin_tuyen_dung INT DEFAULT 0 COMMENT 'Tổng tin tuyển dụng',

    tong_luot_xem INT DEFAULT 0 COMMENT 'Tổng lượt xem',

    tong_luot_mo_so INT DEFAULT 0 COMMENT 'Tổng lượt mở số điện thoại',

    tong_ung_tuyen INT DEFAULT 0 COMMENT 'Tổng hồ sơ ứng tuyển',

    tong_da_goi INT DEFAULT 0 COMMENT 'Tổng đã gọi',

    tong_da_hen INT DEFAULT 0 COMMENT 'Tổng đã hẹn',

    tong_phong_van INT DEFAULT 0 COMMENT 'Tổng đã phỏng vấn',

    tong_nhan_viec INT DEFAULT 0 COMMENT 'Tổng đã nhận việc',

    tong_huy INT DEFAULT 0 COMMENT 'Tổng hồ sơ hủy',

    ti_le_phan_hoi DECIMAL(5,2) DEFAULT 0 COMMENT 'Tỷ lệ phản hồi',

    ti_le_nhan_viec DECIMAL(5,2) DEFAULT 0 COMMENT 'Tỷ lệ nhận việc',

    diem_minh_bach DECIMAL(5,2) DEFAULT 0 COMMENT 'Điểm minh bạch',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_ngay (ngay)

);
