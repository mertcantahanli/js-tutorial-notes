// alert ("mert");

// var name='mert';
// console.log(name);

// const number='123'; //sonradan değiştirilmeyecek değişkenler const ile tanımlanır.
// console.log(number);

//ders3 değişken tipleri

//primitive types

//string

// let firstname='mert';
// console.log(typeof firstname); // konsola türünü yazar örn: string

// number
// let age=20;
// console.log(typeof age);  //konsola number yazar typeof buna yarar.

//******************************************************************** */
// doğum yılına göre yaş hesaplama

// var birthday=1998;
// console.log(new Date().getFullYear()-birthday);

/**************************************************************************** 
 var a=5;
 var b=5;

 val = a===b; //hem değer kontrolü hem tip kontrolüne yarar
 console.log(val); */

/***************************************************************************** 
 kilo indeksi hesaplama örneği
 var canboy=170;
 var adaboy=180;
 var cankg=70;
 var adakg=60;

 indekscan=cankg/canboy;
  indeksada=adakg/adaboy;

 console.log(indekscan);
 console.log(indeksada); */
/***
var dt= new Date();
 console.log(dt);
 console.log(dt.getMonth());
 console.log(dt.getDate());  */

//  var x=10;

//  console.log(typeof x);

/****************************************************** */
// örnek

// var num = 15.123456789;

// //sadece üç basamk almak için
// console.log(num.toPrecision(3));

// //1,2,10,56,20 sayılarının en küçüğü ve en büyüğü bulma
// console.log(Math.min(1, 2, 10, 56, 20));
// console.log(Math.max(1, 2, 10, 56, 20));

// //maaş hesaplama top maaş:3700; mesai:10.3; 42 saat mesai yaprsa top maaş?

// //top maaş %25 kesinti sonrası top maas?f

// var btopmaaş = 3700 + (10.3 * 42);

// console.log("agustos ayı brüt maas " + btopmaaş);

// var maaş = btopmaaş - (btopmaaş * (1 / 4));

// console.log("agustos ayı topmaaş " + maaş);

/******************************************************* */

// //STRİNGLER BİRLEŞTİRME CONCATENATİON

// const firstname = "mert";
// const lastname = "tahanlı";

// x = firstname + lastname;
// console.log(x);
// // stringler birleştirme metodu concat 
// val = firstname.concat(' ', lastname);
// console.log(val);

/******************************************************* */

//ÖRNEKLER  
// cümle kaç karekterlidir.
// var cümle = "ali ata bak mert-can";
// var url = 'http://mertcantahanli.com';
// console.log(cümle.length);

// //cümle kaç kelimeden oluşuyor.
// console.log(cümle.trim().split(' ').length); //-trim paragrafın başında ve sonunda ki boşlukları siler
// //-split verilen karakteri cümle içerisinde bulur ve önceki sonrki kelimeleri dizi yapar.

// //tüm cümleyi büyük harf yap. küçük için lowercase büyük için uppercase
// console.log(cümle.toUpperCase());
// // '-' karakterini silin.
// //console.log(cümle.replace('-', '')); // replace içerisine girilen ilk karakter ile ikinci girilen karakter değiştirilir.
// console.log(cümle.replace(/-/g, '')); // / /G ile cümledeki bütün -ler için aynınısı yapar.
// // url içinden str kısmını çıkar.
// var str = 'http://';
// console.log(url.substr(str.length));
// console.log(url.slice(str.length)); //slice ve substr aynı işlevi yapar. girilen indexler arası karakterleri çıkarır.

// // url nin neyle başladığını bulalım.
// console.log(url.startsWith('http'));
// console.log(url.startsWith('https')); // startswith ile başlangıcın doğru olup olmadığını kontrol ederiz.

// //url '.com ' ifadesi içeriyor mu;
// console.log(url.indexOf('.com')); //kaçıncı indekste başladığını gösterir
// console.log(url.includes('.com')); //cümle içinde olup olmadığını true false olarak döndürür;

/***************************************************************************** */

