/*
==========================================================
00_HoSoKetNoi.sql
HỒ SƠ KẾT NỐI
Labor Supply Platform
Version: 3.0
==========================================================

Đây là bảng xương sống của hệ thống.

Hồ sơ kết nối được tạo khi:

Người lao động
    ↓
Xem tin tuyển dụng công khai
    ↓
Yêu cầu xem số điện thoại Nhà cung ứng
    ↓
Đăng ký 3 trường:
- Họ và tên
- Số điện thoại
- Quê quán
    ↓
Tạo Hồ sơ kết nối
    ↓
Ghi nhận quyền mở số điện thoại Nhà cung ứng

NGUYÊN TẮC:

1. Không bắt Người lao động đăng nhập để xem tin.
2. Không tạo Hồ sơ kết nối khi chỉ xem tin.
3. Chỉ tạo Hồ sơ kết nối khi Người lao động yêu cầu
   xem số điện thoại Nhà cung ứng.
4. Hồ sơ phải xác định được:
   - Người lao động nào
   - Nhà cung ứng nào
   - Tin tuyển dụng nào
5. Quản trị có thể theo dõi toàn bộ quá trình kết nối.
6. Việc mở số điện thoại phải được ghi nhận bằng
   trạng thái và thời gian.
==========================================================
*/

CREATE TABLE ho_so_ket_noi (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_ho_so VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã Hồ sơ kết nối',

    nguoi_lao_dong_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Người lao động',

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Nhà cung ứng',

    tin_tuyen_dung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'Tin tuyển dụng',

    /*
     * Lưu bản chụp dữ liệu tại thời điểm kết nối.
     *
     * Không phụ thuộc hoàn toàn vào hồ sơ Người lao động
     * sau này có thay đổi.
     */

    ho_ten VARCHAR(255) NOT NULL
        COMMENT 'Họ tên tại thời điểm tạo Hồ sơ kết nối',

    so_dien_thoai VARCHAR(20) NOT NULL
        COMMENT 'Số điện thoại tại thời điểm tạo Hồ sơ kết nối',

    que_quan VARCHAR(255) NOT NULL
        COMMENT 'Quê quán tại thời điểm tạo Hồ sơ kết nối',

    /*
     * QUYỀN MỞ SỐ ĐIỆN THOẠI NHÀ CUNG ỨNG
     *
     * Mặc định chưa mở.
     *
     * Backend chỉ chuyển thành 1 sau khi:
     *
     * - Dữ liệu 3 trường hợp lệ
     * - Hồ sơ kết nối được tạo thành công
     * - Hệ thống xác nhận quyền xem số
     */

    da_mo_so_dien_thoai TINYINT(1) NOT NULL DEFAULT 0
        COMMENT '0 = chưa mở, 1 = đã mở số điện thoại',

    thoi_gian_mo_so DATETIME NULL
        COMMENT 'Thời điểm được cấp quyền xem số điện thoại',

    /*
     * QUÁ TRÌNH KẾT NỐI
     */

    trang_thai ENUM(

        'moi_tao',

        'da_mo_so',

        'da_xem',

        'da_lien_he',

        'da_hen',

        'da_phong_van',

        'da_nhan_viec',

        'khong_phu_hop',

        'da_huy'

    ) NOT NULL DEFAULT 'moi_tao'
        COMMENT 'Trạng thái Hồ sơ kết nối',

    /*
     * XÁC NHẬN HAI CHIỀU
     *
     * Dùng để đối chiếu sự minh bạch giữa
     * Nhà cung ứng và Người lao động.
     */

    nha_cung_ung_xac_nhan TINYINT(1) NOT NULL DEFAULT 0
        COMMENT 'Nhà cung ứng xác nhận đã liên hệ',

    nguoi_lao_dong_xac_nhan TINYINT(1) NOT NULL DEFAULT 0
        COMMENT 'Người lao động xác nhận đã được liên hệ',

    /*
     * KẾT QUẢ ĐỐI CHIẾU
     */

    ket_qua_doi_chieu ENUM(

        'cho_xac_nhan',

        'khop',

        'khong_khop'

    ) NOT NULL DEFAULT 'cho_xac_nhan'
        COMMENT 'Kết quả đối chiếu dữ liệu',

    ghi_chu TEXT NULL
        COMMENT 'Ghi chú quản trị',

    ngay_tao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        COMMENT 'Thời điểm tạo Hồ sơ kết nối',

    ngay_cap_nhat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
        COMMENT 'Thời điểm cập nhật gần nhất',

    /*
     * INDEX PHỤC VỤ QUẢN TRỊ VÀ TRA CỨU
     */

    INDEX idx_nguoi_lao_dong (nguoi_lao_dong_id),

    INDEX idx_nha_cung_ung (nha_cung_ung_id),

    INDEX idx_tin_tuyen_dung (tin_tuyen_dung_id),

    INDEX idx_trang_thai (trang_thai),

    INDEX idx_doi_chieu (ket_qua_doi_chieu),

    INDEX idx_mo_so (da_mo_so_dien_thoai),

    INDEX idx_ket_noi_chinh (
        nguoi_lao_dong_id,
        nha_cung_ung_id,
        tin_tuyen_dung_id
    )

);
