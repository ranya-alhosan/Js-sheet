// function findSmallest(arr) {
//     let smallestValue = Math.min(...arr);
//     return smallestValue;
//   }
//   let arr2=[4,5,6,7,7]

//   console.log(findSmallest([50, 60, 7, 8])); 

/*-----------------------------------------------------------*/
// function alpha(str){
//     let arr1= str.split('')
//      arr1.sort();
//      return arr1.join()
// }
// console.log(alpha("frgavgh"));

/*-----------------------------------------------------------*/
// function factorial(n){
//     if(n>1){
//         let m=1;
//         for(let i=1;i<=n;i++){
//          m*=i
//         }
//         return m;
//     }else{
//         return;
//     }

// }

// console.log(factorial(8));

/*-----------------------------------------------------------*/
// function evenOdd(num){
//     if(num%2==0){
//         console.log("it's even number");
//     }
//     else {
//         console.log("it's odd number");
//     }
// }
// evenOdd(5)
// evenOdd(10)

/*-----------------------------------------------------------*/
// function removeOdd(arr) {

//     return arr.filter(function(number) {
//       return number % 2 === 0;
//     });
//   }
  
 
//   const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenNumbersArray = removeOdd(originalArray);
//   console.log(evenNumbersArray); 
  
//   const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = [];

// function  removeOdd(arr){
//     const evenNumbers = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 === 0) {
      
//           evenNumbers.push(arr[i]);
//         }
//       }
//       return evenNumbers;
      
// }
// console.log(removeOdd([1, 2, 3, 4, 5])); 

/*-----------------------------------------------------------*/
// function typeOfData(arr){
//     let intArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(typeof (arr[i]) ==='string')
//         {
           
//         }else if(typeof (arr[i]) == 'number'){
//             intArr.push(arr[i]); 

//         }
            
//     }
//     return intArr;
// }

// console.log(typeOfData(['rania',5,'ahmad',8,0,37]));

/*-----------------------------------------------------------*/
// function goingBack(num){
//     let sum=0
//     for(let i =0;i<=num;i++){
//         sum+=i
//     }
//     return sum;
// }
// console.log(goingBack(8));
/*-----------------------------------------------------------*/
// function arrayInfo(arr){
//     let newArr=[]
//     newArr.push(Math.max(...arr))
//     newArr.push(Math.min(...arr))
//     newArr.push(arr.length)
//     let sum =0
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i]
//     }

//     newArr.push(avg=sum/arr.length)
// return newArr;
// }
// console.log(arrayInfo([7,13,3,77,100]));
/*-----------------------------------------------------------*/
// function romanConvert(number) {
//     const romanLookup = [
//         { value: 1000, symbol: 'M' },
//         { value: 900, symbol: 'CM' },
//         { value: 500, symbol: 'D' },
//         { value: 400, symbol: 'CD' },
//         { value: 100, symbol: 'C' },
//         { value: 90, symbol: 'XC' },
//         { value: 50, symbol: 'L' },
//         { value: 40, symbol: 'XL' },
//         { value: 10, symbol: 'X' },
//         { value: 9, symbol: 'IX' },
//         { value: 5, symbol: 'V' },
//         { value: 4, symbol: 'IV' },
//         { value: 1, symbol: 'I' }
//     ];
    
//     let result = ''; 

//     for (let i = 0; i < romanLookup.length; i++) {
       
//         while (number >= romanLookup[i].value) {
//             result += romanLookup[i].symbol;  
//             number -= romanLookup[i].value;  
//         }
//     }

//     return result;  
// }

// console.log(romanConvert(1989));  
/*-----------------------------------------------------------*/
// function numberOfWord(str){
//     let arr=str.split(" ")
//     return arr.length
// }
// console.log(numberOfWord('rania ibrahim alhosan'));

/*-----------------------------------------------------------*/
// function multiplyByLength(arr){
//     let newArr=[]
//     for(let i=0;i<arr.length;i++)
//     {
//      newArr.push(arr[i]*arr.length)
//     }
// return newArr;
// }
// console.log(multiplyByLength([2,4,5]));
/*-----------------------------------------------------------*/
// function checkEnding(str1,str2){
//     return str1.includes(str2);


// }
// console.log(checkEnding('rania','ra'));
/*-----------------------------------------------------------*/
// function doubleChar(str) {
//     let result = ''; 
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + str[i];  
//     }
//     return result;
// }

// console.log(doubleChar('rema'));  
/*-----------------------------------------------------------*/
// function findIndex(array, element) {
//     return array.indexOf(element)+1;
// }
// console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));
/*-----------------------------------------------------------*/
// function getAbsSum(arr)
// {
//     let sum=0
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i]
//     }
//  return Math.abs(sum)
// }
// console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));