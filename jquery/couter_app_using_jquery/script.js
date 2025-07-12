
$(document).ready(()=>{
    //default count value =0
    let count = 0
    $('#display').text(count)

    //increment button.
    $('#increment').click(()=>{
        count = count+1
        $('#display').text(count)
    })

    //reset button.
    $('#reset').click(()=>{
        count = 0
        $('#display').text(count)
    })

    //decrement button.
    $('#decrement').click(()=>{
        //to maintain the positive value only.
             if(count>0){
            count = count-1
            $('#display').text(count)
        }
    })
 
    //light dark mode.
    $('#toogle-day-night').click(()=>{
        //fadeIn for animation
        $(document.body).toggleClass("darkMode").fadeIn()
    })
})