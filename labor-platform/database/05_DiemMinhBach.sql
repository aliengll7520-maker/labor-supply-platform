/*
==========================================================
05_DiemMinhBach.sql
Lịch sử Điểm minh bạch
Labor Supply Platform
Version: 2.0
==========================================================

Điểm minh bạch KHÔNG nhập thủ công.

Điểm được hệ thống tính từ:

- Hồ sơ kết nối
- Quá trình kết nối
- Phản ánh
- Tỷ lệ phản hồi
- Tỷ lệ nhận việc

Bảng này chỉ lưu kết quả tính điểm.

==========================================================
*/

CREATE TABLE diem_minh_bach (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Nhà cung ứng',

    ho_so_ket_noi_id BIGINT UNSIGNED NULL
        COMMENT 'Hồ sơ liên quan (nếu có)',

    diem_truoc DECIMAL(5,2) NOT NULL
        COMMENT 'Điểm trước khi cập nhật',

    diem_thay_doi DECIMAL(5,2) NOT NULL
        COMMENT 'Điểm cộng hoặc trừ',

    diem_sau DECIMAL(5,2) NOT NULL
        COMMENT 'Điểm sau khi cập nhật',

    loai ENUM(

        'cong',

        'tru'

    ) NOT NULL
        COMMENT 'Loại thay đổi',

    ly_do VARCHAR(255) NOT NULL
        COMMENT 'Lý do thay đổi',

    nguon_du_lieu ENUM(

        'ho_so_ket_noi',

        'qua_trinh_ket_noi',

        'phan_anh',

        'he_thong'

    ) NOT NULL
        COMMENT 'Nguồn phát sinh',

    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_ho_so (ho_so_ket_noi_id)

);