//ARRAYS DİZİLER
//get array
// let names = ['mert', 'can', 'tahanlı'];
// let mix = ['mert', 'can', 1998, 2021, ['firat', 'üni']];
// let years = [2021, 1895, 1965, 2018, 1946]
// console.log(mix);
// //set array
// mix[2] = 'tahanlı';
// console.log(mix);

// mix.push('can'); //push ile sona ekleme
// mix.unshift(2018); //unshift ile başa ekleme
// console.log(mix);

// mix.reverse(); //diziyi ters çevirir
// console.log(mix);

// years.sort(); //dizi içerisindekileri sıralar
// console.log(years);

// console.log(names.concat(years)); //concat dizileri birleştirir.

// //names.splice(2(index), 1(kaçtanesi silinecek), 'mahmut'(eklenecek eleman));
// names.splice(2, 1, 'mahmut');

// console.log(names);

// //filter,find 

// function over18(years) {
//     let age = 2018 - years;
//     return age >= 18;
// }
// console.log(years.find(over18)); //koşulu sağlayan ilk eleman yazılır
// console.log(years.filter(over18)); //koşulu sağlayan bütün elemanlar sıralı şekilde getirilir.

//DİZİLER UYGULAMA ÖRNEKLERİ

// let oto = ['bmw', 'mercedes', 'opel', 'mazda'];
// //kaç elemanlı
// console.log(oto.length);

// //dizinin ilk ve son elemanı nedir?
// console.log(oto[0]);
// console.log(oto[oto.length - 1]);

// //renault değerini dizinin sonuna ve toyotayı başına ekleyin
// oto.push('renault');
// oto.unshift('toyata');
// console.log(oto);

// //renault değerini ve toyota değerini siliniz.
// oto.splice(length - 1, 1);
// oto.splice(0, 1);
// console.log(oto);

// //dizi elemanlarını ters çeviriniz
// oto.reverse();
// console.log(oto);

// //elemanları alfabetik sıralayın.
// oto.sort();
// console.log(oto);

// //opel değeri dizinin elemanı mıdır?
// console.log(oto.indexOf('opel'));
// console.log(oto.includes('opel'));

// //var str="chevrolet, dacia"; ifadesini diziye çeviriniz.
// var str = "chevrolet, dacia";
// var oto2 = str.split(','); //virgülle ayrılan kısımları diziye atar.
// console.log(oto2);

// //oto ve oto2 birleştir.
// console.log(oto.concat(oto2));
/* **************************************************************************************** */

/* İF ELSE KOŞUL YAPISI */

// let id = '23213213';

// if (typeof id !== 'undefined') {
//     console.log('id: ' + id);
// } else {
//     console.log('no id');
// }

// /* SWİTCH CASE YAPISI */

// let kategori = 'bilgisayar';

// switch (kategori) {
//     case 'telefon':
//         console.log('telefon kategorisi aktif');
//         break;

//     case 'bilgisayar':
//         console.log('bilgisayar kategorisi aktif');
//         break;
//     default:
//         console.log('yanlış kategori');
//         break;
// }

// /* örnek uygulama */

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'pazar';
//         break;
//     case 1:
//         day = 'pazartesi';
//         break;
//     case 2:
//         day = 'salı';
//         break;
//     case 3:
//         day = 'çarşamba';
//         break;
//     case 4:
//         day = 'perşembe';
//         break;
//     case 5:
//         day = 'cuma';
//         break;
//     case 6:
//         day = 'cumartesi';
//         break;


// }

// console.log(`Bugün günlerden ${day}`);

/* *********************************************************************************** */
/* OBJECT LİTERALS */

// let person = {
//     firstname: 'mertcan',
//     lastname: 'tahanlı',
//     age: 7,
//     getBirthYear: function() {
//         return 2021 - this.age;
//     }
// };

// val = person;
// val = person.getBirthYear();
// console.log(val);

/* ************************************************************************************* */

/* DÖNGÜLER */

// for-in dögüsü

// let cars = ['BMW', 'MERCEDES', 'TOYOTA'];

// for (let i in cars) {
//     console.log(`index: ${i} value: ${cars[i]}`);
// }
// // map : return an array

