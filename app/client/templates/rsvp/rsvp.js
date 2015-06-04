/*****************************************************************************/
/* Rsvp: Event Handlers */
/*****************************************************************************/
Template.Rsvp.events({
  'click [data-action=attending]': function () {
    Session.set('isAttending', true);
    Session.set('showNotAttendingForm', false);
  },
  'click [data-action=notAttending]': function () {
    Session.set('isAttending', false);
      console.log('inside notAttending');
    Session.set('showNotAttendingForm', true);
  }
});

/*****************************************************************************/
/* Rsvp: Helpers */
/*****************************************************************************/
Template.Rsvp.helpers({
  attending: function () {
    return Session.get('isAttending');
  },
  isSuccessfulRsvp: function () {
    return Session.get('isSuccessfulRsvp');
  },
  isNotAttending: function () {
    return Session.get('showNotAttendingForm');
  }
});

Template.WeddingCalendarIcon.helpers({
  calendarIconPosition: function () {
    return Session.get('isAttending') ? 'pull-left' : 'pull-right'; 
  }
})

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
  Session.set('isAttending', false)
  Session.set('isSuccessfulRsvp', false);
  Session.set('showNotAttendingForm', false);
};

Template.Rsvp.rendered = function () {
};

Template.Rsvp.destroyed = function () {
  Session.set('isAttending', false)
  Session.set('isSuccessfulRsvp', false);
  Session.set('showNotAttendingForm', false);
};