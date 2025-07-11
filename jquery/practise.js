$(document).ready(()=>{
    // hide
    $('#click').click(()=>{
        $('p').hide()
    })

    //toggle
    $('#toggleBtn').click(()=>{
        $('p').toggle()
    })

    //mouse enter (hover) .
    // $('#mouse').mouseenter(()=>{

    // })

    // //mouse leave (hover)
    // $('#mouse').mouseleave(()=>{
        
    // })
    // using on method we can apply multiple event at same time.
    
    // on method takes an object , where the key is the event (click,mouseleave,mouseenter) and value is the function.

    $('#mouse').on({
        mouseenter:()=>{
            document.body.style.backgroundColor="Grey"

        },
        mouseleave:()=>{
            document.body.style.backgroundColor="white"

        }
    })

    //mouse down (button is clicked any mouse button)
    $('h4').mousedown(()=>{
        document.body.style.backgroundColor="Red"
    })

    $('h4').mouseup(()=>{
        document.body.style.backgroundColor="White"
    })

    $('#in1').focus(()=>{
        $('#in1').css('background-color','yellow')
    })

    $('#in1').blur(()=>{
        $('#in1').css('background-color','green')
    })

})
