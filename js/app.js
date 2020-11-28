$(document).ready(function () {
  // Custom JS & jQuery
  // sidenav init
  $('.sidenav').sidenav();

  // scrollspy init
  $('.scrollspy').scrollSpy();

  // Own scrollFire from old Materialize here
  // Basically need to implement your own fadeIn animation and scroll detection!
  // This will fade in the .main-text on the main page
  $('.main-text').fadeIn(1500).removeClass('hidden');

  // Once every scroll ...
  $(window).scroll(function () {
    // do this:

    // Make the navbar colored or transparent based on where the visitor is scrolling
    if (window.pageYOffset > 1500 - $(window).height()) {
      $('nav').removeClass('transparent').addClass('blue-grey darken-3');
    } else {
      $('nav').addClass('transparent').removeClass('blue-grey darken-3');
    }
  });
});

//  google maps

function showGoogleMaps() {
  const position = [42.361145, -71.057083];
  const centerPosition = [42.377815, -70.981133];

  const latLng = new google.maps.LatLng(position[0], position[1]);
  const centerLatLng = new google.maps.LatLng(
    centerPosition[0],
    centerPosition[1],
  );

  const mapOptions = {
    zoom: 12,
    streetViewControl: false,
    scaleControl: true,
    center: centerLatLng,
  };

  const mapDiv = document.getElementById('googlemap');

  const map = new google.maps.Map(mapDiv, mapOptions);

  // marker
  new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
}

// maps event
// google.maps.event.addDomListener(window, 'load', showGoogleMaps);
