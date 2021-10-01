// Function yang mengembalikan nilai ( return) 
// dan penggunaan parameter dan argumen

function jumlahVolumeDuaKubus(a,b){

    return  a * a  + b * b  ;

}

console.log(jumlahVolumeDuaKubus(8,3));
console.log(jumlahVolumeDuaKubus(20,30));
console.log(jumlahVolumeDuaKubus(3.14,3));


function jumlahNilai(df,dd){ 
   
    return df+dd;
}
console.log('jadi jumlahnya adalah ' + jumlahNilai(10,20));
console.log('jadi jumlahnya adalah ' + jumlahNilai(2,20));

// Function yang mengembalikan nilai ( return)




function sayaHello(){
    console.log("==================");
    console.log("Halo Dunia Islam");
    console.log("==================");
}

sayaHello();   
// Memanggil Fungsi



// function Declaration
function angkotLima(jumlahAngkot,angkotBeroprasi,noAngkot){
 

for(noAngkot=1; noAngkot<=jumlahAngkot; noAngkot++){
    if(noAngkot<=angkotBeroprasi && noAngkot!==2 && noAngkot!==5){
        console.log('Angkot No.' + ' '+ noAngkot+' '
        +'Beroprasi Dengan Baik');
    }else if(noAngkot===8 || noAngkot === 10 || noAngkot ===2 || noAngkot===5){
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Lembur.')
    }else{
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Tidak Beroprasi.')
        
    }

    console.log("==================");
}

console.log("==================");

}

angkotLima(3,2,1);
angkotLima(5,3,1);

// psnggil Fungsinya






// function ekspresi

let funsiEkspresi = function(jumlahAngkot,angkotBeroprasi,noAngkot){

for(noAngkot=1; noAngkot<=jumlahAngkot; noAngkot++){
    if(noAngkot<=angkotBeroprasi && noAngkot!==2){
        console.log('Angkot No.'+''+ noAngkot +' '+
        'beroprasi dengan baik')
    }else if(noAngkot===angkotBeroprasi+2 || noAngkot === 2 ||noAngkot === angkotBeroprasi+4 ){
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Lembur.')
    }else{
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Tidak Beroprasi.')
    }
    console.log("==================");
}

console.log("==================");

}

funsiEkspresi(6,3,1);
// panggil variabelnya


function dataDalamArray(){
    let products=["serogan","kolem","EmpanIkan","Ikan"]
    products.push("Ember")
    products.shift();
    console.log("Menampilkan isi data Array");
    console.log("=================="); 

    for(let i=0; i<=products.length; i++){
        console.log (products[i]);
        
    }

    console.log("=================="); 
}

dataDalamArray();

// menambah data pada Array menggunakan methode push(); contoh : product.push("xxx");
//menghapus data dari belakang pada Array menggunakan methode pop(); contoh : product.pop("xxx");
//menghapus data dari depan pada Array menggunakan methode shift(); contoh : product.shift("xxx");
// Menghapus Data pada Indeks Tertentu

// Apabila kita ingin menghapus data pada inteks tertentu, maka fungsi atau method yang digunakan adalah splice().

// Fungsi ini memiliki dua parameter yang harus diberikan:

// array.splice(<indeks>, <total>);

// Keterangan:

//     <indeks> adalah indeks dari data di dalam array yang akan dihapus;
//     <total> adalah jumlah data yang akan dihapus dari indeks tersebut.

// Biasanya kita berikan nilai total dengan nilai 1 agar hanya menghapus satu data saja.