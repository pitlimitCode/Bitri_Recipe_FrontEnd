# Bitri Recipe in Desktop Browser - React JS
Repository Github: [```https://github.com/pitlimitCode/Bitri_Recipe_FrontEnd```](https://github.com/pitlimitCode/Bitri_Recipe_FrontEnd)  
Repository REST API (Back-end ExpressJS): [```https://github.com/pitlimitCode/Bitri_Recipe_Web```](https://github.com/pitlimitCode/Bitri_Recipe_Web) 
Referensi User Interface: [```Figma UI```](https://www.figma.com/file/SUbBTYCq1e4ngRt20lSdqr/Food-Recipe?node-id=47%3A1273)  

Lompat ke:  
[Cloning dan Set Up program ini di Local Device](#Cloning-dan-Set-Up-program-ini-di-Local-Device)  
[Persyaratan Tugas Frontend React dan Revisi](#Persyaratan-Tugas-dan-Revisi)  

---
## Cloning dan Set Up program ini di Local Device  

### Cloning:  
```shell
git clone https://github.com/pitlimitCode/Bitri_Recipe_FrontEnd.git
```

### NPM Install:  
```shell
npm install  
```

### Isian .env:  
```shell
REACT_APP_BE_URL="http://localhost:8000/"
```

---
## Jalankan REST API / program di local  
```shell
npm run dev
```

---
# Persyaratan Tugas  

### Catatan revisi setelah presentasi Frontend React:  
...

### Tugas Frontend React 05 juli:
Persyaratan:  
  - Melanjutkan program Backend sebelumnya
  - Semua requirement dari Week sebelumnya
  - ENV
  - Linter
  - Design CSS menggunakan react bootstrap atau bootstrap  
  - Gunakan Bahasa Inggris untuk nama File dan Fungsi
  - Navigation (Public & Private)
  - URL Params (Search, Sort, dan Pagination)
  - Slicing: 
    - Login, 
    - register, 
    - Landing Page (new recipe, and 6 recipe with pagination), 
    - Detail recipe,
    - nambah recipe,
    - profile (foto, nama, resep yang udah dibuat)
  - Hooks [function component, atomic design]
  - localStorage
  - Redux (CRUD) & with file
  - Build & Deploy
  - Upload/push tugas kamu ke github dan gunakan nama yang profesional
  - Jelaskan dengan bahasa kalian sendiri tentang apa itu dan konsep tentang Redux dan HOC.

Persyaratan tambahan (opsional):
  - Responsive
  - Webpack
  - Persist storage

### Presentase penjelasan REDUX dan HOC  

Redux, library untuk state management. memiliki 3 komponen utama: action, reducer, dan store. sifatnya seperti database yang dapat dipakai pada frontend, fungsinya untuk operasi seperti query, insert, dan delete, dapat juga digunakan untuk logic seperti validasi, verifikasi, dan autorisasi.  

HOC [High Order Component], teknik yang lebih lanjut (di React) untuk logic penggunaan komponen, umumnya digunakan bersamaan dengan aplikasi pihak ketiga seperti Redux atau Relay.  