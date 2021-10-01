function Angkot(sopir,trayek,penumpang,kas){
    this.sopri=sopir;
    this.trayek=trayek;
    this.penumpang=penumpang;
    this.kas=kas;

   this.penumpangNaik= function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
   }

   this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length===0){
             alert('penumpang masih kosong');
             return false;
        }
   }




}

let angkot1= new Angkot
('Sandika Galih',['parung','ciputat'], [], 0);

let angkot2= new Angkot
('Puji Tresna',['parung','Depok'], [], 0);