var app = app || {}

app.LoginView = Backbone.View.extend({

  el: '#main',

  render: function () {
    var loginTemplate = _.template($('#flightViewTemplate').text());
    var loginAttr = this.model.attributes;
    loginAttr.plane = this.model.plane.attributes;

    this.$el.html( loginTemplate(loginAttr) );

    this.listenTo(this.model.user, 'change', function () { //when the plane loads it needs to show plane desc.
      var planeDescriptionTemplate = _.template($('#planeDescriptionTemplate').text());
      var planeDescription = planeDescriptionTemplate(this.model.plane.attributes);
      this.$el.find('#planeDescription').text(planeDescription);
    })
  }
})
