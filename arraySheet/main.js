// let arr=[1,2,3,4,5,6]
// arr.forEach(function (index){
// console.log(index);
// })
/*------------------------------------------------- */
// let arr=[2,4,6,8]
// arr.map(myFunction)
// function myFunction(index){
// console.log(index*2);
// }
/*--------------------filter()----------------------------- */
// let arr=[ 1,2,3,4,5,6]
// arr.filter(evenFunction)
// function evenFunction(num){
//     if(num%2==0)
//     console.log(num);

// }
/*----------------------------indexOf()------------------------------- */
// let arr=[2,56,88,97,98]
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(98));
/*------------------------reduce()------------------------- */
// let arr = [1, 2, 4, 5, 6];
// console.log(arr.reduce(sumElement)); 
// function sumElement(sum=0, num) {
//     sum += num; 
//     return sum; 
// }
/*-----------------------sort()-------------------------- */
// let arr=['rania','ibrahim','ahmad','omar']
// console.log(arr.sort());
/*---------------------------split---------------------------------- */
// let str='rabu iufbbr orhdk ifhfj '
// console.log(str.split(" "));
/*------------------------reverse()------------------------- */
// let arr=['rania','ibrahim','ahmad','omar']
// console.log(arr.reverse());
/* ------------------------join()----------------------------- */
// let str=['1','2','3','4','5','66']
// console.log(str.join());
/*-------------------------concat() ------------------------ */
// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// console.log(arr1.concat(arr2));
/*----------------------slice--------------------------- */
// let arr=[1,3,5,6,7,8]
// console.log(arr.slice(0,4));
/*----------------------------------splice()-------------------------------- */
// let arr=[1,2,3,4,5,6]
// console.log(arr.splice(2));

/*-----------------------length-------------------------- */
// let arr=[1,2,3,4,5,6]
// console.log(arr.toString());
/*--------------------------for...in loop to---------------------------------- */
// let arr=[1,2,3,4,5,6]
//  let total=''
// for(let i=0;i<arr.length;i++){
//     total +=arr[i] +','
// }
// console.log(total);
/*---------------------Array.isArray()---------------------------- */
// let arr1=6
// console.log(Array.isArray(arr1));
// let arr2=[2,3,45,5,6,88]
// console.log(Array.isArray(arr2));
/*------------------------from()------------------------- */
// let arrayLikeObject = {
//     0: "a",
//     1: "b",
//     2: "c",
//     length: 3
//   };
//   let arr = Array.from(arrayLikeObject);
//   console.log(arr);  
/*----------------------Array.of()--------------------------- */
// let arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr); 
/*----------------------fill()--------------------------- */
// let arr=[1,2,4,5,6,7]
// console.log(arr.fill(0,0,3));
/*-----------------copyWithin()-------------------------------- */
// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(1, 0, 3);
// console.log(arr);  
