/*
==========================================================
HỒ SƠ PHỎNG VẤN
==========================================================

Hồ sơ được tạo khi Người lao động đăng ký
Hồ sơ phỏng vấn cho một Tin tuyển dụng.

Ngay khi đăng ký hợp lệ:

1. Hồ sơ được tạo.
2. Quyền xem số điện thoại Nhà cung ứng được cấp.
3. Thời điểm mở số được ghi nhận.
4. Quá trình được ghi vào 04_QuaTrinhPhongVan.
==========================================================
*/

CREATE TABLE ho_so_phong_van (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_ho_so VARCHAR(30) UNIQUE NOT NULL,

    nguoi_lao_dong_id BIGINT UNSIGNED NOT NULL,

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL,

    tin_tuyen_dung_id BIGINT UNSIGNED NOT NULL,

    ho_ten VARCHAR(255) NOT NULL,

    so_dien_thoai VARCHAR(20) NOT NULL,

    que_quan VARCHAR(255) NOT NULL,

    /*
     * ĐĂNG KÝ THÀNH CÔNG = ĐƯỢC XEM SỐ
     */

    da_mo_so_dien_thoai TINYINT(1) NOT NULL DEFAULT 1
        COMMENT 'Đăng ký thành công thì được xem số',

    thoi_gian_mo_so DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        COMMENT 'Thời điểm đăng ký và được cấp quyền xem số',

    trang_thai ENUM(

        'da_mo_so',

        'da_xem',

        'da_lien_he',

        'da_hen',

        'da_phong_van',

        'da_nhan_viec',

        'khong_phu_hop',

        'da_huy'

    ) NOT NULL DEFAULT 'da_mo_so',

    nha_cung_ung_xac_nhan TINYINT(1) NOT NULL DEFAULT 0,

    nguoi_lao_dong_xac_nhan TINYINT(1) NOT NULL DEFAULT 0,

    ket_qua_doi_chieu ENUM(

        'cho_xac_nhan',

        'khop',

        'khong_khop'

    ) NOT NULL DEFAULT 'cho_xac_nhan',

    ghi_chu TEXT NULL,

    ngay_tao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    ngay_cap_nhat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_nguoi_lao_dong (
        nguoi_lao_dong_id
    ),

    INDEX idx_nha_cung_ung (
        nha_cung_ung_id
    ),

    INDEX idx_tin_tuyen_dung (
        tin_tuyen_dung_id
    ),

    INDEX idx_trang_thai (
        trang_thai
    ),

    INDEX idx_doi_chieu (
        ket_qua_doi_chieu
    ),

    INDEX idx_phong_van_chinh (
        nguoi_lao_dong_id,
        nha_cung_ung_id,
        tin_tuyen_dung_id
    )

);
