function Mahasiswa (nama, energi){
    this.nama=nama;
    this.energi=energi;

}
Mahasiswa.prototype.makan=function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan!`;
}
Mahasiswa.prototype.main=function(jam){
    this.energi -= jam;
    return ` hai ${this.nama}, Sekarang tenagamu berkurANG`;
}
Mahasiswa.prototype.bobo=function(jam){
    this.energi += jam;
    return `sekarang ${this.nama}, selamat bangun bobo`;
}

let roy = new Mahasiswa('roy', 5);