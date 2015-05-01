/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('rsvps', function () {
  return Rsvps.find();
});
Meteor.publish('successfulRsvp', function () {
  return SuccessfulRsvp.find();
});
Meteor.publish('photos', function () {
  return Photos.find();
});