// let numbers = [1, 2, 3, 4];

// let kare = numbers.map(function(n) {
//     return n * n;//karelerini alır
// });
// console.log(kare);

//SAYI TAHMİN OYUNU

// let sayi = Math.floor(Math.random() * 10 + 1);
// var hak = 5;
// var tahmin;


// while (hak > 0) {
//     hak--;
//     tahmin = Number(prompt('bir sayı giriniz. '));

//     if (sayi == tahmin) {
//         console.log('tebrikler bildiniz');
//         break;
//     } else if (sayi > tahmin) {
//         console.log('yukarı');
//     } else {
//         console.log('aşağı');
//     }
//     if (hak == 0) {
//         console.log('hakkınız bitti');
//     }
// }

/* ************************************************************************************************** */
/* FONKSİYONLAR */

// function yashesapla(dogumyili) {
//     return 2021 - dogumyili;
// }

// let val = yashesapla(1998);


// /* ******************************************************************* */
// function emekliyekaçyılkaldı(dogumyili = 0, isim = '-') { //eğer parametrelere değer girilmezse başta girdiğimiz değeri kullanır.
//     let yas = yashesapla(dogumyili);
//     let emeklilik = 65 - yas;

//     if (emeklilik > 0) {
//         console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);

//     } else {
//         console.log('zaten emeklisiniz')
//     }
// }

// emekliyekaçyılkaldı(1998);
// /* ********************************************************************** */
// /* ARGUMENTS */

// function all() {
//     var top = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         top += arguments[i];

//     }
//     return top;
// }
// console.log(all(20, 30, 40, 10));
// /* *********************************************************************************************************** */
// /* SCOPES */
// /* GLOBAL SCOPES */
// /*tslint:disabled*/
// var name = 'mert';
// var age = '25';

// function logname() {
//     var name = 'mert can';
//     var age = '22';
//     console.log('functio scope', name, age);
// }
// // console.log(age); age fonksiyon içerisinde olduğu için dışarıda tanımsız değer döndürür.


// if (true) {
//     var age = '28';
//     console.log('BLOCK SCOPE', name, age);
// }
// console.log(age); //İF İÇERİSİNDEKİNİ ALDILAR.
// logname();

// console.log(name);

// //FONKSİYONLAR KENDİ SCOPE LARINI OLUŞTURUR.
// //BLOCKLAR YENİ SCOPE OLUŞTURMAZ.
// /* *********************** */
// console.log('***********************');


// if (true) {
//     var model = 'bmw';
//     let year = '2015';
//     const color = 'black';
//     console.log('BLOCK SCOPE', model, year, color);
// }

// console.log(model);
// // console.log(year); //let keywordüne sadece block içinde erişilir
// // console.log(color); //const keyw

// var x = 10;
// console.log(--x);

/* ******************************************* */
/* örnek vize final hesaplama */

// function ort(vize, final) {
//     vizeyzd = (vize * (0.4));
//     finalyzd = final * (0.6);
//     console.log(vizeyzd);
//     var ort = vizeyzd + finalyzd;
//     console.log(ort);
//     if (ort > 50 && final < 50) {
//         console.log('geçti');
//     } else {
//         console.log('kaldı');
//     }
// }
// ort(90, 60);

// function bulma(sayı) {
//     var yeni = sayı.sort();
//     console.log(yeni);
//     console.log('en küçüksayı', yeni[0]);
//     console.log('en büyük sayı', yeni[yeni.length - 1]);

// }

// bulma([10, 20, 15, 35, 25, 60]);

/* faktoriyel hesaplama */

// var x = 1;

// function fakt(sayi) {
//     for (let i = 1; i <= sayi; i++) {

//         x = x * i;
//     }
//     return x;
// }
// console.log(fakt(5));


/* ************************************************************************************* */
/* DOM VE EVENTLER */

/* TEKİL ELEMENT SEÇİMİ */
// Header id li kısmı çağırıp onun üzerinde işlem yapma
// let val = document.getElementById('header');
// val.style.fontSize = '15px';
// console.log(val);

let val = document.getElementById('text').innerText = 'mert';