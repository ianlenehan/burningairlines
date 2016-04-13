var app = app || {}
app.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

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
    });

    app.reservations = new app.Reservations();
    app.reservations.fetch().done(function () {
      app.reservations = app.reservations.where({flight_id: flightAttr.id});

      console.log(app.reservations);

      var columns = flightAttr.plane.columns;
      var rows = flightAttr.plane.rows;

      var seatingDiv = $('#flightSeating');

      var seatingDivWidth = seatingDiv.width();
      var seatWidth = Math.floor((seatingDivWidth*9)/(10*columns));
      var seatMargin = Math.floor((seatingDivWidth - seatWidth*columns)/(2*columns));

      var columnNames = app.alphabet.slice(0, columns);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          var seatID = (i+1)+app.alphabet[j];
          var seat = $('<div/>')
            .addClass("seat")
            .attr('id', seatID)
            .css({width: seatWidth+"px",
              margin: seatMargin+"px",
              height: Math.floor(seatWidth/2)+"px",
              'line-height': Math.floor(seatWidth/2)+"px"})
            .text(seatID);
          seatingDiv.append(seat);
        }
      }
    });
  }
});
