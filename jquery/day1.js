/*
    There is collection of predefined functions : 
    ready() -method will ensure that the document object will be fully loaded then only start the execution.
*/
// $(document).ready(()=>{
//     $("#close").click(()=>{
//         $("p").hide()

//     });
//     $("#open").click(()=>{
//         $("p").show()
//     })
// })



// $(document).ready(()=>{
//     $("#toggle").click(()=>{
//         $("p").toggle()
//     })
// })

// $(document).ready(
// function apply(){
// $("slide").click(()=>{
//     $("p").slideDown()
// })
// })

$(document).ready(()=>{
    $("#btn1").click(()=>{
        $("p").html("Gawali")
    })

    //empty() method
    $("#btn2").click(()=>{
        $("div").empty()
    })
})

