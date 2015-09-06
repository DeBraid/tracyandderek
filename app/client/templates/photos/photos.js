

/*****************************************************************************/
/* Photos: Helpers */
/*****************************************************************************/
Template.Photos.helpers({
  pics: function () {
    return [
      { src: 'day-of/bridal-party.JPG' },
      { src: 'day-of/bridesmaids-tracy-peak.JPG' },
      { src: 'day-of/derek-lisa.JPG' },
      { src: 'day-of/roady-popo.JPG' },
      { src: 'day-of/tracy-full-dress.JPG'},
      { src: 'day-of/brian-emily.JPG'},
      { src: 'day-of/tracy-photoshoot.JPG' },
      { src: 'day-of/tracy-concerned.JPG' },
      { src: 'day-of/wedding-party-2.JPG' },
      { src: 'day-of/wedding-party-cele.JPG' },
      { src: 'day-of/wedding-party.JPG'},
      { src: 'day-of/bridesmaids-look-at-tracy.JPG'},
    ]
  },
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