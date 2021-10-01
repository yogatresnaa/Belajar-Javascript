// contoh soal 1
// sangat baik untuk nilai 80-100, 
// baik untuk nilai 70-80, 
// cukup untuk nilai 60-70, 
// kurang untuk nilai dibawah 60.



// function hitungNilaiUjian(a){
//     let nilai=a;
    
   

//     if(nilai>=80 && nilai<=100){
//         console.log("Nilai Sangat Baik");
//     }else if(nilai>=70 && nilai<=80){
//         console.log("Nilai Baik");
//     }else if(nilai>=60 && nilai<=70){
//         console.log("Nilai Cukup");
//     }else{
//         console.log("Nilai Kurang");
//     }
// };

// hitungNilaiUjian(80);
// hitungNilaiUjian(70);
// hitungNilaiUjian(60);
// hitungNilaiUjian(40);



// function mencariBilangan (a){
//     let bilangan=a;

//     if(bilangan %2 ==0 ){
//         console.log("Bilangan Genap" );
//     }else{
//         console.log("bilngan ganjil"  );
//     }
//     return bilangan;    
// };

// mencariBilangan(10);
// mencariBilangan(17);
// mencariBilangan(8);

// function bonusBelanja(a){
//     console.log("Daftar Bonus Belanja Di toko enak banget");
//     console.log("=========================================");

//    let pembelian=a;

//     if(pembelian >= 500000){
//         console.log("Makan Pelanggan mendapatkan tiket ke swiss");
//     } else if(pembelian >= 400000 && pembelian<= 500000)
//     console.log("Makan Pelanggan mendapatkan Jam tangan rolex");
//     else if(pembelian >= 300000 && pembelian<= 400000){
//         console.log("Makan Pelanggan mendapatkan Tiket ke bali");
//     }else{
//         console.log("Makan Pelanggan mendapatkan Ucapan terima kasih");
//     }
//     return pembelian;

// };

// bonusBelanja(310000)
// bonusBelanja(500000)

function pilihKode(a){
    let kode = a;

    if (kode==1){
        console.log("Hari ini adalah senin");
    }else if(kode==2){
        console.log("Hari ini adalah Selasa");
    }else if(kode==3){
        console.log("Hari ini adalah Rabu");
    }else if(kode==4){
        console.log("Hari ini adalah Kamis");
    }else if(kode==5){
        console.log("Hari ini adalah Jumat");
    }else if(kode==6){
        console.log("Hari ini adalah Libur");
    }else if(kode==7){
        console.log("Hari ini adalah libur minggu");
    }else{
        console.log("Masukan ulang kode anda");
    }

    return kode;
};

pilihKode(10);


