function hitung() {
  // Deklarasi
  var harga = document.getElementById("harga").value;
  var jumlah = document.getElementById("jumlah").value;

  // menghitung hasil
  var hasil = harga * jumlah;
  document.getElementById("total").value = hasil;

  // menghitung diskon
  if (hasil > 100000) {
    diskon = 0.2;
    document.getElementById("diskon").value = "20%";
  } else {
    diskon = 0;
    document.getElementById("diskon").value = "0";
  }

  // menghitung total yang harus dibayar sesudah diskon
  var totalbayar = hasil * diskon;
  bayar = hasil - totalbayar;
  document.getElementById("bayar").value = bayar;
}
