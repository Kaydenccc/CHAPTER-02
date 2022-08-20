function getAngkaTerbesarKedua(dataAngka) {
  // cek apakah parameter adalah array atau bukan
  if (dataAngka instanceof Array) {
    // MELAKUKAN PENGURUTAN ANGKA DARI YANG TERBESAR KE KECIL
    dataAngka.sort((a, b) => b - a);
    // MELAKUKAN PENCARIAN ANGKA KEDUA YANG TERBESAR
    for (var i = 0; i < dataAngka.length; i++) {
      // JIKA NILAI SAAT INI LEBIH KECIL DARI NILAI YANG ADA PADA INDEX KE 0 , MAKA NILAI TERSEBUT ADALAH NILAI TERBESAR KE 2;
      if (dataAngka[i] < dataAngka[0]) return dataAngka[i];
    }
  } else {
    return 'Error: Paramater bukan sebuah array';
  }
}
// ARRAY
const dataAngka = [20, 4, 7, 7, 20, 3, 2, 2, 8];
// PEMANGGILAN FUNCTION DALAM CONSOLE.LOG()
console.log(getAngkaTerbesarKedua(9));
