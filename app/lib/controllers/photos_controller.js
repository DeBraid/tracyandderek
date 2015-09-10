var firstLookPhotoData = [
    { id: 'bridal-party', folder: 'day-of', src: 'bridal-party.jpg'}, 
    { id: 'bridesmaids-tracy-peak', folder: 'day-of', src: 'bridesmaids-tracy-peak.jpg'}, 
    { id: 'derek-lisa', folder: 'day-of', src: 'derek-lisa.jpg'}, 
    { id: 'roady-popo', folder: 'day-of', src: 'roady-popo.jpg'}, 
    { id: 'tracy-full-dress', folder: 'day-of', src: 'tracy-full-dress.jpg'}, 
    { id: 'brian-emily', folder: 'day-of', src: 'brian-emily.jpg'}, 
    { id: 'wedding-party', folder: 'day-of', src: 'wedding-party.jpg'}, 
    { id: 'bridesmaids-look-at-tracy', folder: 'day-of', src: 'bridesmaids-look-at-tracy.jpg'},
    { id: 'tracy-photoshoot', folder: 'day-of', src: 'tracy-photoshoot.jpg'}, 
    { id: 'tracy-concerned', folder: 'day-of', src: 'tracy-concerned.jpg'}, 
    { id: 'wedding-party-2', folder: 'day-of', src: 'wedding-party-2.jpg'}, 
    { id: 'wedding-party-cele', folder: 'day-of', src: 'wedding-party-cele.jpg'}
];


var ceremonyPhotoData = [
  { id : 'brian-derek-tracy-amanda-tally', folder: 'ceremony', src: 'brian-derek-tracy-amanda-tally.jpg' },
  { id : 'bridal-party', folder: 'ceremony', src: 'bridal-party.jpg' },
  { id : 'flower-girls', folder: 'ceremony', src: 'flower-girls.jpg' },
  { id : 'groomsmen-braids', folder: 'ceremony', src: 'groomsmen-braids.jpg' },
  { id : 'husband-wife-smooch', folder: 'ceremony', src: 'husband-wife-smooch.jpg' },
  { id : 'sweetheart-table', folder: 'ceremony', src: 'sweetheart-table.jpg' },
  { id : 'bride-and-groom', folder: 'ceremony', src: 'bride-and-groom.jpg' },
  { id : 'tracy-dad', folder: 'ceremony', src: 'tracy-dad.jpg' },
];

PhotosController = RouteController.extend({
    action: function () {
        this.render('Photos', { /* data: {} */ });
        var photos = firstLookPhotoData.concat(ceremonyPhotoData);
        photos.forEach(function (photo, index) {
            photo.number = index;
        });
        Session.set('photo_list', photos);
    }
});

PhotoController = RouteController.extend({
    action: function () {
        this.render('Photo', {});
        var params = this.params;
        var id = params.id;
        var data = {
            id: id,
            folder: params.folder,
            src: id + '.jpg',
            number: params.number
        };
        Session.set('singlePhotoData', data);
    }
});