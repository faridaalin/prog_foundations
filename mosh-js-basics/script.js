// // Function
// // Function performing a task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Farida', 'Alin');

// // Function calculating a value 

// function square(number)  {
//     return number * number;
// }


// console.log(square(2));

// //Arithmetic Operators
// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(x ** y);

// // Increment (++)
// // console.log(++x);

// // console.log(x++);
// // console.log(x);

// // let points = 90;
// // let type = points > 100 ? 'gold' : 'silver';

// // console.log(type);


// // Logical Operators
// // AND (&&) return true if both operands are true
// // let highIncome = true;
// // let googCreditScore = true;
// // let eligibleForLoan = highIncome && googCreditScore;

// // console.log(eligibleForLoan);

// // OR (||) return true if one operands are true
// // let eligibleForLoan = highIncome || googCreditScore;

// // console.log(eligibleForLoan);

// // NOT (!) 
// let highIncome = false;
// let googCreditScore = false;
// let eligibleForLoan = highIncome && googCreditScore;
// console.log('Eligible', eligibleForLoan);

// let applicationRefused = !eligibleForLoan;

// console.log('Application Refused', applicationRefused);

// // Fasly (not a boolean false)
// // Undefined
// // Null
// // 0
// // ''
// // NaN

// // Anyything that is not Falsy is Truthy 

// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// let hour = 10;

// if (hour >= 6 && hour < 12) 
//     console.log('Good morning!');
// else if (hour >= 12 && hour < 18) 
//     console.log('Good afternoon!');
// else 
//     console.log('Good evening');


// let role;
// // let role = 'guest';

// switch(role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');
// }


// // For-in loop
// const person = {
//     name: 'Farida',
//     age: 30
// };


// // Exercise 1
// for (let key in person)
// console.log(key, person[key]);

// let number = max(5, 2);

// function max (arg1, arg2) {
//     return (arg1 > arg2) ? arg1 : arg2;
// }
// console.log(number);


// // Exercise 2- Landscape or Portrait

// function isLandscape (width, height) {
//     return (width > height);  
// }

// isLandscape(500, 200);



// Exercise 3 - Fizzbuzz

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input){
//     const a 
//     const b
//     a = input % 3
//     b = input % 5
//     if(isNaN(input)){
//         console.log("Is not a number")

//     }
//     else if(a === 0 && b === 0){
//         console.log("FizzBuzz")

//     } else if(a == 0){
//         console.log("Fizz")
//     }
// }




// function fizzBuzz (input) {
    
//         if (input % 3 === 0) {
//             console.log("Fizz");
//         } else if (input % 5 === 0) {
//             console.log("Buzz");
//         } else if (input % 3 === 0 && input % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (input % 3 !== 0 && input % 5 !== 0) {
//             console.log(input);
//         }   else if (isNaN(input)){
//             console.log('Not a number');
//         }
//     }   

    // for (input = 1; input <= 100; input++) {
    //     fizzBuzz(input)
    // }



// function fizzBuzz(input){
//     if(isNaN(input)){
//         console.log("Not a number")
//     } else if(input%3 === 0){}
// }


// Exercise 4- Demerit Points


// function checkSpeed (speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
    
//     if (speed < speedLimit + kmPerPoint){
//         console.log('OK');
//         return; 
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//     console.log('License suspended');
//     else 
//     console.log('Points', points);
// }

// checkSpeed(130);

// Exercise 5- Even and Odd Numbers


// function showNumbers (limit) {

//     for (let i = 0; i <= limit; i++){
//         // if (i % 2 === 0) console.log(i, 'EVEN');
//         //     else console.log(i, 'ODD')

//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD'      
//     console.log(i, message);  
    
//     }
// }
// showNumbers(10);

// Exercise 6 - Count Truthy
// const array = [0, 1, 2, 3, '', null];

// function countTruthy (array) {
//     let count = 0;
//     for (let value of array)    
//         if(value)
//             count++;
//     return count;    
// }
// console.log(countTruthy(array))

// Exercise 7 - String Properties
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties (obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'string')
        console.log(key, movie[key]);
    }
}


//17- Exercise 8- Sum of Multiples of 3 and 5

const LIMIT = 10;
console.log(sum(10));

function sum(LIMIT) {

    let total;

    for (let i = 0; i < LIMIT; i++) {
        if((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)) {
            total += i;
        }
    }
    return total;
}

