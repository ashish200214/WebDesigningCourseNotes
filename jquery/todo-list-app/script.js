function saveTask() {
    let subList = document.querySelectorAll("#task-div-ul li");
    const tasks = [];

    subList.forEach((li) => {
        tasks.push(li.textContent.trim());
    });

    localStorage.setItem('list', JSON.stringify(tasks));
    console.log("Data is saved.");
}

$(window).on('load', function () {
    let subList = JSON.parse(localStorage.getItem('list'));

    if (subList && subList.length > 0) {
        $("#task-list-div, #sub-task-list, #task-div-ul, .checkbox, .edit-btn").show();

        subList.forEach((task) => {
            $('#task-div-ul').append(`<li class="list bg-white d-inline-block rounded-3 p-2 ms-3">${task}</li>`);
        });
    }
});

$(document).ready(() => {
    $("#add-task-btn").click(() => {
        $("#warning").empty();

        if ($("#task_input").val().trim() === "") {
            $("#warning").append('<p class="text-danger">Please Enter the Task...</p>');
        } else {
            $("#task-div-ul").append(`<li class="list bg-white d-inline-block rounded-3 p-2 ms-3">${$("#task_input").val().trim()}</li>`);
            $("#task-list-div, #sub-task-list, #task-div-ul, .checkbox, .edit-btn").show();
            $("#task_input").val("");

            saveTask();
        }
    });

    $("#task-list-div").on("change", 'input[type="checkbox"]', function () {
        if ($(this).is(":checked")) {
            $(this).next("ul").find("li").addClass("strike");
        } else {
            $(this).next("ul").find("li").removeClass("strike");
        }
    });

    $("#task-list-div").on("click", ".edit-btn", function () {
        let span = $(this).siblings("ul").find("li").last();
        let spanText = $(span).text();
        $(this).replaceWith('<button class="done-btn btn btn-success btn-lg ms-3">Done</button>');
        $(span).replaceWith(`<input class="replace-input done form-control d-inline-block w-50" type="text" value="${spanText.trim()}">`);
    });

    $("#task-list-div").on("click", ".done-btn", function () {
        let input = $(this).siblings("ul").find(".replace-input");
        let inputValue = input.val().trim();

        $(this).replaceWith('<button class="edit-btn btn btn-success btn-lg ms-3">Edit</button>');

        input.replaceWith(`<li class="list bg-white d-inline-block rounded-3 p-2 ms-3">${inputValue}</li>`);

        saveTask();
    });
});
