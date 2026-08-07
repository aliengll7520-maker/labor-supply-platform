CREATE TABLE connection_records (

    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    worker_id BIGINT UNSIGNED NULL,

    supplier_id BIGINT UNSIGNED NOT NULL,

    job_id BIGINT UNSIGNED NOT NULL,

    worker_name VARCHAR(255) NOT NULL,

    worker_phone VARCHAR(20) NOT NULL,

    worker_hometown VARCHAR(255) NOT NULL,

    supplier_phone VARCHAR(20) NOT NULL,

    phone_unlocked_at DATETIME NOT NULL,

    supplier_viewed_at DATETIME NULL,

    supplier_called_at DATETIME NULL,

    interview_at DATETIME NULL,

    hired_at DATETIME NULL,

    status VARCHAR(50) DEFAULT 'registered',

    note TEXT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP

);
