$(document).ready(()=>{
    $("#show").click(()=>{
        $("#first_para").show()
    })

    $('#hide').click(()=>{
        $('#first_para').hide()
    })

    $('#toggle').click(()=>{
        $('#second_para').toggle()
    })

    $('#animation-btn').click(()=>{
        $('#div1').fadeIn(1000)
        $('#div2').fadeIn(3000)
        $('#div3').fadeIn(5000)
    })

    $('#flip').click(()=>{
        $('#panel').slideToggle()
    })
})

