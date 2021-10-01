function bilanganPositifNegatif(a){
    // cari nilai
    let nilai =a;

    // kondisi

    if(nilai > 0){
        alert("Maka Nilai ini adalah bilangan positif");
    }else if(nilai < 0){
        alert("Maka Nilai ini adalah bilangan negative");
    } else if ( nilai == 0){
        alert("Maka nilai ini adalah bilangan Nol ");
    }else{
        alert("Yang anda masukan bukan sebuah angka, coba lagi");
    }

    return nilai    
}
alert(" Mencari Bilangan positif dan negatif");
let coba = bilanganPositifNegatif(parseInt(prompt( 'masukan nilai = ')));
confirm('Apakah sudah selesai?');


// function gradeNilai(c){

//     let grade=c;

//     if( grade >= 81 && grade <= 100){
//         alert('garde nilai anda adalah = A');
//     }else if( grade >= 71 && grade <= 81){
//         alert('garde nilai anda adalah = B');
//     }else if( grade >= 61 && grade <= 71){
//         alert('garde nilai anda adalah = c');
//     }else if( grade >= 51 && grade <= 61){
//         alert('garde nilai anda adalah = D');
//     }else if( grade >=51){
//         alert('garde nilai anda adalah = E');
//     }else{
//         alert('Coba inputkan nilai yang benar');
//     }

//     return grade;

// }

// alert(" Menentukan garde nilai UTS mahasiswa ");
// let hai = gradeNilai(parseInt(prompt( 'masukan nilai = ')));
// confirm('Apakah sudah selesai?');


// function tugasAkhir (a){
//     let hari = a;
//     if( hari == 'senin' ){
//         alert("Maka Puasa sunnah Hari Senin");
//     }else if( hari == 'kamis'){
//        alert("Maka Puasa sunnah Hari Kamis");
//     }else{
//         alert("Bukan hari untuk puasa sunnah");
//     }

//     return hari;
// }

// alert("Menampilkan Keterangan Puasa Sunnah ")
// alert("Jaddwal puasa sunnah");
// let yyyy = tugasAkhir(prompt("Masukan hari : "));



// function menuMenghitung ( ){
//     let masukanKode = ''
//     switch (masukanKode){
//         case 1:
//             alert(" Rumus Luas dan keliling segitiga = L = 1/2 x a x t  ");
//             break;
//         case 2:
//             alert(" Rumus Luas dan keliling Persegi panjang = p X t X L  ");
//             break;
//         case 3:
//                 alert("Rumus Luas dan keliling segitiga = L = π.r.r   ");
//                 break;
//         default:
//                  alert(" salah  ");
//                  break;


            
//     }
// }

// console.log('ini adalh rumusnya' + menuMenghitung())




