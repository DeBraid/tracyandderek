/*****************************************************************************/
/* Rsvp: Event Handlers */
/*****************************************************************************/
Template.Rsvp.events({
  'click [data-action=attending]': function () {
    Session.set('isAttending', true);
  },
  'click [data-action=notAttending]': function () {
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

// AutoForm.hooks({
//   insertRsvpForm: hooksObject
// });

// var hooksObject = {
//   before: {
//     // Replace `formType` with the form `type` attribute to which this hook applies
//     formType: function(doc) {
//       // Potentially alter the doc
//       doc.foo = 'bar';

//       // Then return it or pass it to this.result()
//       //return doc; (synchronous)
//       //return false; (synchronous, cancel)
//       //this.result(doc); (asynchronous)
//       //this.result(false); (asynchronous, cancel)
//     }
//   },

//   // The same as the callbacks you would normally provide when calling
//   // collection.insert, collection.update, or Meteor.call
//   after: {
//     // Replace `formType` with the form `type` attribute to which this hook applies
//     formType: function(error, result) {}
//   },
//   onSuccess: function(formType, result) {
//     console.log("success callback is now running!");
//     // create alert thanking them
//     Session.set('isSuccessfulRsvp', true);
    
//     // scroll to top
//     document.body.scrollTop = document.documentElement.scrollTop = 0;

//     // add name to aleat
//   }
// }