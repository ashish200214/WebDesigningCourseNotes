const listOfTasks =[]  

  $(document).ready(() => {
    let inputEnteredByUser = "";
    // selecting the button 'Save Task'
    $("#first-div button").on("click", () => {
      console.log("save task button clicked");

      // selecting the input in first-div
      inputEnteredByUser = $("#first-div input").val().trim();
      //checking whether the input is empty or not.
      if (inputEnteredByUser === "") {
        let warning = $(`<p>Please Enter something</p>`).addClass("warning");

        $("#warn-div").append(warning);
      } else {
        //to remove the warning because user entered something in the input.
        $("#warn-div").remove();

        //implementing the task list.
        
          let inputValue = $("#first-div input").val().trim();
          let li = `
          <li class="list-group-item d-flex align-items-center justify-content-between">
              <input type="checkbox" class="form-check-input me-2">
              <span>${inputValue}</span>
              <button  class="edit-btn btn btn-primary">Edit</button>
          </li>`;
          listOfTasks.push(inputValue)   

          //appending into the <ul>
          $("#second-div ul").append(li);

          //clearning the Enter Task
          $('#first-div input').val("")

          //now when user click particular checkbox the strike through is applied to the just right of the paragraph.
          
          //checkbox (next) -> input <strikethrough>

        
      }

    
    });

    //now its time of checkbox.
      $('#second-div').on('change',"input[type=checkbox]",function(){
        if($(this).is(":checked")){
          $(this).next('span').addClass("strike");
        }
        else{
          $(this).next('span').removeClass('strike');
        }
      })

      //now its time for the edit button.

    $('#second-div').on("click", ".edit-btn", function () {
      let span = $(this).siblings('span');  // Find the span near this button
      let text = span.text().trim();
      span.replaceWith(`<input class="form-control me-2" value="${text}" />`);
      $(this).replaceWith(`<button class="btn btn-primary done-btn">Done</button>`)


    
      });


      //now its time for the done button.
      $('#second-div').on("click",".done-btn",function(){
        let inputField = $(this).prev('input')
        console.log(inputField.val())
        $(inputField).replaceWith(`<span>${inputField.val()}</span>`)

          $(this).replaceWith(`<button class="btn btn-primary edit-btn" >Edit</button>`)
      })

      
  });

