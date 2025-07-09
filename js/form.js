const h1 = document.createElement("h1")
h1.textContent="Form"
document.body.append(h1)

const form = document.createElement("form")
document.body.append(form)
//name
const inputName = document.createElement("input")
inputName.setAttribute("type","text")
inputName.setAttribute("placeholder","Enter your Name : ")
inputName.setAttribute("id","name")
inputName.style.display="block"
inputName.style.marginBottom="2vh"

//mobileno
const inputMobile = document.createElement("input")
inputMobile.setAttribute("type","tel")
inputMobile.setAttribute("placeholder","Enter Mobile no")
inputMobile.setAttribute("id","mobile")
inputMobile.style.display="block"
inputMobile.style.marginBottom="2vh"
//city
const inputCity = document.createElement("input")
inputCity.setAttribute("type","text")
inputCity.setAttribute("placeholder","Enter your city")
inputCity.setAttribute("id","city")
inputCity.style.display="block"
inputCity.style.marginBottom="2vh"

//select course
const inputSelectCourse = document.createElement("select")
inputSelectCourse.setAttribute("id","course")

//option
const cLang = document.createElement("option")
cLang.setAttribute("value","C")
cLang.textContent= "C"
inputSelectCourse.append(cLang)

const pythonLang = document.createElement("option")
pythonLang.setAttribute("value","Python")
pythonLang.textContent="Python"
inputSelectCourse.append(pythonLang)

const javaLang = document.createElement("option")
javaLang.setAttribute("value","Java")
javaLang.textContent="Java"
inputSelectCourse.append(javaLang)
inputSelectCourse.style.display="block"
inputSelectCourse.style.marginBottom="2vh"
//button submit
 const btn = document.createElement("input")
 btn.setAttribute("value","Submit Here")
 btn.setAttribute("type","submit")

 //email
 const inputEmail = document.createElement("input")
 inputEmail.setAttribute("type","email")
 inputEmail.setAttribute("placeholder","Enter your email")
 inputEmail.style.display="block"
 inputEmail.style.marginBottom="2vh"

form.append(inputName)
form.append(inputMobile)
form.append(inputCity)
form.append(inputSelectCourse)
form.append(inputEmail)
form.append(btn)

//form submit
form.setAttribute("onsubmit","submitButtonClicked()")

function submitButtonClicked(){
    alert(`Name : ${document.getElementById("name").value}`)

    alert(`Mobile No : ${document.getElementById("mobile").value}`)

    alert(`City : ${document.getElementById("city").value}`)

    alert(`Course Selected : ${document.getElementById("course").value}`)
}