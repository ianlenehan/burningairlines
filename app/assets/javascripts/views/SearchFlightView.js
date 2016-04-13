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
    flights.fetch({data: {origin: origin, destination: destination}}).done(function () {

      for (var i = 0; i < flights.length; i++) {
        var $origin = view.$el.find('#flight_origin');
        var returned_origin = flights.at( i ).get( "origin" );
        $origin.html(flights.at( i ).get( "origin" ));
        console.log(returned_origin);
      }
    });
  },

  render: function (flights) {
    var htmlTemplate = $("#searchFlightTemplate").html();
    this.$el.html( htmlTemplate );

    // var origin = this.$el.find('#origin').val();
    // var destination = this.$el.find('#destination').val();
    //
    // var flights = new app.Flights({ origin : origin, destination : destination });
    //
    // var view = this;
    // flights.fetch().done(function () {
    //
    //   for (var i = 0; i < flights.length; i++) {
    //     var $origin = view.$el.find('#flight_origin');
    //     var returned_origin = flights.at( 0 ).get( "origin" );
    //     $origin.html(flights.at( 0 ).get( "origin" ));
    //     console.log(returned_origin);
    //
    //   }

      this.$el.appendTo("#main");
    // });
  }

});
