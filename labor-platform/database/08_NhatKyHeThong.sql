/*
==========================================================
08_NhatKyHeThong.sql
Nhật ký hoạt động hệ thống
Labor Supply Platform
Version: 2.0
==========================================================

Mục tiêu:

- Không xóa lịch sử.
- Không sửa lịch sử.
- Chỉ ghi nhận.

Mọi hành động đều phải có dấu vết.

==========================================================
*/

CREATE TABLE nhat_ky_he_thong (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_nhat_ky VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã nhật ký',

    doi_tuong ENUM(

        'quan_tri',

        'nha_cung_ung',

        'nguoi_lao_dong',

        'he_thong'

    ) NOT NULL
        COMMENT 'Đối tượng thực hiện',

    doi_tuong_id BIGINT UNSIGNED NULL
        COMMENT 'ID đối tượng',

    ho_so_ket_noi_id BIGINT UNSIGNED NULL
        COMMENT 'Hồ sơ kết nối liên quan',

    bang_du_lieu VARCHAR(100) NULL
        COMMENT 'Bảng dữ liệu',

    hanh_dong VARCHAR(255) NOT NULL
        COMMENT 'Hành động',

    du_lieu_cu JSON NULL
        COMMENT 'Dữ liệu trước',

    du_lieu_moi JSON NULL
        COMMENT 'Dữ liệu sau',

    dia_chi_ip VARCHAR(45) NULL
        COMMENT 'IP',

    thiet_bi VARCHAR(255) NULL
        COMMENT 'Thiết bị',

    ghi_chu TEXT NULL
        COMMENT 'Ghi chú',

    thoi_gian TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_doi_tuong (doi_tuong, doi_tuong_id),

    INDEX idx_ho_so (ho_so_ket_noi_id),

    INDEX idx_bang (bang_du_lieu),

    INDEX idx_thoi_gian (thoi_gian)

);
