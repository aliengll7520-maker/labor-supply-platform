/*
==========================================================
06_ThongBao.sql
Quản lý Thông báo
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE thong_bao (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nguoi_nhan ENUM(
        'quan_tri',
        'nha_cung_ung',
        'nguoi_lao_dong'
    ) NOT NULL COMMENT 'Đối tượng nhận thông báo',

    nguoi_nhan_id BIGINT UNSIGNED NOT NULL COMMENT 'ID người nhận',

    tieu_de VARCHAR(255) NOT NULL COMMENT 'Tiêu đề',

    noi_dung TEXT NOT NULL COMMENT 'Nội dung',

    loai ENUM(
        'he_thong',
        'ung_tuyen',
        'tin_tuyen_dung',
        'diem_minh_bach',
        'phan_anh',
        'nhac_nho'
    ) DEFAULT 'he_thong' COMMENT 'Loại thông báo',

    da_doc TINYINT(1) DEFAULT 0 COMMENT '0 = Chưa đọc, 1 = Đã đọc',

    ngay_doc DATETIME NULL COMMENT 'Thời gian đọc',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_nguoi_nhan (nguoi_nhan, nguoi_nhan_id),

    INDEX idx_da_doc (da_doc)

);
