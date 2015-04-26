/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({

  'submitRsvp': function (item) {
    // console.log(item);
    console.log("item in submitRsvp", item);

    Rsvps.insert(item);

    // Session.set('isSuccessfulRsvp', true);
  }
   
});
