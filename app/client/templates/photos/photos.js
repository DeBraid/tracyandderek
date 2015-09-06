/*****************************************************************************/
/* Photos: Helpers */
/*****************************************************************************/
Template.Photos.helpers({
    pics: function () {
        return [
            { src: 'day-of/bridal-party.JPG'}, 
            { src: 'day-of/bridesmaids-tracy-peak.JPG'}, 
            { src: 'day-of/derek-lisa.JPG'}, 
            { src: 'day-of/roady-popo.JPG'}, 
            { src: 'day-of/tracy-full-dress.JPG'}, 
            { src: 'day-of/brian-emily.JPG'}, 
            { src: 'day-of/wedding-party.JPG'}, 
            { src: 'day-of/bridesmaids-look-at-tracy.JPG'},
            { src: 'day-of/tracy-photoshoot.JPG'}, 
            { src: 'day-of/tracy-concerned.JPG'}, 
            { src: 'day-of/wedding-party-2.JPG'}, 
            { src: 'day-of/wedding-party-cele.JPG'}
        ]
    },
    enlargedPhotos: function () {
        return Session.get('isPhotoClicked');
    },
    photoContainerWidth: function () {
        if ( Session.get('isPhotoClicked') ) {
            return 'col-sm-3';
        } else {
            return 'col-sm-12';
        }
    }
});

/*****************************************************************************/
/* Photos: Event Handlers */
/*****************************************************************************/
Template.Photos.events({
    'click #enlarge-photos': function () {
        var clickState = Session.get('isPhotoClicked');
        console.log(clickState);
        return Session.set('isPhotoClicked', !clickState);    
    }
});

/*****************************************************************************/
/* Photos: Lifecycle Hooks */
/*****************************************************************************/
Template.Photos.created = function () {
    return Session.set('isPhotoClicked', true);
};

Template.Photos.rendered = function () {};

Template.Photos.destroyed = function () {
    return Session.set('isPhotoClicked', false);
};