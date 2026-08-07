/*
==========================================================
03_TinTuyenDung.sql
Quản lý dữ liệu Tin tuyển dụng
Labor Supply Platform
Version: 1.0
==========================================================
*/

CREATE TABLE tin_tuyen_dung (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL COMMENT 'ID Nhà cung ứng',

    tieu_de VARCHAR(255) NOT NULL COMMENT 'Tiêu đề tuyển dụng',

    nganh_nghe VARCHAR(255) NOT NULL COMMENT 'Ngành nghề',

    so_luong INT DEFAULT 1 COMMENT 'Số lượng tuyển',

    dia_diem TEXT NOT NULL COMMENT 'Địa điểm làm việc',

    google_maps TEXT NOT NULL COMMENT 'Google Maps',

    luong_co_ban DECIMAL(12,2) DEFAULT 0,

    chuyen_can DECIMAL(12,2) DEFAULT 0,

    nha_o DECIMAL(12,2) DEFAULT 0,

    xang_xe DECIMAL(12,2) DEFAULT 0,

    hieu_suat DECIMAL(12,2) DEFAULT 0,

    phu_cap_khac DECIMAL(12,2) DEFAULT 0,

    thuong TEXT,

    ho_tro TEXT,

    tang_ca TEXT,

    chinh_sach_luong TEXT,

    hop_dong TEXT,

    bao_hiem TEXT,

    che_do_khac TEXT,

    dieu_kien_tuyen_dung TEXT,

    mo_ta_cong_viec LONGTEXT,

    trang_thai ENUM(
        'dang_tuyen',
        'tam_dung',
        'het_han',
        'da_dong'
    ) DEFAULT 'dang_tuyen',

    luot_xem INT DEFAULT 0,

    luot_mo_so_dien_thoai INT DEFAULT 0,

    luot_ung_tuyen INT DEFAULT 0,

    luot_nhan_viec INT DEFAULT 0,

    diem_minh_bach DECIMAL(5,2) DEFAULT 0,

    ngay_dang DATETIME,

    ngay_het_han DATETIME,

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_trang_thai (trang_thai)

);
