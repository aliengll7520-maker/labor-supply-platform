/*
==========================================================
06_ThongBao.sql
Quản lý Thông báo
Labor Supply Platform
Version: 2.0
==========================================================

Thông báo được sinh tự động từ:

- Hồ sơ kết nối
- Quá trình kết nối
- Điểm minh bạch
- Hệ thống

Không tạo thủ công.

==========================================================
*/

CREATE TABLE thong_bao (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_thong_bao VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã thông báo',

    doi_tuong ENUM(

        'quan_tri',

        'nha_cung_ung',

        'nguoi_lao_dong'

    ) NOT NULL
        COMMENT 'Đối tượng nhận',

    doi_tuong_id BIGINT UNSIGNED NOT NULL
        COMMENT 'ID người nhận',

    ho_so_ket_noi_id BIGINT UNSIGNED NULL
        COMMENT 'Hồ sơ kết nối liên quan',

    tieu_de VARCHAR(255) NOT NULL,

    noi_dung TEXT NOT NULL,

    loai ENUM(

        'ho_so_moi',

        'cap_nhat_trang_thai',

        'diem_minh_bach',

        'phan_anh',

        'he_thong',

        'nhac_viec'

    ) NOT NULL,

    da_doc TINYINT(1) DEFAULT 0
        COMMENT '0 = Chưa đọc, 1 = Đã đọc',

    thoi_gian_doc DATETIME NULL,

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_doi_tuong (doi_tuong, doi_tuong_id),

    INDEX idx_ho_so (ho_so_ket_noi_id),

    INDEX idx_da_doc (da_doc)

);
