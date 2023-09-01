// function Sum(a, b){
//     console.log(a + b)
// }
// Sum(2, 3)

// function declaration
// function Sum(){
//     let a = 2
//     let b = 3
//     console.log(a+b)
// }
// //call the function 
// Sum()

// anonymous function
// (function(fname){
//     console.log("my name is " + fname)
// }('john'))
// ((a, b)=>{
//     console.log(a + b)
// })(2, 3)

// let profile = (function (){
//     alert('hello')
// })
// profile()
// function Greeting(){
//     console.log('hello')
// }

// function isPrime(n){
//     if(n<1){
//         return false
//     }
//     for(let num = 2; num<n; num++){
//         if(n % num ==0){
//             return false
//         }
//     }
//     return true
// }
// n = Number(prompt('number: '))
// // console.log(typeof(n))
// isPrime(n)?console.log('this is a prime number'):console.log('false')

// function calc(a, b){
//     console.log(arguments)

// }
// // a = Number(prompt("number: "))
// // b = Number(prompt('enter a number: '))
// calc(2, 4)

/**
 * form data validation using function and prompt
 * 1) create a function to check for username length
 * 2) if no user name entered ask for the username
 * 3) then proceed to collect the user password
 * 4) welcome the user thereafter
 */

function usernameCheck(fname){
    if(fname.length == 0){
        return false
    }else{
        return true
    }
}
// fname = prompt("enter your firstname: ").trim()
// console.log(fname.length)
while(true){
    fname = prompt("enter your firstname: ").trim()
    feedback = usernameCheck(fname)
    if(feedback == false){
        alert('name field is required')
        // break;
    }else{
        alert('welcome ' + fname)
        break;
    }
}