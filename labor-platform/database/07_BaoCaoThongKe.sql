/*
==========================================================
07_BaoCaoThongKe.sql
Quản lý Báo cáo & Thống kê
Labor Supply Platform
Version: 2.0
==========================================================

Bảng này dùng để lưu dữ liệu báo cáo đã tổng hợp.

Nguồn dữ liệu lấy từ:

00_HoSoKetNoi
01_NguoiLaoDong
02_NhaCungUng
03_TinTuyenDung
04_QuaTrinhKetNoi
05_DiemMinhBach

Không nhập dữ liệu thủ công.

==========================================================
*/

CREATE TABLE bao_cao_thong_ke (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    loai_bao_cao ENUM(

        'he_thong',

        'nha_cung_ung',

        'nguoi_lao_dong',

        'tin_tuyen_dung'

    ) NOT NULL
        COMMENT 'Loại báo cáo',

    doi_tuong_id BIGINT UNSIGNED NULL
        COMMENT 'ID đối tượng',

    tu_ngay DATE NOT NULL,

    den_ngay DATE NOT NULL,

    tong_ho_so_ket_noi INT DEFAULT 0,

    tong_lien_he INT DEFAULT 0,

    tong_hen INT DEFAULT 0,

    tong_nhan_viec INT DEFAULT 0,

    tong_huy INT DEFAULT 0,

    tong_phan_anh INT DEFAULT 0,

    diem_minh_bach DECIMAL(5,2) DEFAULT 0,

    du_lieu JSON NULL
        COMMENT 'Dữ liệu mở rộng',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_loai (loai_bao_cao),

    INDEX idx_doi_tuong (doi_tuong_id)

);
