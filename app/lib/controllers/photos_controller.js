var photos = [
    { number: 0, id: 'bridal-party', src: 'day-of/bridal-party.JPG'}, 
    { number: 1, id: 'bridesmaids-tracy-peak', src: 'day-of/bridesmaids-tracy-peak.JPG'}, 
    { number: 2, id: 'derek-lisa', src: 'day-of/derek-lisa.JPG'}, 
    { number: 3, id: 'roady-popo', src: 'day-of/roady-popo.JPG'}, 
    { number: 4, id: 'tracy-full-dress', src: 'day-of/tracy-full-dress.JPG'}, 
    { number: 5, id: 'brian-emily', src: 'day-of/brian-emily.JPG'}, 
    { number: 6, id: 'wedding-party', src: 'day-of/wedding-party.JPG'}, 
    { number: 7, id: 'bridesmaids-look-at-tracy', src: 'day-of/bridesmaids-look-at-tracy.JPG'},
    { number: 8, id: 'tracy-photoshoot', src: 'day-of/tracy-photoshoot.JPG'}, 
    { number: 9, id: 'tracy-concerned', src: 'day-of/tracy-concerned.JPG'}, 
    { number: 10, id: 'wedding-party-2', src: 'day-of/wedding-party-2.JPG'}, 
    { number: 11, id: 'wedding-party-cele', src: 'day-of/wedding-party-cele.JPG'}
];

PhotosController = RouteController.extend({
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
    this.subscribe('photos').wait();
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
  },

  action: function () {
    this.render('Photos', { /* data: {} */});
    Session.set('photo_list', photos);
  }
});

PhotoController = RouteController.extend({
    action: function () {
        this.render('Photo', {});
        Session.set('photo_list', photos);
        var params = this.params;
        var id = params.id;
        var data = {
          id: id,
          src: '/day-of/' + id + '.JPG',
          number: params.number
        }; 
        Session.set('singlePhotoData', data);
    }
});