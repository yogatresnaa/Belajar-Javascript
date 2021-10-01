// let jumlahAngkot=10;
// let angkotBeroprasi=6;
// let noAngkot=1;

// for(noAngkot=1; noAngkot<=jumlahAngkot; noAngkot++){
//     if(noAngkot<=angkotBeroprasi && noAngkot!==2 && noAngkot!==4 && noAngkot!==5){
//         console.log('Angkot No.' + ' '+ noAngkot+' '
//         +'Beroprasi Dengan Baik');
//     }else if(noAngkot==8 || noAngkot == 10 || noAngkot == 2 || noAngkot== 5  || noAngkot==4){
//         console.log('Angkot No.'+''+ noAngkot +' '+
//         'Sedang Lembur.')
//     }else{
//         console.log('Angkot No.'+''+ noAngkot +' '+
//         'Sedang Tidak Beroprasi.')
        
// }

// }

function MenghitungAngkot(a,b,c){
    let Jumlahangkot = a;
    let AngkotBeroprasi = b;
    let noAngkot = c;

for(noAngkot=1; noAngkot<=Jumlahangkot; noAngkot++){
    if(noAngkot<=AngkotBeroprasi && noAngkot!==2 && noAngkot!==4 && noAngkot!=6   ){
        console.log('Angkot No.' + ' '+ noAngkot+' '
        +'Beroprasi Dengan Baik');
    }else if(noAngkot==6  ||  noAngkot==8 || noAngkot == 10 || noAngkot == 2   || noAngkot==4 ){
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Lembur.')
    }else{
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Tidak Beroprasi.')
        
}

}

}

console.log(MenghitungAngkot(10,6,1));