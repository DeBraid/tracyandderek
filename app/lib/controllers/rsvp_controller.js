RsvpController = RouteController.extend({
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
    this.subscribe('rsvps').wait();
    
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
    var mostRecentRsvp = Rsvps.find({},{sort:{createdAt: -1}, limit: 1});
    return { 
      mostRecentRsvp: mostRecentRsvp
    }
    // var rsvps = Rsvps.find().fetch();
    // var rsvpCount = Rsvps.length;
    // Session.set('isRsvpSubmitted', false);
    
    // if ( rsvpCount > 0) {
    //   Tracker.autorun(function () {
    //     console.log("rsvpCount", rsvpCount.length);

    //   });
    // } else {

    // };
  },

  action: function () {
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.
    this.render('Rsvp', { /* data: {} */});
    document.body.className = 'rsvpBgImage'
  }
});
