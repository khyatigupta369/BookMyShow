let noOfSeats = 0;

$(document).ready(function() {
    noOfSeats = 0;
  });

$('._available').on('click', function(event){
    let id = event.currentTarget.id;
    if($("#" + id).hasClass("choosen")) {
        noOfSeats--;
        $("#" + id).addClass("._available");
        $("#" + id).removeClass("choosen");
    } else {
        noOfSeats++;
        $("#" + id).removeClass("._available");
        $("#" + id).addClass("choosen");
    }

    $('.pay').html("Pay Rs. " + noOfSeats * 150);
});