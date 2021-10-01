let jmlAngkot = 10;
let angkotBeroprasi = 6;
let noAngkot = 1;

for(noAngkot=1; noAngkot<=jmlAngkot;noAngkot++){
    if(noAngkot<=angkotBeroprasi && noAngkot!==5){
        console.log("Angkot no. " + noAngkot+ " " +
        "beroprasi dengan baik.");
    }else if(noAngkot===5||noAngkot===8 || noAngkot===10){
        console.log("Angkot no. " + noAngkot+ " " +
        "Sedang lembur.");
    }else{
        console.log("Angkot no. " + noAngkot+ " " +
        "sedang tidak beroprasi.");
    }
    
}