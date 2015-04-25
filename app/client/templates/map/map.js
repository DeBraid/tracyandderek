/*****************************************************************************/
/* Map: Event Handlers */
/*****************************************************************************/
Template.Map.events({
});

/*****************************************************************************/
/* Map: Helpers */
/*****************************************************************************/
Template.Map.helpers({
  casablancaMap: function() {
    if (GoogleMaps.loaded()) {
      var myLatLng = new google.maps.LatLng(43.209934,-79.601248);
      var mapOptions = {
        center: myLatLng,
        zoom: 8
      }
      return mapOptions;
    }
  }
});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
Template.Map.created = function () {
  GoogleMaps.load();
    // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('CasablancaMap', function(map) {
    // Add a marker to the map once it's ready
    var image = {
      url: 'rings4.png'
    }
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      icon: image
    });
  });
};

Template.Map.rendered = function () {
};

Template.Map.destroyed = function () {
};
