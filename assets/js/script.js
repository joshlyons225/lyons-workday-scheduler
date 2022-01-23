//tasks global var
var tasks = {};

// today's date global var 
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// saveBtn function
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log("button clicked");

        // create var def for time
        var time = $(this).parent().attr("id");

        // create var def for task description
        var task = $(this).siblings(".description").val();

        // add to localStorage
        localStorage.setItem(time, task);

        // pull previously saved data from localStorage
        tasks = localStorage.getItem(time, task);

        // retrieve saved data for all hours from localStorage
        $("#hour-8 .description").val(localStorage.getItem("hour-8"));
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    })

    // function to set appropriate time naming conventions
    var timeClassUpdate = function() {

        // retrieve current time
        var currentTime = moment().hour();
        console.log(currentTime);
    
        // create function to loop and assign past, present, future classes
        $(".time-block").each(function() {
            var tense = parseInt($(this).attr("id").split("hour")[1]);

            if (tense < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            } else if (tense === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // callbacks
    timeClassUpdate();
})