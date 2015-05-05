/*****************************************************************************/
/* Nav: Event Handlers */
/*****************************************************************************/
Template.Nav.events({
	'click .navbar-header > button': function (event,template) {
		var menuState = Session.get('menuOpen');
		return Session.set('menuOpen', !menuState );
	},
	'click ul.navbar-nav > a': function () {
		$('.collapse.in').collapse('hide');
		return Session.set('menuOpen', !Session.get('menuOpen') );
		
	}
});

/*****************************************************************************/
/* Nav: Helpers */
/*****************************************************************************/
Template.Nav.helpers({
	isMenuOpen: function () {
		return Session.get('menuOpen');
	}
});

/*****************************************************************************/
/* Nav: Lifecycle Hooks */
/*****************************************************************************/
Template.Nav.created = function () {
	return Session.set('menuOpen', false);
};

Template.Nav.rendered = function () {
};

Template.Nav.destroyed = function () {
};
