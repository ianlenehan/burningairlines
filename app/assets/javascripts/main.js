var app = app || {};

$(document).ready(function () {

  app.router = new app.AppRouter();
  Backbone.history.start();

  var newURL = "";
  var searchFlightsById = function(event) {
    var flightId = $('.searchFlightById').val();
    event.preventDefault();
    if (window.location.pathname === "/search"){
      var newURL = "flights/" + flightId;
      app.router.navigate(newURL, true);
    } else{
      var newURL = "/search#flights/" + flightId;
      window.location = newURL;
    }
  };

  $('#navSearch').on('click', searchFlightsById);
  $('.searchFlightById').on('keydown', function(event){
    if (event.keyCode === 13) {
      searchFlightsById(event);
    }
  });
});
