// console.log("hello ashish");
//looping 

// 1. initialization
// 2. condition
// 3. updation
//for loop. : when no of interation is know then use the for loop.
for(i=0;i<10;i++){
    console.log("Happy birthday for loop"+i);
    
}
console.log("===================");

//while loop. : when no of interation we dont know then we use the while loop.
j=1
while(j<=10){
        console.log("Happy birthday while loop"+j);

    j++
}

// = -> assignment operator
// == -> comparison operator (check only value)
// === -> identical operator (check value as well as type)

console.log("===================");


//do while loop : when we have to execute the loop at once without cheking the condition.

k=1
do{
        
    console.log("Happy birthday do while loop"+k);

    k++;   
}
while(k<=10);

//prime number
number = Number(prompt("Enter your number"))

function checkPrime(number){

if(number==1){
    alert("Not prime Number");
    return
}
    for(i=2;i<number;i++){
        if(number%i==0){

            alert("Not prime number")
            return
        }
    }
    alert("Prime number")
    

}

checkPrime(number)
// initilization
// do{

//     //code
//     //updation
// }
// while(condition)