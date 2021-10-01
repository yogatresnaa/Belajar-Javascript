function cetakAngka(n){
    // tulis 'base case' agar rekursif dapat berhenti
    if (n === 11 ){
        return;
    }

    console.log(n);
    cetakAngka(n+1);
}

cetakAngka(0);


console.log("==================")

function faktorial(n){
    if(n===0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(3));

