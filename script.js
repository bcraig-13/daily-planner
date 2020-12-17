var currentDayEl = $("#currentDay");
currentDayEl.text(moment().format("MMM Do YY"));
var currentTimeEl = parseInt(moment().format('k'));

//get local storage on page load
//find way to save each line in local storage


for(var hourCount = 9; hourCount < 18; hourCount++) {
    var hourGrabEl = $("#hour-" + hourCount);
    if(hourCount < currentTimeEl) {
        //make gray
        hourGrabEl.attr("class", "row time-block past")
    }
    else if(hourCount === currentTimeEl) {
        //make red
        hourGrabEl.attr("class", "row time-block present")
    }
    else {
        //make green
        hourGrabEl.attr("class", "row time-block future")
    }
}
// V--Possible solution?
// $(".saveBtn").on("click", function () {
//     var tempString = $(this.previousElementSibling).val();
//     var hourTemp = $(this).val();
//     var temp object
//     localStorage.setItem("description", JSON.stringify(tempString));
// })

$(".btn").on("click", function() {
    var save = document.getElementsByTagName("textarea").value;
    localStorage.setItem("save", save);
})


//Select save btn for 0900 and listen for clicks
//Select content from 0900 block
//Move selected content to local storage
//0900 key, moved to local storage

//On page load, retrieve local storage from 0900 block
//If something was retrieved, then set value
//Set the value of the 0900 text area

