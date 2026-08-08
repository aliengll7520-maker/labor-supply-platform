/*
==========================================================
04_QuaTrinhKetNoi.sql
QUÁ TRÌNH KẾT NỐI
Labor Supply Platform
Version: 3.0
==========================================================

Mục đích:

Lưu toàn bộ LỊCH SỬ của một Hồ sơ kết nối.

Không lưu lại hồ sơ Người lao động.
Không lưu lại hồ sơ Nhà cung ứng.
Không lưu lại Tin tuyển dụng.

Thông tin chính nằm ở:

00_HoSoKetNoi

Bảng 04 chỉ trả lời:

- Hồ sơ được tạo khi nào?
- Ai thực hiện hành động?
- Hành động gì?
- Hành động xảy ra lúc nào?
- Có ghi chú/đối chiếu gì?

==========================================================

LUỒNG CHÍNH:

Người lao động xem tin
        ↓
Yêu cầu xem SĐT
        ↓
tao_ho_so
        ↓
Hồ sơ được ghi nhận
        ↓
mo_so_dien_thoai
        ↓
da_xem
        ↓
da_lien_he
        ↓
da_hen
        ↓
da_phong_van
        ↓
da_nhan_viec

Các trường hợp khác:

khong_lien_he_duoc
khong_phu_hop
da_huy
dong_ho_so

==========================================================
*/

CREATE TABLE qua_trinh_ket_noi (

    /*
     * ID lịch sử.
     */

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    /*
     * Hồ sơ kết nối mà lịch sử này thuộc về.
     *
     * Tham chiếu logic tới:
     *
     * 00_HoSoKetNoi.id
     *
     * Chưa khai báo FOREIGN KEY ở giai đoạn này
     * để đồng bộ với kiến trúc Database hiện tại.
     */

    ho_so_ket_noi_id BIGINT UNSIGNED NOT NULL
        COMMENT 'ID Hồ sơ kết nối',

    /*
     * AI THỰC HIỆN HÀNH ĐỘNG
     */

    nguoi_thuc_hien ENUM(

        'quan_tri',

        'nha_cung_ung',

        'nguoi_lao_dong',

        'he_thong'

    ) NOT NULL
        COMMENT 'Chủ thể thực hiện hành động',

    /*
     * ID của người thực hiện.
     *
     * Có thể NULL khi hệ thống tự động ghi nhận.
     */

    nguoi_thuc_hien_id BIGINT UNSIGNED NULL
        COMMENT 'ID người thực hiện, NULL nếu hệ thống',

    /*
     * HÀNH ĐỘNG
     *
     * tao_ho_so:
     * Hồ sơ kết nối vừa được tạo.
     *
     * mo_so_dien_thoai:
     * Hệ thống ghi nhận quyền xem SĐT đã được cấp.
     *
     * da_xem:
     * Người lao động đã xem thông tin liên hệ.
     *
     * da_lien_he:
     * Đã ghi nhận việc liên hệ.
     *
     * khong_lien_he_duoc:
     * Không liên hệ được.
     *
     * da_hen:
     * Đã có lịch hẹn.
     *
     * da_phong_van:
     * Đã phỏng vấn.
     *
     * da_nhan_viec:
     * Người lao động đã nhận việc.
     *
     * khong_phu_hop:
     * Kết nối không phù hợp.
     *
     * da_huy:
     * Kết nối bị hủy.
     *
     * nguoi_lao_dong_xac_nhan:
     * Người lao động xác nhận thông tin kết nối.
     *
     * nha_cung_ung_xac_nhan:
     * Nhà cung ứng xác nhận thông tin kết nối.
     *
     * phan_anh:
     * Có phản ánh liên quan đến kết nối.
     *
     * dong_ho_so:
     * Hồ sơ kết nối được đóng.
     */

    hanh_dong ENUM(

        'tao_ho_so',

        'mo_so_dien_thoai',

        'da_xem',

        'da_lien_he',

        'khong_lien_he_duoc',

        'da_hen',

        'da_phong_van',

        'da_nhan_viec',

        'khong_phu_hop',

        'da_huy',

        'nguoi_lao_dong_xac_nhan',

        'nha_cung_ung_xac_nhan',

        'phan_anh',

        'dong_ho_so'

    ) NOT NULL
        COMMENT 'Hành động trong quá trình kết nối',

    /*
     * GHI CHÚ
     *
     * Dùng cho:
     * - quản trị
     * - xác minh
     * - đối chiếu
     * - phản ánh
     */

    ghi_chu TEXT NULL
        COMMENT 'Ghi chú của hành động',

    /*
     * THỜI GIAN THỰC TẾ
     */

    thoi_gian DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        COMMENT 'Thời điểm hành động xảy ra',

    /*
     * INDEX
     */

    INDEX idx_ho_so (
        ho_so_ket_noi_id
    ),

    INDEX idx_nguoi_thuc_hien (
        nguoi_thuc_hien,
        nguoi_thuc_hien_id
    ),

    INDEX idx_hanh_dong (
        hanh_dong
    ),

    INDEX idx_thoi_gian (
        thoi_gian
    ),

    INDEX idx_ho_so_thoi_gian (
        ho_so_ket_noi_id,
        thoi_gian
    )

);
