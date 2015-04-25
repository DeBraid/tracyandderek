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
  }
});

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
  Session.set('isAttending', false)
};

Template.Rsvp.rendered = function () {
};

Template.Rsvp.destroyed = function () {
};
