var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  events: {
    'click #search_save' : 'searchFlights',
    'click .result_row' : 'viewFlight',
    'keypress input' : 'checkForEnter'
  },

  tagName: 'div',

  checkForEnter: function (e) {
    app.ENTER_KEY = 13;
    if (e.which === app.ENTER_KEY) {
      this.searchFlights();
    }
  },

  searchFlights: function () {
    var origin = this.$el.find('#origin').val().toUpperCase();
    var destination = this.$el.find('#destination').val().toUpperCase();

    var flights = new app.Flights();

    $('#flights_list').css({"opacity" : "1"} );

    $('tbody').empty();

    var view = this;
    var params = {
      origin : origin,
      destination : destination
    };

    flights.fetch().done(function () {

      var matchingFlights = flights.where({
        origin : origin,
        destination : destination
      });

        for (var i = 0; i < matchingFlights.length; i++) {
          var origin_result = matchingFlights[i].attributes.origin;
          var destination_result = matchingFlights[i].attributes.destination;
          var date_result = moment(matchingFlights[i].attributes.date).format('MMMM Do YYYY, h:mma');
          var plane_result = matchingFlights[i].attributes.plane_id;
          var flight_result = matchingFlights[i].attributes.id;
          var rowID = 'result_row_' + flight_result;
          console.log(rowID);
          $('#flights_list').append('<tr class="result_row" id="result_row_' + flight_result + '" data-id="' + flight_result + '"></tr>');
          $('#' + rowID).append('<td>' + flight_result + '</td>');
          $('#' + rowID).append('<td>' + origin_result + '</td>');
          $('#' + rowID).append('<td>' + destination_result + '</td>');
          $('#' + rowID).append('<td>' + plane_result + '</td>');
          $('#' + rowID).append('<td>' + date_result + '</td>');
        }
    });
  },

  viewFlight: function (e) {
    var flightID = e.currentTarget.dataset.id;
    var newURL = '/flights/' + flightID;
    app.router.navigate(newURL, true);
  },

  render: function () {
    var htmlTemplate = $("#searchFlightTemplate").html();
    this.$el.html( htmlTemplate );
    this.$el.appendTo("#main");
  }

});
