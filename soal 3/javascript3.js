function hitung() {
  
  var nama_barang = document.getElementById("nama_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  
  switch (nama_barang) {
    case "1":
      var hmonitor = 2500000;
      document.getElementById("harga").value = hmonitor;
      break;
    case "2":
      var hmouse = 200000;
      document.getElementById("harga").value = hmouse;
      break;
    case "3":
      var hkeyboard = 150000;
      document.getElementById("harga").value = hkeyboard;
      break;

    default:
      break;
  }

  
  var harga = document.getElementById("harga").value;

  
  var total = jumlah * harga;

  document.getElementById("total").value = total;
}