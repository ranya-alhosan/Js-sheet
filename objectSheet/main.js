// let info={
//     name:'rania',
//     age:24,
//     gender:'female'
// }
// console.log(`my name is ${info.name} ${info.age} ${info.gender} `);
/*-------------------------dot notation------------------------------- */

// let info={
//     name:'rania',
//     age:24,
//     gender:'female'
// }
// info.education='software'
// console.log(info);
/*------------------------bracket notation------------------------------- */

// let info={
//     name:'rania',
//     age:24,
//     gender:'female'
// }
// info['salary']=800
// console.log(info);

/*--------Access the value of a property in an object using dot notation.-------- */
// let info={
//     name:'rania',
//     age:24,
//     gender:'female'
// }
// console.log(info.age);

/*-----Access the value of a property in an object using bracket notation..-------- */

// let info={
//     name:'rania',
//     age:24,
//     gender:'female'
// }
// console.log(info['name']);

/*-----for-in loop to iterate through the properties of an object------- */
// let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// for (let i in info)
//     console.log(`${i} : ${info[i]}`);

/*-----for-in loop to iterate through the properties of an object------- */
//  let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// console.log(Object.keys(info));

/*-----for-in loop to iterate through the properties of an object------- */

//  let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// console.log(Object.values(info));

/*----9. Use the Object.entries() method to get an array of key-value pairs for an object.------ */
// let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// console.log(Object.entries(info));

/*----10. Use the Object.assign() method to merge two objects..------ */
// let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// let personal={
//     numOfSiter:5,
//     order:3
// }
// console.log(Object.assign(info,personal));

/*----11. Use the Object.freeze() method to prevent changes to an object.------ */
// let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// console.log(Object.freeze(info));

/*-Use the Object.seal() method to prevent changes to an object's properties but allows
changes to its values.--- */
// let info={
//     name:'rania',
//     age:24,
//     gender:'female',
//     salary:800,
//     single:true
// }
// console.log(Object.seal(info));