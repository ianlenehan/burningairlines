var app = app || {}
app.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

app.SeatingView = Backbone.View.extend({

  el: '#flightSeating',

  render: function(){
    app.reservations = new app.Reservations();
    app.reservations.fetch();
    this.listenTo( app.reservations, 'add', this.reservationAddEvent);
    this.listenTo( app.reservations, 'remove', this.reservationRemoveEvent);
    this.listenTo( app.reservations, 'change', this.reservationChangeEvent);


    var rows = app.plane.get('rows');
    var columns = app.plane.get('columns');

    var divWidth = this.$el.width();

    var seatWidth = Math.floor((divWidth*9)/(10*columns));
    var seatMargin = Math.floor((divWidth - seatWidth*columns)/(2*columns));

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
        this.$el.append(seat);
      }
    }
  },

  reservationAddEvent: function (res) {
    if (app.flight.get('id') != res.get('flight_id')){
      return;
    }
    res.set('seatID' , res.get('row') + res.get('column'));

    console.log(res.get('seatID'));
  }
});
