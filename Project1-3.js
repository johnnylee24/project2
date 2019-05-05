// window.onload = function() {
//document.write("<h4>Hi,<br>"+sessionStorage.uname+"," + sessionStorage.uname+"<h4>");
//
// }
document.write('<h4 class="t4t">Hi,<br>'+sessionStorage.uname+"</h4>");

window.onload = function(){

var mapOptions = {

center: new google.maps.LatLng(40.6312576, -73.9544593),

zoom:15,

mapTypeId: google.maps.MapTypeId.HYBRID

};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({

position: new google.maps.LatLng(40.6312576, -73.9544593),

map: map,

title: "BrooklynCollege"

});

}




