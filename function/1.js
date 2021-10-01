// contoh function expresi

// let volumeKubus = function(a,b){

// let kubusA = a;
// let kubusB = b;
// let hasil;

// volumeA = a*a*a;
// volumeB = b*b*b;

// hasil = volumeA+volumeB;
  
//     return hasil;

// }


// console.log('Hasil Volume Kubus pertama adalah = ' + volumeKubus(8,3));
// console.log('Hasil Volume Kubus kedua adalah = ' + volumeKubus(9,3));



// function Declaration

// function hasilPerhitungan(c,d){
//     let vol1;
//     let vol2;
//     let total;

//     vol1 = c*c*c;
//     vol2 = d*d*d;

//     total = vol1+vol2;

//     return total;

//     // membuat function
// }

// // memanggil function
// alert('Hasil Volume Kubus pertama adalah = ' + hasilPerhitungan(4,3));
// alert('Hasil Volume Kubus kedua adalah = ' + hasilPerhitungan(7,3));


function hitungJumlahAngkot(c,d){
    let jmlAngkot=c;
    let noAngkot= d;
    while(noAngkot<=jmlAngkot){
        console.log("Angkot No." + noAngkot + " "+ 
        "beroprasi dengan baik.");
    noAngkot++;    
    }
}
let uuu = hitungJumlahAngkot(5,1);
let uu = hitungJumlahAngkot(6,1);
console.log(uuu);
console.log(uu);

// sudo variabel arguments

// function tambah(){
//     let hasil =0;
//     for (let i=0; i< arguments.length; i++){
//         hasil += arguments[i];
//     }

//     return hasil;
// }

// let coba = tambah(1,2,3,4,5);
// console.log(coba);







