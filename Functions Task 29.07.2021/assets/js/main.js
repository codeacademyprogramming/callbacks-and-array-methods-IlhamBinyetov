 "use strict"

// let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// function getFibonacci(n){
//     let num;
//     num = fibonacci[n];
//     return num;
// }
// alert (getFibonacci(7));




// function  fib(n)
//     {
//         /* Declare an array to store Fibonacci numbers. */
//         let f = new Array(n+2); // 1 extra to handle case, n = 0
//         let i;
//         /* 0th and 1st number of the series are 0 and 1*/
//         f[0] = 0;
//         f[1] = 1;
//         for (i = 2; i <= n; i++)
//         {
//             /* Add the previous 2 numbers in the series
//             and store it */
//             f[i] = f[i-1] + f[i-2]; //1 2 3 5 8 13 21 34 55
//         }
//         return f[n];
//     }
//     let n=10;
//     console.log((fib(n)));

function concat(...numbers){
let arr1 = [];
    for (let i = 0; i < numbers.length; i++) {
        arr1.push(numbers[i])
    }
    return(arr1);
} 
const result = concat([1,2,3],4,5,6,10,11,12,13);
console.log(result);


// reverse method  3,4,5,6
 function reverse (array){
    let arr2 = [];
    for (let i=array.length; i>0; i--) {
        arr2.push(array[i-1])
    }
    return (arr2)
 } 
 const result1 = reverse([3,4,5,6]);
 console.log(result1);


 // filter method 1,2,3,4,5
 function numbersBiggerThanThree(n){
    return n>3;
 }
 function filter (array1 = [] , cb){
     let arr3 = [];
     for (let i = 0; i < array1.length; i++) {
         if (cb(array1[i],i, array1 )){
            arr3.push(array1[i]);
         }
     }
     return arr3
 }
 const result2 = filter([1,2,3,4,5], numbersBiggerThanThree)
 console.log(result2);

 //Some 2,4,6,9
 function dividedToThree(m){
     return m%3==0;
 }
 
 function some (array2 = [], cb){
     let arr4 = [];
     for (let i = 0; i < array2.length; i++) {
        if(cb(array2[i])){
            return true
        }
     }
     return false;
 }
const result3 = some([2,4,7,10] , dividedToThree)
console.log(result3);

// Every 9,12,13,14,16,17

function numberBiggerThanTen(a){
    return a>10;
}

function every (array3 = [], cb){
    let arr5 = [];
    for (let i = 0; i < array3.length; i++) {
        if (!cb(array3[i])){
            return false;
        }
        
    }
    return true;
}

const result4 = every ([9,12,13,14,16,17], numberBiggerThanTen)
console.log(result4);

//forEach
function result5(value, index, array){
    console.log(value);
}
// const result5 = (value, index, array) => console.log(value);

function forEach(array4 = [], cb){
    
    for (let i = 0; i < array4.length; i++) {
       cb(array4[i]);
    }
    
}

forEach([2,4,6,7,8], result5);

//map method

function lengthBiggerThanFive(n){
    return  n>5;
}

function mapMethod(array5 = [], cb){
    for (let i = 0; i < array5.length; i++) {

        if(cb(array5[i].length))
        console.log(array5[i].length);
    }
}
const result7 = mapMethod(["Ilham", "Zulfuqar", "Hesenagha"], lengthBiggerThanFive);





//splice
function splice(array5 = [],  start, count){ 
    let newArray = [];
    for (let i = 0; i < array5.length; i++) {
        if(count==0){
            return array5;
        }
        if(count==1){
            for (let i = 0; i < array5.length; i++) { 
                if(i != start){
                    newArray.push(array5[i]);
                }
            } 
            return newArray;
        }
        if(count>1 ){
            for (let i = 0; i < array5.length; i++) { 
                if(i != start && i< start+count - 1){
                    newArray.push(array5[i]);
                } 
            }
            return newArray;
        }
    }
}

const result8 = splice([2,4,6,7,8],2,4)  
console.log(result8);


// function forEach2 (["Bilbo", "Gandalf", "Nazgul"].forEach(item, index, array);{
//     array.forEach()
//     alert(`${item} is at index ${index} of ${array}`);
// }





















 
// Testing
//  let a =5; 
//  let b=a;
//  console.log(a);
//  console.log(b);
//  b=10;
//  console.log(a);
//  console.log(b);

//  let user = {
//      name : "Ilham",
//      surname: "Binyetov"
//  }

//  let user1 = user
//  console.log(user.name);
//  console.log(user1.name);
//  user1.name = "Ulvi"
//  console.log(user.name);
//  console.log(user1.name);
 
//  let arr = [];
//  console.log(arr);

// let fruits = ["Banana"]
// let arr = fruits; 
// console.log( arr === fruits ); 
// console.log(fruits);
// arr.push("Pear"); 
// console.log( fruits ); 
// console.log(arr);

//practice methods
// let arr = ["I", "study", "JavaScript", "right", "now"];
// let newarr = arr.splice(2,2, "salam", "hello");
// alert(arr);
// alert(newarr)



