//text() - it will return the text in that element.
$(document).ready(()=>{
    $('#btn1').click(()=>{
        const textContent = $('p').text()
        alert(textContent)
    })

    //html() - it will return the text and tag also.
    $('#btn2').click(()=>{
        const htmlContent = $('p').html()
        alert(htmlContent)
    })

    //val() - it is used to set or get the value in the input field.
    $('#submit').click(()=>{
        const value=$('#name_input').val()
        alert("User Entered Name is : "+value)
    })

    //attr() - it is used to show the value of the attribute.
    $('#btn1').click(()=>{
        const id =$("#btn1").attr("id")
        alert("The id of clicked button is "+id)
    })
})