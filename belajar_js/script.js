//  level 1 pengubah judul 
const judul = document.getElementById('judul');
const tombol = document.getElementById('tombol1');

tombol.addEventListener('click', function() {
    judul.textContent = 'Judul Berhasil Diubah!';
});

// level 2
const hitung = document.getElementById("hitung");
const tombol2 = document.getElementById("tombol2");
let jumlah = 0;

tombol2.addEventListener("click", () => {
  jumlah = jumlah + 1; 
  hitung.textContent = jumlah;
});

// level 3
const tombol3 = document.getElementById("tombol3");
tombol3.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});