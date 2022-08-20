const dataPenjualanNovel = [
  {
    idProduct: 'BOOK02421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK02921',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK02441',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Basari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK02451',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  //VALIDATSI TYPE DATA PARAMETER
  if (dataPenjualan instanceof Array) {
    const data = {
      totalKeuntungan: 0,
      totalModal: 0,
      produkBukuTerlaris: '',
      persentaseKeuntungan: 0,
      penulisTerlaris: '',
    };

    //VARIABEL YANG DIPERLUKAN UNTUK MELAKUKA PERHITUNGAN
    let pengeluaran = 0;
    let pendapatan = 0;
    let tere_liye = 0;
    let fiersa = 0;
    let andrea = 0;
    // MENGHITUNG TOTAL PENGELUARAN DAN TOTAL PENDAPATAN
    dataPenjualan.forEach((data) => {
      pengeluaran += data.hargaBeli * (data.totalTerjual + data.sisaStok);
      pendapatan += data.hargaJual * data.totalTerjual;
      if (data.penulis === 'Tere Liye') {
        tere_liye += 1;
      } else if (data.penulis === 'Fiersa Basari') {
        fiersa += 1;
      } else {
        andrea += 1;
      }
    });
    //MENGHITUNGAN KEUNTUNGAN PENJUALAN
    function changeToRp(hasil) {
      var reverse = hasil.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
      return (ribuan = ribuan.join('.').split('').reverse().join(''));
    }
    data.totalKeuntungan = 'Rp.' + changeToRp(pendapatan - pengeluaran);
    data.totalModal = 'Rp.' + changeToRp(pengeluaran);
    // PRESENTASE KEUNTUNGAN
    let present = ((pendapatan - pengeluaran) / pengeluaran) * 100;
    data.persentaseKeuntungan = present.toFixed(2) + '%';
    // MMENCARI PENULIS TERLARIS
    if (tere_liye > fiersa && tere_liye > andrea) {
      data.penulisTerlaris = 'Tere Liye';
    } else if (fiersa > andrea && fiersa > tere_liye) {
      data.penulisTerlaris = 'Fiersa Basari';
    } else {
      data.penulisTerlaris = 'Andrea Hirata';
    }
    // MENCARI BUKU TERLARIS DAN PENULIS TERLARIS
    let dataBukuTerlaris;
    for (var i = 0; i < dataPenjualan.length; i++) {
      for (var j = 0; j < dataPenjualan.length; j++) {
        if (dataPenjualan[j].totalTerjual > dataPenjualan[i].totalTerjual) {
          dataBukuTerlaris = dataPenjualan[j];
        }
      }
    }
    data.produkBukuTerlaris = dataBukuTerlaris.namaProduk;
    return data;
  }
}
console.log(getInfoPenjualan(dataPenjualanNovel));
