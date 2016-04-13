var app = app || {}

app.FlightView = Backbone.View.extend({

  el: '#main',

  render: function () {
    var flightTemplate = _.template($('#flightViewTemplate').text());
    var flightAttr = this.model.attributes;
    flightAttr.plane = this.model.plane.attributes;

    this.$el.html( flightTemplate(flightAttr) );

    this.listenTo(this.model.plane, 'change', function () { //when the plane loads it needs to show plane desc.
      var planeDescriptionTemplate = _.template($('#planeDescriptionTemplate').text());
      var planeDescription = planeDescriptionTemplate(this.model.plane.attributes);
      this.$el.find('#planeDescription').text(planeDescription);
    })
  }
})
