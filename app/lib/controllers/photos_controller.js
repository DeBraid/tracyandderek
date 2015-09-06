PhotosController = RouteController.extend({
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
    this.subscribe('photos').wait();
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
  },

  action: function () {
    this.render('Photos', { /* data: {} */});
  }
});

PhotoController = RouteController.extend({
    action: function () {
        this.render('Photo', {});
        var params = this.params;
        var id = params.id;
        var data = {
          id: id,
          src: '/day-of/' + id + '.JPG',
        }; 
        Session.set('singlePhotoData', data);
    }
});