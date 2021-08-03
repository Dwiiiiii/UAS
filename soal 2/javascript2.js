function proses() {
  // Deklarasi
  var jam = document.getElementById("jam").value;
  var upah = document.getElementById("upah").value;
  var anak = document.getElementById("anak").value;

  // menghitung hasil
  var gaji = jam * upah;
  document.getElementById("gaji").value = Gaji;

  // menghitung tunjangan
  var tunjangan = gaji * 0.1 * nak;
  document.getElementById("tunjangan").value = TA;

  // menghitung total gaji
  var total = gaji + tunjangan;

  document.getElementById("total").value = Total;
}