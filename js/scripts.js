function Destination(landmarks, time, proTip) {
  this.landmarks = landmarks;
  this.timeofYear = time;
  this.proTip = proTip;
}

var london = new Destination("Tower of London", "Summer", "Be careful when crossing the street!");
var berlin = new Destination("Brandenburg Gate", "Fall", "Go to Mustafa's for a kebob!");
var copenhagen = new Destination("Little Mermaid statue", "Fall", "Visit Viking Museum");
var warsaw = new Destination("Old Town", "Fall", "Bring home a bottle of Polish vodka!");


$(document).ready(function() {
  event.preventDefault();

  $(".london").last().click(function(event) {
    $(".landmarks").text(london.landmarks);
    $(".timeofYear").text(london.timeofYear);
    $(".proTip").text(london.proTip);

    $("#show-locations").show();

  $(".berlin").last().click(function(event) {
    $(".landmarks").text(berlin.landmarks);
    $(".timeofYear").text(berlin.timeofYear);
    $(".proTip").text(berlin.proTip);

    $("#show-locations").show();

  $(".copenhagen").last().click(function(event) {
    $(".landmarks").text(copenhagen.landmarks);
    $(".timeofYear").text(copenhagen.timeofYear);
    $(".proTip").text(copenhagen.proTip);

    $("#show-locations").show();

  $(".warsaw").last().click(function(event) {
    $(".landmarks").text(warsaw.landmarks);
    $(".timeofYear").text(warsaw.timeofYear);
    $(".proTip").text(warsaw.proTip);

    $("#show-locations").show();

  });
});
});
});
});
