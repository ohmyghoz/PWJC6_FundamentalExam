var angka = [5,-6,-8,4,-3,6]  //contoh input Array
panjang = angka.length;

var positif = 0;
var negatif = 0;
var hasil;

for(i=0; i< panjang; i++)
{
    if(angka[i]>0) //menjumlahkan angka positif
    {
        positif = positif+angka[i];
    }
    if(angka[i]<0) //menjumlahkan angka negatif
    {
        negatif = negatif+angka[i];
    }
}

if(Math.abs(negatif)>positif)//nilai negatif di positifkan dulu supaya bisa dibandingin
{
    console.log("Negatif WINS");
}
else if(Math.abs(negatif)<positif)
{
    console.log("Positif WINS");
}
else
{
    console.log("DRAW");
}

