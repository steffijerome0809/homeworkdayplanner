$("#showTime").html(moment().format('dddd, MMMM Do'))

$(".saveIcon").click(function () {
    var time = $(this).parent('tr').prop('id')
    var textInput = $(this).parent('tr').children(".writeEvent").html();
    localStorage.setItem(time, textInput);
});

$("tr").each(function () {
    var getEvent = localStorage.getItem(this.id)
    //console.log(this.id);
    $(this).children('.writeEvent').html(getEvent);
    compareTime(this.id);
});

function compareTime(timeId) {
    var time = $("#" + timeId).children('.writeEvent')

    console.log("loading" + ":" + timeId);

    if (((parseInt(moment().format('H'))) > (parseInt(timeId.slice(1))))) {
        // past #c0b9b9
        time.attr("style", "background-color: #c0b9b9;")
    }
    else if (((parseInt(moment().format('H'))) < (parseInt(timeId.slice(1))))) {
        // future #9ae591
        time.attr("style", "background-color:green;")
    }
    else {
        // current #f36060
        time.attr("style", "background-color: #f36060;")
    }
}