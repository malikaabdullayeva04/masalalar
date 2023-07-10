// function son(x,y) {
//     return x+y;
// }
// console.log(son (11))

// 2
// function minut() {
//     return 1*60
// }
// console.log(minut())

// 3
// function son(int) {
//     return int+=1
// }

// console.log(son(1))

// 4
// function yuza(a,b) {
//     return s= a*b/2
// }
// console.log(yuza(1,2))

// 5
// function yosh(age) {
//     return age*365
// }
// console.log(yosh(4));

// 6
// function kub(a) {
//     return a**3
// }
// console.log(kub(3));

// 7
// function name(arr) {
//     return  arr[0]
// }
// console.log(name([5,6,8,7]))

// 8
// function power(x,y) {
//     return x*y
// }
// console.log(power(10,50))

// 9

// function sekund(arr) {
//     return arr*3600
// }
// console.log(sekund(1));

// 10

// function tomon(tomon1,tomon2) {
//     return tomon1+tomon2-1
// }
// console.log(tomon(2,3))

// 11

// function nom(eni,boyi) {
//     return s=eni*boyi
// }
// console.log(nom(5,4));

// 13

// function  nom(a) {
//     return 'something ' + a;
// }
// console.log(nom )

// 14
// function kvadrat(arr) {
//     return arr*3
// }
// console.log(kvadrat(5));

// 15

// function raqam(x) {
//     return x<=0
// }   
// console.log(raqam(7))

// 16

// function raqam(n) {
//     return  (n - 2) * 180
// }
// console.log(raqam(3));

// 17

// function nom(x,y) {
//     return x*2 + y*3
// }
// console.log(nom(5,4));

// 18
// function ism(malika) {
//     return malika+'bonu'
// }
// console.log(ism('lola'));

// 19

// function son(x,y) {
//     return (x+y)<100
// }
// console.log(son(10,16))

// 20
// function ism(n) {
//     let arr = []
//     for(let i = 1; i<=n; i++){
//         arr.push(i)
//     }
//     return arr
// }
// console.log(ism(6))

// 21
// function nom(tovuq,qoy,sigir) {
//     let a=tovuq*2
//     let b= qoy*4
//     let c= sigir*4
//     return nom*a,b,c

// }
// console.log(nom(1,2,3))


// 22



// 24

// function hisoblash(yutishlar, duranglar, maglubiyatlar) {
//     var ochko = (yutishlar * 3) + duranglar;
//     return ochko;
//   }
  
//   var ochko = hisoblash(5, 2, 1);
//   console.log(ochko);

// 100
// function createElement(el) {
//     const element = el.split('*')[0]
//     const number = +el.split('*')[1]
//     let resoult =''
//     for(let i =0; i<number;i++){
//       resoult += `< ${element}>< ${element}/>`
//     }
//     return resoult
// }
// console.log(createElement("div*2"));

// 102

// function findNum(num, object){
//     if(num >= object['min'] && num <= object['max']){
//         return true
//     }else {
//         return false
//     }
// }

// 103
// function isEqual(num) {
//     let res = String(num ** 2);
//     if (res.slice(-String(num).length) == String(num)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// 104
//function getArr(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i] + i;
//         arr2.push(num);
//     }
//     return arr2;
// }

// 105

// function getArr(arr) {
//     let arr2= []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != "cola" && arr[i] != "fanta") {
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }

//106
// function getNumber(num) {
//     if(Number.isFinite(num)) {
//         return num.toString().length
//     }
// }
// 108
// function sonlar (a ,b){
//     return random.redom(a,b)
// }
// console.log(sonlar(5,9));
// 109
// function getNumber(num) {
//     let num2 = num
//     let a = num.toString().length;
//     let sum = 0;

//     while (num) {
//         let n = num % 10;
//         sum += n**a
//         num = Math.trunc(num/10)
//     }
//     return num2 == sum ? true : false
// }

// 110

// function getCapitalLetter(str){
//     let str2 = str.split('')
//     let sum = 0
//     for(let i =0; i< str2.length; i++){
//         if(str2[i] == str2[i].toUpperCase()){
//             sum+= 1
//         }
//     }
//     return sum
// }
