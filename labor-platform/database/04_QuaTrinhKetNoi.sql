/*
==========================================================
04_QuaTrinhKetNoi.sql
Quản lý Quá trình kết nối
Labor Supply Platform
Version: 2.0
==========================================================

Mỗi Hồ sơ kết nối sẽ có nhiều bước xử lý.

Đây là bảng Timeline.

Không lưu hồ sơ.

Không lưu thống kê.

Chỉ lưu lịch sử xử lý.

==========================================================
*/

CREATE TABLE qua_trinh_ket_noi (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ho_so_ket_noi_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Hồ sơ kết nối',

    nguoi_thuc_hien ENUM(

        'quan_tri',

        'nha_cung_ung',

        'nguoi_lao_dong',

        'he_thong'

    ) NOT NULL
        COMMENT 'Ai thực hiện',

    nguoi_thuc_hien_id BIGINT UNSIGNED NULL
        COMMENT 'ID người thực hiện',

    hanh_dong ENUM(

        'mo_so_dien_thoai',

        'da_xem',

        'da_lien_he',

        'khong_lien_he_duoc',

        'da_hen',

        'da_phong_van',

        'da_nhan_viec',

        'khong_phu_hop',

        'da_huy',

        'nguoi_lao_dong_xac_nhan',

        'phan_anh',

        'dong_ho_so'

    ) NOT NULL
        COMMENT 'Hành động',

    ghi_chu TEXT NULL
        COMMENT 'Ghi chú',

    thoi_gian DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        COMMENT 'Thời gian',

    INDEX idx_ho_so (ho_so_ket_noi_id),

    INDEX idx_hanh_dong (hanh_dong),

    INDEX idx_thoi_gian (thoi_gian)

);
