var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function () {
    var searchView = new app.SearchFlightView();
    $('#main').html('');
    
    searchView.render();

    // var searchFlightTemplate = $('#searchFlightTemplate').html();
    // this.$el.html(searchFlightTemplate);

    // var flightView = new app.FlightView();
    // flightView.render();
  }
});
