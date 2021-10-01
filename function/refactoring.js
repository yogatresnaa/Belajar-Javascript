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

// refactoring

function hasilPerhitungan(c,d){
    return c*c*c +  d*d*d ;    
}

// memanggil function
alert('Hasil Volume Kubus pertama adalah = ' + hasilPerhitungan(4,3));
alert('Hasil Volume Kubus kedua adalah = ' + hasilPerhitungan(7,3));