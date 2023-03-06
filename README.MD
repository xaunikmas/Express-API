membuat server route nya, 
1. buat file index.js, ato server.js ato terserah. yang penting pada package.json nya dirubah parameter ini:

_"name": "latihan-lagi",_
  _"version": "1.0.0",_
  _"main": "index.js", --> bisa server.js kalo filename nya mau jadi server_
  "type": "module", --> tambahkan parameter ini dibawah _"main":_



agar server berjalan terus/aktif terus, kita perlu install 
a. _npm install nodemon --save-dev_  pada terminal dimana kita menjalankan script node js nya
b. lalu kita tambahkan script _"type": "nodemon index.js"_ di dalam scrip. lalu, jalankan nodemon nya dengan perintah "_npm start"_


router.get("/users", (req, res)=> res.send ("Hellow Nixau"));
function router.get utk menampilkan data seluruh users

router.post("/")
function router.post utk menambah data users

router.delete("/")
function router.delete utk menghapus data users

router.patch("/")
function router.patch utk update data terbaru users
