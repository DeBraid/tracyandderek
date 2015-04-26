/*****************************************************************************/
/* Rsvp: Event Handlers */
/*****************************************************************************/
Template.Rsvp.events({
  'click .btn-success': function () {
    Session.set('isAttending', true);
  },
  'click .btn-warning': function () {
    Session.set('isAttending', false);
  }
});

/*****************************************************************************/
/* Rsvp: Helpers */
/*****************************************************************************/
Template.Rsvp.helpers({
  attending: function () {
    return Session.get('isAttending');
  },
  successfulRsvp: function () {
    return Session.get('isSuccessfulRsvp');
  },
});

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
  Session.set('isAttending', false)
  Session.set('isSuccessfulRsvp', false);

};

Template.Rsvp.rendered = function () {
};

Template.Rsvp.destroyed = function () {
};

AutoForm.hooks({
  insertRsvpForm: hooksObject
});

var hooksObject = {
  onSuccess: function(formType, result) {
    console.log("success callback is now running!");
    // create alert thanking them
    Session.set('isSuccessfulRsvp', true);
    
    // scroll to top
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // add name to aleat
  }
}