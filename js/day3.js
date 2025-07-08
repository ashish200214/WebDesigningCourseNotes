/* Function in JS :
    In C : Function Definition
        datatype function_name(){
            //code
        }
    
    In JS : Function Definition
        function function_name(){
            //code
        }
    
    Definition :
        Function it is a block of code which is used to perform particular task or specific task which is incloses between the curly {} braces.
        Main advantage of the function is reusability.
        We can avoid same login again and again.

    1. Function is datatype in the JS.
    2. Function is non-primitive.
    3. It is mutable.

    ## There are 6 types of the function
    1. named : function which having name.
    2. anonamous : function which doesn't have the function name.
    3. IIF  (Immediately Invoked Function Expression).
    4. function with expression : function is assigned to the variable.
    5. arrow function
    6. nested function (function inside function)
 */

// named function
//definition
function namedFunction(){
    console.log("Hello my function name is namedFunction");
}
//calling
namedFunction()

//addition function
function addition(a,b){
    // ``-> back tick
    // ${} -> string interpolation
    console.log(`Addition of two number is ${a+b}`)
}


addition(10,20)

//Ananomous function or //function with expression  
let greeting = function(name){
    console.log(`Hello ${name}`)
}

// greeting("ashish")

//IIF
(function(){
    console.log("I am IIF")
}
());

//arrow function
let arrow = ()=>{
    console.log("My name is arrow function")
}
arrow()

//function inside function (nested function)
// function arithmetic(a,b,operation_name){
//     function add(a,b){
//         return a+b
//     }

    
//     function sub(a,b){
//         return a-b
//     }
//     function call(){
//         if(operation_name=="add"){
//             return add(a,b)
//         }
//         else{
//             return sub(a,b)
//         }
//     }
//     return call()

// }



//function inside the fucntion 
// function grandparent(){
//     console.log("I am GP")

//     function parent(){
//         console.log("I am Parent");
        
//         function child(){
//             console.log("I am child")
//         }
//         child()
//     }
//     parent()
// }

// grandparent()


let a=Number(prompt("Enter first No : "))  //parseInt()
let b = Number(prompt("Enter second no : "))  //parseInt()

function add(a,b) {
    return(a+b)
}

function sub(a,b) {
    return (a-b)
}
alert(`Addition is ${add(a,b)}`)  //string interpolation


alert("addition is "+add(a,b))  //normal
