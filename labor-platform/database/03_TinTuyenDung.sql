/*
==========================================================
03_TinTuyenDung.sql
QUẢN LÝ TIN TUYỂN DỤNG
Labor Supply Platform
Version: 3.0
==========================================================

VAI TRÒ:

Đây là dữ liệu Tin tuyển dụng.

Tin tuyển dụng được thiết kế để Người lao động
có thể xem công khai mà:

- Không cần đăng nhập.
- Không cần đăng ký.
- Không giới hạn lượt xem tin.

Tuy nhiên:

SỐ ĐIỆN THOẠI NHÀ CUNG ỨNG KHÔNG ĐƯỢC LƯU
TRONG BẢNG TIN TUYỂN DỤNG.

Số điện thoại thuộc:

02_NhaCungUng

và chỉ được cấp quyền xem thông qua:

00_HoSoKetNoi

==========================================================

LUỒNG:

02_NhaCungUng
      │
      │ nha_cung_ung_id
      ▼
03_TinTuyenDung
      │
      ▼
Người lao động xem công khai
      │
      ▼
Muốn xem số điện thoại
      │
      ▼
00_HoSoKetNoi
      │
      ▼
Cấp quyền xem số điện thoại

==========================================================

DỮ LIỆU CÔNG KHAI CỦA TIN:

- Tiêu đề
- Ngành nghề
- Số lượng
- Địa điểm
- Lương
- Phụ cấp
- Thưởng
- Hỗ trợ
- Tăng ca
- Chính sách trả lương
- Hợp đồng
- Bảo hiểm
- Chế độ khác
- Điều kiện tuyển dụng
- Mô tả công việc
- Hình ảnh
- Video

KHÔNG LƯU:

- Số điện thoại Nhà cung ứng
- Mật khẩu
- Dữ liệu Hồ sơ kết nối
- Dữ liệu riêng tư của Người lao động

==========================================================
*/

CREATE TABLE tin_tuyen_dung (

    /*
     * ==================================================
     * NHẬN DIỆN TIN
     * ==================================================
     */

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    ma_tin VARCHAR(30) UNIQUE NOT NULL
        COMMENT 'Mã Tin tuyển dụng',

    nha_cung_ung_id BIGINT UNSIGNED NOT NULL
        COMMENT 'ID Nhà cung ứng',

    /*
     * ==================================================
     * NỘI DUNG CÔNG KHAI
     * ==================================================
     */

    tieu_de VARCHAR(255) NOT NULL
        COMMENT 'Tiêu đề công việc',

    nganh_nghe VARCHAR(255) NOT NULL
        COMMENT 'Ngành nghề',

    so_luong INT UNSIGNED NOT NULL DEFAULT 1
        COMMENT 'Số lượng cần tuyển',

    dia_diem TEXT NOT NULL
        COMMENT 'Địa điểm làm việc',

    google_maps TEXT NULL
        COMMENT 'Vị trí Google Maps',

    /*
     * ==================================================
     * THU NHẬP
     * ==================================================
     */

    luong_co_ban DECIMAL(12,2) NOT NULL DEFAULT 0
        COMMENT 'Lương cơ bản',

    chuyen_can DECIMAL(12,2) NOT NULL DEFAULT 0
        COMMENT 'Phụ cấp chuyên cần',

    nha_o DECIMAL(12,2) NOT NULL DEFAULT 0
        COMMENT 'Hỗ trợ nhà ở',

    xang_xe DECIMAL(12,2) NOT NULL DEFAULT 0
        COMMENT 'Hỗ trợ xăng xe',

    hieu_suat DECIMAL(12,2) NOT NULL DEFAULT 0
        COMMENT 'Thưởng hiệu suất',

    phu_cap_khac DECIMAL(12,2) NOT NULL DEFAULT 0
        COMMENT 'Phụ cấp khác',

    thuong TEXT NULL
        COMMENT 'Thông tin thưởng',

    ho_tro TEXT NULL
        COMMENT 'Các hỗ trợ khác',

    tang_ca TEXT NULL
        COMMENT 'Chính sách tăng ca',

    chinh_sach_tra_luong TEXT NULL
        COMMENT 'Chính sách trả lương',

    /*
     * ==================================================
     * QUYỀN LỢI / CHẾ ĐỘ
     * ==================================================
     */

    hop_dong TEXT NULL
        COMMENT 'Thông tin hợp đồng',

    bao_hiem TEXT NULL
        COMMENT 'Thông tin bảo hiểm',

    che_do_khac TEXT NULL
        COMMENT 'Các chế độ khác',

    /*
     * ==================================================
     * YÊU CẦU
     * ==================================================
     */

    dieu_kien_tuyen_dung TEXT NULL
        COMMENT 'Điều kiện tuyển dụng',

    mo_ta_cong_viec LONGTEXT NULL
        COMMENT 'Mô tả công việc',

    /*
     * ==================================================
     * MEDIA
     * ==================================================
     */

    hinh_anh TEXT NULL
        COMMENT 'Danh sách hình ảnh',

    video TEXT NULL
        COMMENT 'Video tuyển dụng',

    /*
     * ==================================================
     * TRẠNG THÁI
     * ==================================================
     *
     * Chỉ tin đủ điều kiện mới được hiển thị công khai.
     */

    trang_thai ENUM(

        'cho_duyet',

        'dang_tuyen',

        'tam_dung',

        'het_han',

        'da_dong'

    ) NOT NULL DEFAULT 'cho_duyet'
        COMMENT 'Trạng thái Tin tuyển dụng',

    /*
     * ==================================================
     * THỜI GIAN
     * ==================================================
     */

    ngay_dang DATETIME NULL
        COMMENT 'Thời điểm bắt đầu hiển thị công khai',

    ngay_het_han DATETIME NULL
        COMMENT 'Thời điểm hết hạn',

    ngay_tao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        COMMENT 'Thời điểm tạo tin',

    ngay_cap_nhat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
        COMMENT 'Thời điểm cập nhật',

    /*
     * ==================================================
     * INDEX
     * ==================================================
     */

    INDEX idx_nha_cung_ung (
        nha_cung_ung_id
    ),

    INDEX idx_trang_thai (
        trang_thai
    ),

    INDEX idx_nganh_nghe (
        nganh_nghe
    ),

    INDEX idx_dia_diem (
        dia_diem(100)
    ),

    INDEX idx_ngay_dang (
        ngay_dang
    ),

    INDEX idx_ngay_het_han (
        ngay_het_han
    )

);
