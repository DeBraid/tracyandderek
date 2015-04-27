/*****************************************************************************/
/* SERVER ONLY Methods */
/*****************************************************************************/
Meteor.methods({
  'submitRsvp': function (item) {
    console.log("item in submitRsvp", item);
    Rsvps.insert(item);
  },
  'storeNewPhoto': function (pic) {
    Photos.insert({
      src: pic
    });
  }
});
