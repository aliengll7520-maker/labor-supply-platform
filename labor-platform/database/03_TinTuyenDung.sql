/*
==========================================================
03_TinTuyenDung.sql
Quản lý Tin tuyển dụng
Labor Supply Platform
Version: 2.0
==========================================================

Tin tuyển dụng chỉ có nhiệm vụ:

- Hiển thị cho Người lao động.
- Tạo Hồ sơ kết nối.
- Không lưu dữ liệu thống kê.

==========================================================
*/

CREATE TABLE tin_tuyen_dung (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_tin VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã tin tuyển dụng',

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Nhà cung ứng',

    tieu_de VARCHAR(255) NOT NULL
        COMMENT 'Tên công việc',

    nganh_nghe VARCHAR(255) NOT NULL
        COMMENT 'Ngành nghề',

    so_luong INT DEFAULT 1
        COMMENT 'Số lượng tuyển',

    dia_diem TEXT NOT NULL
        COMMENT 'Địa điểm làm việc',

    google_maps TEXT NOT NULL
        COMMENT 'Google Maps',

    luong_co_ban DECIMAL(12,2) DEFAULT 0,

    chuyen_can DECIMAL(12,2) DEFAULT 0,

    nha_o DECIMAL(12,2) DEFAULT 0,

    xang_xe DECIMAL(12,2) DEFAULT 0,

    hieu_suat DECIMAL(12,2) DEFAULT 0,

    phu_cap_khac DECIMAL(12,2) DEFAULT 0,

    thuong TEXT,

    ho_tro TEXT,

    tang_ca TEXT,

    chinh_sach_tra_luong TEXT,

    hop_dong TEXT,

    bao_hiem TEXT,

    che_do_khac TEXT,

    dieu_kien_tuyen_dung TEXT,

    mo_ta_cong_viec LONGTEXT,

    hinh_anh TEXT,

    video TEXT,

    trang_thai ENUM(

        'cho_duyet',

        'dang_tuyen',

        'tam_dung',

        'het_han',

        'da_dong'

    ) DEFAULT 'cho_duyet',

    ngay_dang DATETIME,

    ngay_het_han DATETIME,

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_trang_thai (trang_thai)

);
