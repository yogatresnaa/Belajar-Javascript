let jumlahAngkot=10;
let angkotBeroprasi=6;
let noAngkot=1;

for(noAngkot=1; noAngkot<=jumlahAngkot; noAngkot++){
    if(noAngkot<=angkotBeroprasi){
        console.log('Angkot No.'+''+ noAngkot +' '+
        'beroprasi dengan baik')
    }else if(noAngkot===angkotBeroprasi+2 || noAngkot === angkotBeroprasi+4 ){
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Lembur.')
    }else{
        console.log('Angkot No.'+''+ noAngkot +' '+
        'Sedang Tidak Beroprasi.')
    }
}