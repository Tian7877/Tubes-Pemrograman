# Weather App

Ini adalah aplikasi cuaca sederhana menggunakan Flask.

weather-app/
│
├── app.py                  # File utama Flask untuk menjalankan aplikasi
├── templates/              # Folder untuk menyimpan template HTML
│   ├── index.html          # Template untuk halaman utama pencarian dan tampilan cuaca saat ini
│   ├── forecast.html       # Template untuk halaman prakiraan cuaca lima hari ke depan
│   ├── dashboard.html      # Template untuk dashboard pengguna
│   ├── login.html          # Template untuk halaman login
│   ├── register.html       # Template untuk halaman registrasi
│   └── back.html           # Template untuk halaman pengaturan atau kembali
│
├── models.py               # File untuk mendefinisikan model database
├── config.py               # File konfigurasi aplikasi dan API
├── extensions.py           # Ekstensi dan konfigurasi tambahan untuk Flask atau database
├── postcss.config.js       # Konfigurasi PostCSS untuk Tailwind CSS
├── prettier.config.js      # Konfigurasi Prettier untuk formatting
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── package.json            # Metadata proyek dan dependencies Node.js
├── package-lock.json       # Versi dependencies Node.js yang terkunci
└── weather_data.db         # Database SQLite untuk menyimpan data cuaca lokal


Cara Menjalankan : 
Clone repository ini.
Install dependensi yang diperlukan.
Jalankan python app.py untuk memulai aplikasi.
