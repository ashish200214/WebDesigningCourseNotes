/*
## Scopes :

1. Local Scope
2. Global Scope

## Control statement : 
    It is used to control the flow of the execution.

    ## There are two types of control statement :
        1. Decision making or conditional statement :
            When we want to check one or more than one condition then we can use the conditional statement.
                ## Types
                    1. if :
                    2. if-else :
                    3. else-if :
                    4. switch  :
        2. Looping statement
        

*/
let b=11;  //global variable which is declared outside of the function.

//local variable scope
// function disp(){
//     let a=10; //local scope
//     console.log(b) //global we can access anywhere
// }
// console.log(a) local scope variable accessed withing the block only.


// console.log(b) //b is global
// disp()

console.log("=======================================================================")

// If statement : basically used to check the one condition.
// console.log("I want to check whether the b variables value is greater than 10 or not");
// if(b>10){
//     console.log("b is greater than 10")
// }
// else{
//     console.log("b is not greater than 10");
    
// }


// if(age==15){
//     alert("Eligible for SSC")
// }
// else if(age==17){
//     alert("Eligible for HSC")
// }
// else if(age==18){
//     alert("Elibigle for Graduate")
// }
// else{
//     alert("Go And Watch Pogo")
// }

// let number = prompt("Enter Number : ")
// if(number>0){
//     alert("Number is positive")
// }
// else if(number==0){
//     alert("Number is zero")
// }
// else{
//     alert("Number is negative")
// }

// let age = Number (prompt("Enter your age"));
// let test = confirm("Please Confirm Age : ")
// if(test==true){
//     if(age>=18){
//         alert("eligible for voting")
//     }else{
//         alert("not eligible for voting")
//     }
// }
// else{
//     alert("Confirmation cancelled")
// }

let dayNo = Number(prompt("Enter month no:"))
switch(dayNo){
    case 1:
    case 2:
    case 3:
    case 4:
        alert("Summer")
        break
    case 5:
    case 6:
    case 7:
    case 8:
        alert("Monsoon")
        break
    case 9:
    case 10:
    case 11:
    case 12:
        alert("Winter")
        break
    default:
        alert("Please enter no between 1-12")
}


