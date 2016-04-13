var app = app || {}
app.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

app.SeatingView = Backbone.View.extend({

  el: '#flightSeating',

  events: {
    'click .seat' : 'seatClick'
  },

  render: function(){
    app.reservations = new app.Reservations();
    app.reservations.fetch().done( function () {
      $('.seat').removeClass("pending");
    });

    setInterval(function () {
      app.reservations.fetch();
    }, 1000);

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
          .addClass("pending")
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
    var seatID = res.get('row') + res.get('column');
    $('#'+seatID).addClass('taken') //todo make it an if with session user_id.
  },

  reservationRemoveEvent: function (res) {
    if (app.flight.get('id') != res.get('flight_id')){
      return;
    }
    var seatID = res.get('row') + res.get('column');
    $('#'+seatID).removeClass('taken');
  },

  reservationUpdateEvent: function (res) {
    if (app.flight.get('id') != res.get('flight_id')){
      return;
    }
    var seatID = res.get('row') + res.get('column');
// need session to work to make this work.
  },

  seatClick: function (event) {
    var $seat = $(event.target);
    if ($seat.hasClass('taken')){
      alert("this seat is already taken.");
    } else if ($seat.hasClass('pending')) {
      alert("internet magic in process - wait.")
    } else {
      $seat.addClass('pending');
      var row = parseInt($seat[0].id);
      var column = $seat[0].id.slice(-1);
      console.log(row, column);
      // need login to work for this to work
    }
  }





});
