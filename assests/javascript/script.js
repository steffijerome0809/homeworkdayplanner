$("#showTime").html(moment().format('dddd, MMMM Do'))

//an event is written foa specific time and is saved in the local storage
$(".saveIcon").click(function () {
    var time = $(this).parent('tr').prop('id')
    var textInput = $(this).parent('tr').children(".writeEvent").html();

    //console.log("evnt written" + textInput);
    localStorage.setItem(time, textInput);
});

// For each time id the html is retreived and the time is compared with its past or future time
$("tr").each(function () {
    var getEvent = localStorage.getItem(this.id)
    console.log(this.id);
    $(this).children('.writeEvent').html(getEvent);
    compareTime(this.id);
});

//deletes the event written for a specific time

$(".deleteEvent").click(function () {
    var time = $(this).parent('tr').prop('id')
    var deletetext = $(this).parent('tr').children(".writeEvent").html();
    localStorage.removeItem(time, deletetext);
    //deletetext.listview('refresh');

});




// Comapares the event written with the current time and updates to whether its a past or a future event.

function compareTime(timeId) {
    var time = $("#" + timeId).children('.writeEvent')

    // console.log("loading" + ":" + timeId);

    if (((parseInt(moment().format('H'))) > (parseInt(timeId.slice(1))))) {
        // past #c0b9b9
        time.attr("style", "background-color: #c0b9b9;")
    }
    else if (((parseInt(moment().format('H'))) < (parseInt(timeId.slice(1))))) {
        // future #9ae591
        time.attr("style", "background-color: #9ae591;")
    }
    else {
        // current #f36060
        time.attr("style", "background-color: #f36060;")
    }
}