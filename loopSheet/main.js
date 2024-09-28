// for(let i=1 ;i<=10;i++){
//     console.log(i);
// }
/*--------------------------while------------------------------- */
// let number=1
// while(number <= 10){
//     console.log(number);
//     number +=1;
// }
/*--------------------------loop to iterate through an array------------------------------- */
// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++)
// console.log(arr[i]);
/*--------------------------loop to print even numbers from 0 to 10.------------------------- */
// for (let i=0 ;i<=10;i++)
//     if(i%2==0)
//         console.log(i);
/*-------------------loop to print the sum of numbers from 1 to 10.----------------------------- */
// let sum=0;
// for(let i=0;i<=10;i++)
//     sum+=i
// console.log(sum);
/*-------------------for loop to find the largest number in an array------------------------- */
// let max=0
// for(let i=0;i<=10;i++){
//     if(i >max)
//         max=i
// }   
// console.log(max);
/*--------------------------find the smallest number------------------------------- */
// let min=0
// for(let i=0;i<=10;i++){
//     if(i <min   )
//         min=i
// }   
// console.log(min);
/*----------------average of numbers in an array----------------- */
// let arr=[17,39,57,89,33,44,55]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum/arr.length);
/*----------------factorial of a number.---------------- */
// let number=5
// let f=1;
// for(let i=1;i<=number;i++){
//     f=f*i
// }
// console.log(f);
/*----------------Fibonacci sequence up to a given number---------------- */
// let a = 0, b = 1;
// console.log(a);
// for (let i = 0; b <= 10; i++) {
//     console.log(b);
//     b = a + (a = b);
// }
/*----------------prime numbers.---------------- */
// let max = 20; 
// for (let num = 2; num <= max; num++) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(num);
//   }
// }
/*----------------prime numbers.---------------- */
// let max = 20; 

// for (let num = 2; num <= max; num++) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(num);
//   }
// }
/*-------------------------multiplication table----------------------- */
// let num=5
// for(let i=1;i<=10;i++)
//     console.log(`${num} * ${i} =${num*i}`); 
/*----------------print the elements of a 2D array--------------- */
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {  
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);  
//     }
//   }
/*-------------------------array in reverse order---------------------- */
// let arr=[1,2,3,4,5]
// console.log(arr.reverse());

/*-------------------------array in a specific range.---------------------- */
// let arr=[2,3,4,5,,6,8]
// console.log(arr.splice(2,4));
/*-------------------------array with a specific step---------------------- */
// let arr = [1,2,3,4,5];
// let step = 2;   

// for (let i = 0; i < arr.length; i += step) {
//   console.log(arr[i]);
// }

/*-------------------------if a number is in an array--------------------- */
// let num=0
// let arr=[1,34,5,66,7,8,9,0,0,]
// let check=true
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num)
//         check=true
//     else
// check=false}
// console.log(check);
  
/*------------------------find the frequency-------------------- */
// let arr=[1,2,2,2,4,5,6,6]
// let t = 2; 
// let f = 0; 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === t) {
//     f++;
//   }
// }

// console.log(`The frequency of ${t} is: ${f}`);
