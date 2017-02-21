function createIklan() {
    $('.small.modal')
        .modal('show');
}

function getLocation() {
  map = new GMaps({
      div: '#mapsGetLocation',
      zoom: 16,
      lat: -6.260772,
      lng: 106.781638,
      click: function(e) {
        map.removeMarkers()
        map.addMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }
  });
}
