var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  events: {
    'click #search_save' : 'searchFlights'
  },

  tagName: 'div',

  searchFlights: function () {
    var origin = this.$el.find('#origin').val();
    var destination = this.$el.find('#destination').val();

    var flights = new app.Flights();

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

      console.log(matchingFlights);
      for (var i = 0; i < matchingFlights.length; i++) {
        var rowID = ("results_row_" + i);
        // $('#flights_list').append('<tr id="test"></tr>');
        $('#flights_list').append('<tr id="' + rowID + '"></tr');
        var origin_result = matchingFlights[i].attributes.origin;
        var destination_result = matchingFlights[i].attributes.destination;
        var date_result = matchingFlights[i].attributes.date;
        var plane_result = matchingFlights[i].attributes.plane_id;
        // $('#' + rowID).append('<td>TEST</td>');
        $('#' + rowID).append('<td>' + origin_result + '</td>');
        $('#' + rowID).append('<td>' + destination_result + '</td>');
        $('#' + rowID).append('<td>' + date_result + '</td>');
        $('#' + rowID).append('<td>' + plane_result + '</td>');
        // $destination.append(matchingFlights[i].attributes.destination);
        // $date.append(matchingFlights[i].attributes.date);
        // $plane.append(matchingFlights[i].attributes.plane_id);
      }
    });
  },

  render: function () {
    var htmlTemplate = $("#searchFlightTemplate").html();
    this.$el.html( htmlTemplate );
    this.$el.appendTo("#main");
  }

});
