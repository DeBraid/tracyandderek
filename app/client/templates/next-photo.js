Template.nextPhoto.events({
	'click #nextPhoto': function () {		
		var list = Session.get('photo_list');
		var number = parseInt(Router.current().params.number);
		var next = number + 1;
		var nextPhoto = list[next];
		if (next < 12) {
			Router.go('/photo/' + nextPhoto.number + '/' + nextPhoto.id);
		} else {
			Router.go('photos');
		}
	}
});


