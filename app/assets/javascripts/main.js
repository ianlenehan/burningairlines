var app = app || {};

$(document).ready(function () {

  app.router = new app.AppRouter();
  Backbone.history.start();

  var searchFlightsById = function(event) {
    var flightId = $('.searchFlightById').val();
    event.preventDefault();
    var newURL = "/flights/" + flightId;
    app.router.navigate(newURL, true);

  };

  $('#navSearch').on('click', searchFlightsById);
  $('.searchFlightById').on('keydown', function(event){
    if (event.keyCode === 13) {
      searchFlightsById();
    }
  });

});
