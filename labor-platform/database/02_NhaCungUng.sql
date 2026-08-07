/*
==========================================================
02_NhaCungUng.sql
Quản lý Nhà cung ứng
Labor Supply Platform
Version: 2.0
==========================================================

Nhà cung ứng là trung tâm hoạt động tuyển dụng.

Quản trị theo dõi:
- Hiệu quả tuyển dụng
- Điểm minh bạch
- Chất lượng xử lý hồ sơ
- Lịch sử hoạt động

==========================================================
*/

CREATE TABLE nha_cung_ung (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_nha_cung_ung VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã Nhà cung ứng',

    ten_nha_cung_ung VARCHAR(255) NOT NULL
        COMMENT 'Tên Nhà cung ứng',

    nguoi_dai_dien VARCHAR(255) NOT NULL
        COMMENT 'Người đại diện',

    so_dien_thoai VARCHAR(20) NOT NULL
        COMMENT 'Số điện thoại (mặc định ẩn)',

    email VARCHAR(255) DEFAULT NULL,

    logo VARCHAR(255) DEFAULT NULL,

    dia_chi TEXT DEFAULT NULL,

    google_maps TEXT DEFAULT NULL,

    gioi_thieu TEXT DEFAULT NULL,

    giay_phep VARCHAR(255) DEFAULT NULL,

    diem_minh_bach DECIMAL(5,2) DEFAULT 100.00
        COMMENT 'Điểm minh bạch',

    tong_tin_tuyen_dung INT DEFAULT 0,

    tong_ho_so_ket_noi INT DEFAULT 0,

    tong_lien_he INT DEFAULT 0,

    tong_hen INT DEFAULT 0,

    tong_nhan_viec INT DEFAULT 0,

    tong_khong_phu_hop INT DEFAULT 0,

    tong_huy INT DEFAULT 0,

    tong_phan_anh INT DEFAULT 0,

    ti_le_phan_hoi DECIMAL(5,2) DEFAULT 0,

    ti_le_nhan_viec DECIMAL(5,2) DEFAULT 0,

    thoi_gian_phan_hoi_trung_binh INT DEFAULT 0
        COMMENT 'Phút',

    xac_minh ENUM(

        'chua_xac_minh',

        'da_xac_minh'

    ) DEFAULT 'chua_xac_minh'
        COMMENT 'Trạng thái xác minh',

    trang_thai ENUM(

        'cho_duyet',

        'hoat_dong',

        'tam_khoa'

    ) DEFAULT 'cho_duyet',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_trang_thai (trang_thai),

    INDEX idx_xac_minh (xac_minh),

    INDEX idx_diem_minh_bach (diem_minh_bach)

);
