let buku = 12;
let eksemplar = buku * 10;
let hargaSatuanEksemplar = 5000

// jika jumlah buku yang dibeli lebih kecil atau sama dengan 100 eksemplar, maka tidak ada diskon,
// jika jumlah buku yang dibeli lebih besar dari 100 dan kurang dari atau sama dengan 200 eksemplar maka untuk 100 eksemplar yang pertama dapat diskon 5% sedangkan sisanya mendapat diskon 15%
// jika jumlah buku yang dibeli lebih besar dari 200 eksemplar maka 100 eksemplar pertama diskon 7% 100 eksemplar kedua diskon 17% dan sisanya diskon 27%

if(eksemplar <= 100) {
  let total = eksemplar * hargaSatuanEksemplar;
  console.log('Total harga: ', total);
} else if(eksemplar > 100 & eksemplar <= 200) {
  let harga100Pertama = (100 * hargaSatuanEksemplar) - (100 * hargaSatuanEksemplar * 0.05);
  let hargaSisa = ((eksemplar - 100) * hargaSatuanEksemplar) - ((eksemplar - 100) * hargaSatuanEksemplar * 0.15);
  let total = harga100Pertama + hargaSisa
  console.log('Total harga: ', harga100Pertama, '+', hargaSisa, '=', total);
} else {
  let harga100Pertama = (100 * hargaSatuanEksemplar) - (100 * hargaSatuanEksemplar * 0.07);
  let harga100Kedua = (100 * hargaSatuanEksemplar) - (100 * hargaSatuanEksemplar * 0.17);
  let hargaSisa = ((eksemplar - 200) * hargaSatuanEksemplar) - ((eksemplar - 200) * hargaSatuanEksemplar * 0.27);
  let total = harga100Pertama + harga100Kedua + hargaSisa
  console.log('Total harga: ', harga100Pertama, '+', harga100Kedua, '+', hargaSisa, '=', total);
}