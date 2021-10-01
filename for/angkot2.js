let jumlahAngkot=10;
let angkotBeroprasi=9;
let noAngkot=1;

while(noAngkot<=angkotBeroprasi){
    console.log('Angkot No.'+''+ noAngkot +' '+
    'beroprasi dengan baik');
noAngkot++;
}

for(noAngkot=angkotBeroprasi+1; noAngkot<=jumlahAngkot; noAngkot++){
    console.log('Angkot No. ' + ''+ noAngkot + ' '+
     'Sedang Tidak Beroprasi.');
}