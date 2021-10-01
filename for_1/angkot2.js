let jmlAngkot = 10;
let angkotBeroprasi = 9;
let noAngkot = 1;

while(noAngkot<=angkotBeroprasi){
    console.log("Angkot No. " + noAngkot + " " +
     "Beroprasi dengan baik.");
    noAngkot++;
}


for( noAngkot=angkotBeroprasi+1; noAngkot<=jmlAngkot; noAngkot++){
    console.log("Angkot No. " + noAngkot + " " +
     "Sedang tidak beroprasi.");
}