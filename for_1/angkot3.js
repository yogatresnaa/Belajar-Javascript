let jmlAngkot = 10;
let angkotBeroprasi = 6;
let noAngkot = 1;

for(noAngkot=1; noAngkot<=jmlAngkot; noAngkot++){
    if(noAngkot<=angkotBeroprasi){
        console.log("Angkot no. " + noAngkot+ " " +
        "beroprasi dengan baik.");
    }else{
        console.log("Angkot no. " + noAngkot+ " " +
        "sedang tidak beroprasi.");
    }
}
