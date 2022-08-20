const dataPenjualanPakAldi = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sport',
    totalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 360000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 160000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  //VALIDASI TYPE DATA PARAMETER
  if (dataPenjualan instanceof Array) {
    let totalPenjualan = 0;
    dataPenjualan.forEach((data) => {
      // totalPenjualan ditambah dengan Total terjual yang ada pada dataPenjualanPakAldi
      totalPenjualan += data.totalTerjual;
    });
    return totalPenjualan;
  }
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
