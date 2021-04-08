//STRING DEĞERLERİ (SAYILARI) TOPLAMA İŞLEMİ ÖRNEĞİ 

const { func } = require("prop-types");

var sayi1 = 20;
    sayi2 = 30;
    sayi3 = 40;

console.log (sayi1+sayi2+sayi3);

//SONUÇ : 90

// STRING OLMAYAN DDEĞERLERİ TOPLAMA YADA BİRLEŞTİRME 
var a = "Danimarka";
var b = "Programlama";
var c = "Kursları";

console.log (a+" "+b+" "+c);
//SONUC: Danimarka Programlama Kursları

var a;

a = 10;

b = a*2 + 10;

console.log ("b'nin değeri: "+ b);
//SONUÇ : 30

var array = ["Araba","Balon","Ceviz","Demir"];
console.log (array [1]);
//SONUC: Balon


//ARRAY İÇİNE YENİ BİR DEĞER EKLEME
var array = ["Araba","Balon","Ceviz","Demir"];
array [4]= "Fare";
console.log (array);
//SONUC: [ 'Araba', 'Balon', 'Ceviz', 'Demir', 'Fare' ] olur.


//ARRAY İÇİNE YENİ BİR DEĞER EKLEME (PUSH YÖNTEMİ İLE)
var array = ["Araba","Balon","Ceviz","Demir"];
array.push ("Fare");
console.log (array);
//SONUC: [ 'Araba', 'Balon', 'Ceviz', 'Demir', 'Fare' ] olur.

//ARRAY İÇİNDEKİ ELEMEN SAYISINI BULMAK İÇİN 
var array = ["Araba","Balon","Ceviz","Demir"];
console.log (array.length);
//SONUC: 4

//FOR DÖNGÜSÜ (AŞAĞIDAKİ ÖRNEKTE İ DİYE BİR DEĞİŞEN TANIMLADIK. 
//i'yi SIFIRA EŞİTLEDİK. BU +0'DAN KÜÇÜK DEDİK VE HER TURDA BİR ARTIRDIK.)
for (var i = 0; i<10; i++){
    console.log ("i'nin değeri: "+i);
}


//0'dan başlayarak 20'e kadar olan çift sayıları yazdıracağız.
var i =0; 
 while (i<20){
     console.log("i değeri : " + i);
     i = i + 2;
     //i +=2 şeklindede yazılabilir.
 }

 //sayılar arayyi oluşurduk. Bu arrayın eleman sayısını bulduk. sonra bu elemanları tek tek yazdırdık.
 var sayilar = [25,36,-25,2,65,8]
     console.log (sayilar.length)
    //console.log içinde kaç eleman olduğunu yazar. yani 6

    for (var i = 0; i < sayilar.length; i++){
    // for içinde bir i değişkeni tanımladık. Bu i sayılar arayyinin eleman sayısından küçük olacak.
    // ve her turda sayıyı bir artıracak demektir.
    console.log("Elemanlarım 1'nci Method: " + sayilar[i]);
 }

 // Yine aynı sayılar arrayini forEach ile yaptık. forEach Array içindeki tüm sayıları tek tek dolaş demek.
var sayilar2 = [25,36,-25,2,65,8]
    sayilar2.forEach(function (sayi){;
    console.log("Elemanlarım 2'nci Method : "+ sayi);
});

//karışlaştırma operatörleri if kullandık. şayet sayılar eşitsse eşit olduğunu yazdırdık.
//== eşitse demek 2 =="2" demektir ve içerekleri eşit çıkar. === yazarsak 2==="2" yazarsak eşit değil çıkar.
// hem değerleri hemde veri tiplerini kontrol eder.
var a = 5;
var b = 5;
if (a == b){
    console.log ("Sayılar Birbirine Eşit");
}
else {
    console.log ("Sayilar Eşit Değil.")
}


//if ile birden fazla karşılaştırma yapılabilir. Şayet tüm koşulları sağlıyorsa işlem yapılır değilse false döner.
// && and anlamına gelir.

if (2==2 && "Murat"=="Murat"){
    console.log ("Tüm Şartları Sağlıyor.");
}
else {
    console.log ("Tüm Şartlar Sağlanamadı. Üzgünüm.")
}


