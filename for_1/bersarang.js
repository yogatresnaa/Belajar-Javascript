let s='';
for(i = 5; i>0;i--){
    for( j=0; j<i;j++){
        s += '*';
        s += ' ';
    }
    s +='\n';
}

console.log(s);

let a='';
for(z = 0; z<5;z++){
    for( k=0; k<=z;k++){
        a += Math.random();    
    }
    a +='\n';
}

console.log(a);