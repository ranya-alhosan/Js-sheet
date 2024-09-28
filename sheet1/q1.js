// let cash =1000;
// let liabilities=500;
// let flowRatio=cash/liabilities;
// console.log(`The Flow Ratio ${flowRatio}`);

//next  equation 

// let revenues=1000;
// let expenses=500;
// let netIncome=revenues-expenses;
// console.log(`The Net Income ${netIncome}`);

//next equation Total Assets=Liabilities+Equity

// let liabilities=1000;
// let equity=500;
// let totalAssets=liabilities+equity;
// console.log(`The Total Assets ${totalAssets}`);


//next equation: Net Income=Profit Margin×Sales
// let  profit=1000;
// let sales=500;
// let netIncome=profit*sales;
// console.log(`The  Net Income ${netIncome}`);


//Average=Sum of Numbers/ Number of Numbers
// let arrayOfNumber=[7,2,9];
// let sum=0;

// for(let i=0 ;i<arrayOfNumber.length;i++)
// {
//   sum+=arrayOfNumber[i];
// }
// let avg=sum/arrayOfNumber.length;
// console.log(avg);



//Equation: Discounted Price=Price×(1−Discount Rate)
// let price=150;
// let discountRate=30/100;
// let discount=price*(1-discountRate);
// console.log(` The discount =  ${discount}`);


//Equation: 18<Age<30
// let age=20;
// let checkAge= age>18 && age<30;
// console.log(checkAge);

//Equation: Exponential
// let number1=4;
// let number2=3
// let exponential=number1**number2;

// console.log(exponential);


//Remainder=Number1modNumber2
// let number1=2;
// let number2=10;
// let remainder=number1%number2;
// console.log(remainder);

 
/* ----------------------------------------------------------------------------------- */

// console.log(typeof(100));
// console.log(typeof(73.9));
// console.log(typeof(NaN));
// console.log(typeof("Water"));
// console.log(typeof(false));
// console.log(typeof(9 != 11));
// console.log("Orang" + "e");
// console.log("Orange" - "s");
// console.log("4" + "8");
// console.log("4" - "8");
// console.log("name" + 3);
// console.log("name" - 3);
// console.log(82 * "word");
// console.log(1 + "hello");
// console.log("hello" + 1);
// console.log(1 + true);
// console.log("hello" + true);
// console.log(typeof (Infinity));
// console.log(1 == '1');
// console.log(1 === '1');
// console.log("9" - 3);


/* ----------------------------------------------------------------------------------- */

// let text="Welcome to Orange";
//  console.log(text.toUpperCase());
//  console.log(text.toLowerCase(  ));
//  console.log(text.length);
//  console.log('Welcome to "Orange"');
//  console.log(text.concat(" ",'Jordan'));
//  console.log(text.replace("Welcome","Hello"));
//  console.log(text.replace("to","TO"));

/* ----------------------------------------------------------------------------------- */

// let text="raniar";
// let firstLetter=text[0];
// let text2=text.slice(1,text.length);
// let replaceFirst=firstLetter +text2.replaceAll(firstLetter,'*')
// console.log(replaceFirst)

/* ----------------------------------------------------------------------------------- */
// let array1=['Coding', 'Academy', 'By', 'Orange'];
// array1.push('Jordan')
// console.log(array1);
// array1.pop();
// array1.pop();
// array1.pop();
// console.log(array1);
// array1=['Coding', 'Academy', 'By', 'Orange'];
// array1.unshift('To');
// array1.unshift('Welcome');
// console.log(array1);
// array1=['Coding', 'Academy', 'By', 'Orange'];
// array1.shift();
// console.log(array1);
//  array1=['Coding', 'Academy', 'By', 'Orange'];
//  let all=array1.join(" ");
//  console.log(all);
//  array1=['Coding', 'Academy', 'By', 'Orange'];

// console.log(array1.slice(0,1)+ " "+array1.slice(3));

/* ----------------------------------------------------------------------------------- */
// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// vegetables.pop()
// console.log(vegetables)
// fruit.shift();
// console.log(fruit)
// fruit = ["banana", "apple", "orange", "watermelon"];
// let indexOfOrange=fruit.indexOf('orange');
// fruit.push(indexOfOrange);
// console.log(fruit)
// fruit = ["banana", "apple", "orange", "watermelon"];
// vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// let vegetablesLength=vegetables.length;
// vegetables.push(vegetablesLength);
// console.log(vegetables)
// let food=fruit.concat(vegetables);
// console.log(food);
// delete food[4];
// delete food[5];
// console.log(food);
// food=fruit.concat(vegetables);
// console.log(food.reverse())
// let fruitAll=food.join(" ");
// console.log(fruitAll)
// let removesElement=food.slice(4,6)
// console.log(removesElement);


/* ----------------------------------------------------------------------------------- */

// function convertToArray(str){
//  return str.split(" ");
// }
// let myText="It's my first sheet in JavaScript";
// let myArray=convertToArray(myText);
// console.log(myArray);

// /* --------------- */

// function convertToStar(number){
//     return number.replace(/^.{7}/,'*******');

// }
// let number='0797654783';
// console.log(convertToStar(number))

// /* --------------- */


// function hiddenEmail(email){
// let indexOfSign=email.indexOf('@')

// return email.substring(0,3)+'.......'+email.substring(indexOfSign);
// }
// let email='ranyaalhosan987@gmail.com'
// console.log(hiddenEmail(email))

// /* --------------- */
// function convertToUpper(myText){
//     let eachWord=convertToArray(myText)
//     let totalText=""
//     for(let i=0;i<eachWord.length;i++){
//     totalText +=eachWord[i].at(0).toUpperCase()+eachWord[i].slice(1)+" "
//     }
//     return totalText;
// }
// console.log(convertToUpper('hello to our academy'))
// /* --------------- */
// function flipNumber(number){
//     let convertToString=number.toString()
//     let words = convertToString.split("").reverse()
  
//      return words.join("");

// }
// console.log(flipNumber(6789))
// /* --------------- */
// function swap(number1,number2){
//     let temp
//     temp=number1
//     number1=number2
//     number2=temp
//     console.log( number1 ,number2);
// }
// swap(5,6);
// /* --------------- */
// function deleteSpecificItem(str,index){
// let deleteItem=str.at(index)
// return str.replace(deleteItem,'')
// }
// console.log(deleteSpecificItem('Rarnsia',2))
// /* --------------- */
// function  mergesTwoStrings(str1,str2){
//     return str1.slice(1) +" "+str2.slice(1)   
// }
// console.log(mergesTwoStrings('arania','aibranim'));
// /* --------------- */

// function specificCharacter(str,char){
// let isFound= str.includes(char);
// return isFound;

// }
// console.log(specificCharacter('rania','f'))
// /* --------------- */

// function alphabetically(str) {
//     const charArray = str.split(''); 
//     charArray.sort();
//     const sortedStr = charArray.join('');
//     return sortedStr;
// }
// console.log(alphabetically('rania'));


/* ----------------------------------------------------------------------------------- */
// let yearOfBirth=Number(prompt('Enter your year of birth'))
// function calcAge(yearOfBirth)
// {
//     return 2024-yearOfBirth
// }
// let candidateAge=calcAge(yearOfBirth)
// if(candidateAge>30){
//     console.log('you are not eligible. You may join other programs');
// }else if (candidateAge>18 && candidateAge<30){
//     console.log("You are eligible. Start your application")
// }else if(candidateAge<18){
//     console.log("You may join the kids' program")
    
// }else if(candidateAge>60){
//     console.log(" You may join the seniors’ program.")
    
// }