//if ile birden fazla karşılaştırma yapılabilir. Şayet koşullardan birisi sağlıyorsa işlem yapılır değilse false döner.
// || or anlamına gelir. İki dik çizgi ||

if (2==2 || "Murat"=="Mehmet"){
    console.log ("En Az Birisi Doğrudur.");
}

else {
    console.log ("Bir Tanesi Bile Doğru Değil.")
}
//Şayet koşul sağlıyorsa true döner.
// ! işareti not anlamına gelir. Olumsuzluk verir.

if (! (2 > 6)){
    //normalde 2 küçüktür 6 dan ancak başında not olduğu için true dönecek. Not olumsuzluk verecek.
    console.log ("Bu koşul doğrudur.");
}
//sonuç : eşit değildir.
else {
    console.log ("Bu koşul doğru değildir. Üzgünüm.")
}

//BİRDEN FAZLA İF TANIMLAYABİLİRİZ. ŞAYET BU İSE ŞUNUN ŞU İSE ŞUNU YAP ....
var islem = 9;

if (islem ==1){
    console.log ("İslem 1");
}
else if (islem ==2){
    console.log ("İşlem 2");
}
else if (islem ==3){
    console.log("İşlem 3");
}
else {
    console.log("İşlemlerden Hiçbirisi Değil.")
}
//sonuç : İşlemlerden Hiçbirisi Değil.


//SWITCH YAPMA. YANİ DEĞER ŞU İSE ŞUNU BU İSE ŞUNU YAP GİBİ

var islem = 2;
switch (islem){
    case 1 :
        console.log("İşlem 1");
        break;
    case 2 :
        console.log("İşlem 2");
        break;
    case 3 :
        console.log("İşlem 3");
        break;
    default:
        console.log("İşlemlerden Hiçbirisi Değil.");
        break;    
}

function selamla(){
    console.log("Merhaba, Nasılsın ?");
}
selamla();
//SONUÇ: SELAMLA ÇALIŞIR VE KARŞIMIZA MERHABA, NASILSIN? GELİR.

function millet(isim){
     console.log("Merhaba " + isim);
}
millet("Murat");
//sonuç selamla çalışır ve karışımızı Merhaba Murat gelir.

function toplama (a,b,c){
    console.log ("Toplamları : "  + (a+b+c));
}

toplama (3,5,9);
//Sonuç: toplam 17 olur.

function toplama2 (a,b,c){
   return a+b+c;
}

var toplam = toplama2 (3,5,9);
console.log ("Toplamları2 : " + toplam)
//Sonuç: toplam 17 olur.

var calisan = {
   isim:"Mustafa Murat",
    soyisim:"KESKİN",
    no:12345,
    diller: ["Php", "Java", "C++"],
    adres:{
        cadde:"Kabil",
         sokak:"1254 Sokak"
    },
    isimbilgileri: function(){
                return "Çalışan İsmi: " + this.isim +" "+ this.soyisim;
    }
}

console.log(calisan.isim);
console.log(calisan.soyisim);
console.log(calisan.no);
console.log(calisan.diller);
console.log(calisan.adres.cadde);
console.log(calisan.adres.sokak);
console.log(calisan.isimbilgileri());


var calisan2 = new Object();
    calisan2.isim2 = "Mustafa Mehmet"
    calisan2.soyisim2="COSKUN";
    calisan2.isimbilgileri2=function(){
    return "İsim bilgleri: " + this.isim2 + " " + this.soyisim2
}

console.log (calisan2.isim2);
console.log(calisan2.soyisim2);
console.log(calisan2.isimbilgileri2());

function Worker(isim3, soyisim3, numara3) {
    this.isim3 = isim3;
    this.soyisim3 = soyisim3;
    this.numara3 = numara3;
    this.bilgileriGoster = function() {
          return "isim3 : " + this.isim3 + this.soyisim3 + this.numara3;
    };
}

var Worker1 = new Worker("Mustafa Murat", "COSKUN", 123456);
var Worker2 = new Worker("Mehmet", "KESER", 43484);
console.log(Worker1.bilgileriGoster());
console.log(Worker2.bilgileriGoster());

