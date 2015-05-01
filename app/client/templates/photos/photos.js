/*****************************************************************************/
/* Photos: Event Handlers */
/*****************************************************************************/
Template.Photos.events({
  'click [data-action=takePhoto]': function () {
    var options = {  
      width: 350,
      height: 350,
      quality: 75
    }
    MeteorCamera.getPicture(options, function(err, data) {  
      if (err) {
        console.log('error', err);
      }
      if (data) {
        Meteor.call('storeNewPhoto', data, function () {
          Session.set('isNewPhoto', true);
        });
      }
    });
  }
});

/*****************************************************************************/
/* Photos: Helpers */
/*****************************************************************************/
Template.Photos.helpers({
  image: function () {
    return Session.get('img');
  },
  newPhoto: function () {
    return Session.get('isNewPhoto');
  }
});

/*****************************************************************************/
/* Photos: Lifecycle Hooks */
/*****************************************************************************/
Template.Photos.created = function () {
  return Session.set('isNewPhoto', false);
};

Template.Photos.rendered = function () {
};

Template.Photos.destroyed = function () {
  return Session.set('isNewPhoto', false);
};