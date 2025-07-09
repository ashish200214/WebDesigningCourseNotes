/*
    BOM (parent)
         |
         |
   DOM  (child)
         |
         |
   HTML document
    |           |
    |           |
   Head        Body
    |           |
    |           |
  1. title   
  2. meta
## DOM :
    1. Document object model.
    2. It is the child of the BOM(browser object model)(window of the browser).
    3. It is used to manipulate the html element.


## DOM method
    1. document.getElementById()
    2. document.getElementsByClass()
    3. document.getElementsByTagName()
    4. document.querySelector()
    5. document.querySelectorAll()


## Object :
    1. In real world : Object is any real world entity which having any physical existence.
    2. In programming world : Object is one instance (memory) of class.
    3. object is non-primitive data type which is mutable.
    4. we can modify after creation.
    5. we can store data in the format of key:value , which is encloses in the curly braces. 
    
    ## There are two ways to declare object :
        1. literals :
        let emp = {
            name:"abcd",
            id:1234
        }

        2. constrcutor function : new Object()

        IMP 
        // temporal dead zone
        //Hoisting
        // stirng method
        number method
        array
        math
        data and time method
        lexical scope 
        closure
        spread operator
        rest operator
        local storage
        async await
    */

// const mainHeading = document.getElementById("h1")
// mainHeading.style.backgroundColor="Red"
// mainHeading.style.color="White"
// mainHeading.style.textAlign="Center"

// const subheading = document.getElementById("h2")
// subheading.style.backgroundColor="Aqua"
// subheading.style.textAlign="Center"

// const spanClasses= document.getElementsByClassName("p11")

// for(let i=0;i<spanClasses.length;i++){
//     spanClasses[i].style.backgroundColor="Aqua"
//     spanClasses[i].style.textAlign="Center"
//     spanClasses[i].style.color="Red"



// }

const student={
    id:1,
    name:"Ashish",
    rollNo:21,
    schoolName:"ABCD School",
    address:{
        roomNo:101,
        apartmentName:"AS Apartment",
        city:"Pune",
        pincode:411213
    }
}

// console.log(student)

// console.table(student)

//constructor object
const emp = new Object({
    name:"Ashish",
    id:101,
    salary:"10000$"
})

console.table(emp)




function btnmethod(){
    open("Hello I am ashish and these is the open()")
}
