AutoForm.addHooks('insertRsvpForm', {
  onSuccess: function(operation, result, template) {
    console.log("GOOOOT ONE!");
    Session.set('isSuccessfulRsvp', true);
	Session.set('isAttending', false);
  }
});