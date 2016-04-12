var app = app || {};

app.Appview = Backbone.View.extend({
  el: '#main',

  render: function () {
    var searchFlight = $('#searchFlight').html();
    this.$el.html(searchFlight);
    //
    // var flightView = new app.FlightView();
    // flightView.render();
  }
});
