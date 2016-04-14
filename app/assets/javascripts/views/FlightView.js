var app = app || {};

app.FlightView = Backbone.View.extend({

  el: '#main',

  render: function () {
    app.flight = this.model;
    var flightTemplate = _.template($('#flightViewTemplate').text());
    var flightAttr = this.model.attributes;
    flightAttr.date = moment(flightAttr.date).format('MMMM Do YYYY, h:mma');

    this.$el.html( flightTemplate(flightAttr) );

    this.listenTo(this.model.plane, 'change', function () { //when the plane loads it needs to show plane desc.
      var planeDescriptionTemplate = _.template($('#planeDescriptionTemplate').text());
      var planeDescription = planeDescriptionTemplate(this.model.plane.attributes);
      $('#planeDescription').text(planeDescription);
      app.plane = this.model.plane;
      seatingView = new app.SeatingView();
      seatingView.render();
    });
  }
});
