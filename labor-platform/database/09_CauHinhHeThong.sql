/*
==========================================================
09_CauHinhHeThong.sql
Cấu hình hệ thống
Labor Supply Platform
Version: 2.0
==========================================================

Mục tiêu:

Toàn bộ quy tắc vận hành của nền tảng
được điều khiển từ bảng này.

Không sửa code.

Chỉ thay đổi dữ liệu cấu hình.

==========================================================
*/

CREATE TABLE cau_hinh_he_thong (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_cau_hinh VARCHAR(50) UNIQUE NOT NULL
        COMMENT 'Mã cấu hình',

    nhom VARCHAR(100) NOT NULL
        COMMENT 'Nhóm cấu hình',

    ten_cau_hinh VARCHAR(255) NOT NULL
        COMMENT 'Tên cấu hình',

    gia_tri TEXT NULL
        COMMENT 'Giá trị',

    kieu_du_lieu ENUM(

        'string',

        'number',

        'boolean',

        'json'

    ) DEFAULT 'string'
        COMMENT 'Kiểu dữ liệu',

    mo_ta TEXT NULL
        COMMENT 'Mô tả',

    trang_thai ENUM(

        'bat',

        'tat'

    ) DEFAULT 'bat',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_nhom (nhom),

    INDEX idx_trang_thai (trang_thai)

);
