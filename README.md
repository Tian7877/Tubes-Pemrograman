# Weather App

Ini adalah aplikasi cuaca sederhana menggunakan Flask.

## Struktur Proyek

```plaintext
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
└── weather_data.db         # Database SQLite untuk menyimpan data user



Cara Menjalankan : 
Clone repository ini.
Install dependensi yang diperlukan.
Jalankan python app.py untuk memulai aplikasi.

Tampilan Mobile:
![image](https://github.com/user-attachments/assets/36122f94-391d-41f8-bf5b-f419f7f75285)

Tampilan Dekstop : 
![image](https://github.com/user-attachments/assets/96f086c2-9dfc-437c-9921-be76bc21f88d)

Tampilan forecast/[slug] page:
![Uploading image.png…]()

