// object literal

// let mhs1={
//     nama:"M. Puji Tresna Prayoga",
//     umur: 29,
//     ips:[2.90, 3.00,2.75,3.00],
//     alamat:{
//         jalan:"Delima 1.kelurahan curug Depok",
//         kota:" Depok",
//         provinsi: "Jawa Barat",

//         sekolah:{
//             namaSekolah:'basakara',
//             alamat:'Depok',
//             provinsi:'Jawa Barat',
//         }

        
//     }

// };


// let mhs2={
//     nama:'yoyo',
//     umur:27,
//     nrp:1234567,
//     ips:[2.20,3.00,4.00,3.33],
// };

// // variabel dalam object disebut properti
// // function di dalam object di sebut method

// // function Declaration
// function objectMahasiswa(nama,nrp,jurusan,email){
//     let mhs={};
//     mhs.nama=nama;
//     mhs.nrp=nrp;
//     mhs.jurusan=jurusan;
//     mhs.email=email;

//     return mhs;

// }

// let mhs3 = objectMahasiswa('yono','7000000','teknik informatika','yono@gmail.com');

// // constrctur

// function Mahasiswa (nama,nrp,jurusan,email){
//     this.nama=nama;
//     this.nrp=nrp;
//     this.jurusan=jurusan;
//     this.email=email;
// }

// let mhs4 = new Mahasiswa('yoga','10811434','Teknik Informatika', 'yogatreana@gmail.com');



// function PemainGmc(nama,usia,kategori,tinggiBadan){
//     this.nama=nama;
//     this.usia=usia;
//     this.kategori=kategori;
//     this.tinggiBadan=tinggiBadan;
// }

// let dataPemain1 = new PemainGmc('Puji Tresna','29 Tahun', 'Senior', '160cm');
// let dataPemain2 = new PemainGmc('Bodong','29 Tahun', 'Senior', '160cm');



// function declaration
function Mahasiswa (nama, energi){
    let mahasiswa={}
    mahasiswa.nama=nama;
    mahasiswa.energi=energi;

    mahasiswa.makan = function(porsi){
        this.energi +=porsi;
        console.log(`Halo ${this.nama}, Selamat makan`);
    }
    return mahasiswa;
}
let puji = Mahasiswa('Puji', 5);





// constuktor

function Mahasiswa (nama, energi){
    this.nama=nama;
    this.energi=energi;

    this.makan = function(porsi){
        this.energi +=porsi;
        console.log(`Halo ${this.nama}, Selamat makan`);
    }
    this.main = function(jam){
        this.energi -= jam;
        console.log(`kamu kebanyakan main ${this.nama}, sukuru`)
    }

}

let roy = new Mahasiswa('roy', 5);