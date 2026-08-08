/*
==========================================================
02_NhaCungUng.sql
QUẢN LÝ NHÀ CUNG ỨNG
Labor Supply Platform
Version: 3.0
==========================================================

NGUYÊN TẮC:

Nhà cung ứng là nguồn cung việc làm của nền tảng.

Nhà cung ứng phải:

- Có hồ sơ quản lý.
- Có thông tin liên hệ.
- Được xác minh.
- Có trạng thái hoạt động.
- Có lịch sử tuyển dụng.
- Có dữ liệu kết nối với Người lao động.
- Có điểm minh bạch.

ĐẶC BIỆT:

Số điện thoại Nhà cung ứng KHÔNG phải dữ liệu công khai.

Số điện thoại được lưu trong hệ thống để:

1. Quản trị kiểm soát.
2. Nhà cung ứng sử dụng để liên hệ.
3. Chỉ cấp quyền xem cho Người lao động
   sau khi Hồ sơ kết nối được tạo và xác nhận.

KHÔNG hiển thị trực tiếp số điện thoại trong
tin tuyển dụng công khai.

==========================================================
*/

CREATE TABLE nha_cung_ung (

    /*
     * ==================================================
     * NHẬN DIỆN
     * ==================================================
     */

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_nha_cung_ung VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã Nhà cung ứng',

    ten_nha_cung_ung VARCHAR(255) NOT NULL
        COMMENT 'Tên Nhà cung ứng',

    nguoi_dai_dien VARCHAR(255) NOT NULL
        COMMENT 'Người đại diện',

    /*
     * ==================================================
     * THÔNG TIN LIÊN HỆ
     * ==================================================
     *
     * Số điện thoại được lưu nhưng không công khai.
     */

    so_dien_thoai VARCHAR(20) NOT NULL
        COMMENT 'Số điện thoại Nhà cung ứng - dữ liệu riêng tư',

    so_dien_thoai_da_xac_minh TINYINT(1) NOT NULL DEFAULT 0
        COMMENT '0 = chưa xác minh, 1 = đã xác minh',

    email VARCHAR(255) DEFAULT NULL
        COMMENT 'Email Nhà cung ứng',

    dia_chi TEXT DEFAULT NULL
        COMMENT 'Địa chỉ Nhà cung ứng',

    google_maps TEXT DEFAULT NULL
        COMMENT 'Vị trí Google Maps',

    /*
     * ==================================================
     * THÔNG TIN CÔNG KHAI
     * ==================================================
     */

    logo VARCHAR(255) DEFAULT NULL,

    gioi_thieu TEXT DEFAULT NULL
        COMMENT 'Thông tin giới thiệu công khai',

    /*
     * ==================================================
     * HỒ SƠ PHÁP LÝ / XÁC MINH
     * ==================================================
     */

    giay_phep VARCHAR(255) DEFAULT NULL
        COMMENT 'Thông tin giấy phép hoặc tài liệu xác minh',

    xac_minh ENUM(

        'chua_xac_minh',

        'dang_xac_minh',

        'da_xac_minh',

        'can_xac_minh_lai'

    ) NOT NULL DEFAULT 'chua_xac_minh'
        COMMENT 'Trạng thái xác minh Nhà cung ứng',

    ngay_xac_minh DATETIME NULL
        COMMENT 'Thời điểm xác minh',

    /*
     * ==================================================
     * MINH BẠCH
     * ==================================================
     */

    diem_minh_bach DECIMAL(5,2) NOT NULL DEFAULT 100.00
        COMMENT 'Điểm minh bạch',

    /*
     * ==================================================
     * CHỈ SỐ HOẠT ĐỘNG
     * ==================================================
     *
     * Các số liệu này phục vụ Dashboard quản trị.
     *
     * Có thể được cập nhật từ dữ liệu thực tế sau này.
     */

    tong_tin_tuyen_dung INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số tin tuyển dụng',

    tong_ho_so_ket_noi INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số Hồ sơ kết nối',

    tong_lien_he INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số lần liên hệ',

    tong_hen INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số lịch hẹn',

    tong_nhan_viec INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số Người lao động nhận việc',

    tong_khong_phu_hop INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số kết nối không phù hợp',

    tong_huy INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số kết nối bị hủy',

    tong_phan_anh INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Tổng số phản ánh',

    /*
     * ==================================================
     * CHỈ SỐ PHẢN HỒI
     * ==================================================
     */

    ti_le_phan_hoi DECIMAL(5,2) NOT NULL DEFAULT 0
        COMMENT 'Tỷ lệ phản hồi',

    ti_le_nhan_viec DECIMAL(5,2) NOT NULL DEFAULT 0
        COMMENT 'Tỷ lệ nhận việc',

    thoi_gian_phan_hoi_trung_binh INT UNSIGNED NOT NULL DEFAULT 0
        COMMENT 'Thời gian phản hồi trung bình - phút',

    /*
     * ==================================================
     * TRẠNG THÁI NHÀ CUNG ỨNG
     * ==================================================
     */

    trang_thai ENUM(

        'cho_duyet',

        'hoat_dong',

        'tam_khoa',

        'ngung_hoat_dong'

    ) NOT NULL DEFAULT 'cho_duyet'
        COMMENT 'Trạng thái hoạt động',

    /*
     * ==================================================
     * QUẢN TRỊ
     * ==================================================
     */

    ghi_chu_quan_tri TEXT NULL
        COMMENT 'Ghi chú nội bộ của quản trị',

    ngay_tao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    /*
     * ==================================================
     * INDEX
     * ==================================================
     */

    INDEX idx_trang_thai (
        trang_thai
    ),

    INDEX idx_xac_minh (
        xac_minh
    ),

    INDEX idx_diem_minh_bach (
        diem_minh_bach
    ),

    INDEX idx_so_dien_thoai (
        so_dien_thoai
    ),

    INDEX idx_so_dien_thoai_xac_minh (
        so_dien_thoai_da_xac_minh
    )

);
