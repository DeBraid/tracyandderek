Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('rsvp', {
  name: 'rsvp',
  controller: 'RsvpController',
  action: 'action',
  where: 'client'
});

Router.route('photos', {
  name: 'photos',
  controller: 'PhotosController',
  action: 'action',
  where: 'client'
});

Router.route('photo/:folder/:number/:id', {
  name: 'photo',
  controller: 'PhotoController',
  action: 'action',
  where: 'client'
});

Router.route('map', {
  name: 'map',
  controller: 'MapController',
  action: 'action',
  where: 'client'
});

Router.route('thebigday', {
  name: 'thebigday',
  controller: 'ThebigdayController',
  action: 'action',
  where: 'client'
});

Router.route('registry', {
  name: 'registry',
  controller: 'RegistryController',
  action: 'action',
  where: 'client'
});

Router.route('stag', {
  name: 'stag',
  controller: 'StagController',
  action: 'action',
  where: 'client'
});