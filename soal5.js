function getSplitName(personName) {
  //Melakukan split nama dengan mengubahnya menjadi array dengan cara merubah spasi menajadi koma,
  const name = personName.split(' ');
  // cek apakah nama lebih dari 3 suku kata
  if (name.length > 3) return 'Error: Nama lebih dari 3 suku kata';
  //jika nama memiliki 3 suku kata
  if (name.length === 3) {
    return {
      firstName: name[0],
      middleName: name[1],
      lastName: name[2],
    };
    //jika nama memiliki 2 suku kata
  } else if (name.length === 2) {
    return {
      firstName: name[0],
      middleName: null,
      lastName: name[1],
    };
  } else {
    //jika nama memiliki 1 suku kata
    return {
      firstName: name[0],
      middleName: null,
      lastName: null,
    };
  }
}
console.log(getSplitName('Anhar Fadilah kayden jaya'));
console.log(getSplitName('Anhar Fadilah kayden'));
console.log(getSplitName('Anhar Fadilah'));
console.log(getSplitName('Anhar'));
console.log(getSplitName(0)); //fungsi split() digunakan untuk type data string sehingga dia tidak bisa digunakan untuk type data number atau integer
