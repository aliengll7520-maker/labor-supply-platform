/*
==========================================================
00_HoSoKetNoi.sql
Hồ sơ kết nối giữa Người lao động và Nhà cung ứng
Labor Supply Platform
Version: 2.0
==========================================================

Đây là bảng quan trọng nhất của toàn bộ hệ thống.

Một Hồ sơ kết nối (Connection Case) được tạo ngay khi
Người lao động nhập:

- Họ và tên
- Số điện thoại
- Quê quán

để mở số điện thoại của Nhà cung ứng.

Từ thời điểm đó đến khi kết thúc tuyển dụng,
mọi dữ liệu đều xoay quanh hồ sơ này.
==========================================================
*/

CREATE TABLE ho_so_ket_noi (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_ho_so VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã hồ sơ kết nối',

    nguoi_lao_dong_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Người lao động',

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Nhà cung ứng',

    tin_tuyen_dung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Tin tuyển dụng',

    ho_ten VARCHAR(255) NOT NULL
        COMMENT 'Họ tên tại thời điểm đăng ký',

    so_dien_thoai VARCHAR(20) NOT NULL
        COMMENT 'Số điện thoại người lao động',

    que_quan VARCHAR(255) NOT NULL
        COMMENT 'Quê quán',

    da_mo_so_dien_thoai TINYINT(1) DEFAULT 1
        COMMENT 'Đã mở số điện thoại',

    thoi_gian_mo_so DATETIME NOT NULL
        COMMENT 'Thời gian mở số',

    trang_thai ENUM(

        'moi_tao',

        'da_xem',

        'da_lien_he',

        'da_hen',

        'da_phong_van',

        'da_nhan_viec',

        'khong_phu_hop',

        'da_huy'

    ) DEFAULT 'moi_tao'
        COMMENT 'Trạng thái hồ sơ',

    nha_cung_ung_xac_nhan TINYINT(1) DEFAULT 0
        COMMENT 'Nhà cung ứng xác nhận đã liên hệ',

    nguoi_lao_dong_xac_nhan TINYINT(1) DEFAULT 0
        COMMENT 'Người lao động xác nhận đã được liên hệ',

    ket_qua_doi_chieu ENUM(

        'cho_xac_nhan',

        'khop',

        'khong_khop'

    ) DEFAULT 'cho_xac_nhan'
        COMMENT 'Đối chiếu dữ liệu hai bên',

    ghi_chu TEXT NULL
        COMMENT 'Ghi chú',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_nguoi_lao_dong (nguoi_lao_dong_id),

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_tin_tuyen_dung (tin_tuyen_dung_id),

    INDEX idx_trang_thai (trang_thai),

    INDEX idx_doi_chieu (ket_qua_doi_chieu)

);
