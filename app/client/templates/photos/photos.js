/*****************************************************************************/
/* Photos: Event Handlers */
/*****************************************************************************/
Template.Photos.events({
  'click [data-action=takePhoto]': function () {
    MeteorCamera.getPicture({
      width: 300,
      height: 500,
      quality: 50
    });
  }
});

/*****************************************************************************/
/* Photos: Helpers */
/*****************************************************************************/
Template.Photos.helpers({
});

/*****************************************************************************/
/* Photos: Lifecycle Hooks */
/*****************************************************************************/
Template.Photos.created = function () {
};

Template.Photos.rendered = function () {
};

Template.Photos.destroyed = function () {
};