var currentDayEl = $("#currentDay");
var currentTimeEl = parseInt(moment().format('k'));

currentDayEl.text(moment().format("MMM Do YY"));

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
    
$(".saveBtn").on("click", function () {
    var tempString = $(this.previousElementSibling).val();
        localStorage.setItem("description", JSON.stringify.tempString);
        
})