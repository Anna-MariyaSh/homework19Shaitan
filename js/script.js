//task 1
//arr = ["a", "b", "c", "d"];
//alert(arr[0] + "+" + arr[1]+ "," + arr[2] + "+" + arr[3]);
//task 2
//arr = [2, 5, 3, 9];
//let result = arr[0] * arr[1] + arr[2] * arr[3];
//alert(result);
//task 3
//arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
//alert(arr[1][0]);
//task 4
// let objects = {
//  js:["jQuery", "Angular"],
//   php: "hello",
//  css: "world"
//  };
//  alert(objects.js[0]);
//task 5
// arr = [];
// let str = "x";
// for (let i = 0; i < 10; i++) {
//   arr.push(str);
//   str+= "x";
// }
// console.log(arr);
//task 6
// arr = [];
// let str;
// for (var i=1; i<10; i++) {
// str = '';
//    for (var j=1; j<=i; j++) {
//      str += i;
//      }
// arr.push(str);
// }
// console.log(arr);
//task 7
// function arrayFill(str, nmb) {
//   arr = [];
//   for (var i = 0; i < nmb; i++) {
//    arr.push(str);
//   }
//   return arr;
// }
// console.log(arrayFill(2,8));
//task 8
// arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if(sum >10) {
//     console.log(i);
//     braek;
//   }
// }
//task 9
// arr =[1,2,3,4,5,6,7,8,9,10];
// newArr = [];
// for (i = arr.length; i > 0; i--) {
//     index = arr.length - i;
//     newArr[i] = arr[index];
// }
//
// console.log(newArr);
//task 10
// array =  [[1, 2, 3], [4, 5], [6]];
// function sumNum(arr) {
//   let sum = 0;
//   let arr1 = arr.flat();
//   for (let i = 0; i < arr1.length; i++) {
//   	sum += arr1[i];
//   }
//   return sum;
// }
// console.log(sumNum(array));

//task 11
 array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
 function sumNum(arr) {
   let sum = 0;
   let arrUp = arr.flat().flat();
   for (let i = 0; i < arrUp.length; i++) {
   	sum += arrUp[i];
   }
   return sum;
 }
 console.log(sumNum(array));
