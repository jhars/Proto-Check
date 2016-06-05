
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name',
  sublocality: 'long_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
  document.getElementById('street_number-lbl').style.display = "none"
  document.getElementById('route-lbl').style.display = "none"
  document.getElementById('locality-lbl').style.display = "none"
  document.getElementById('administrative_area_level_1-lbl').style.display = "none"
  document.getElementById('country-lbl').style.display = "none"
  document.getElementById('postal_code-lbl').style.display = "none"

  // document.getElementById('sublocality-lbl').style.display = "none"
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

// document.getElementById("street_number").addEventListener("click", displayStreetNumber);
document.getElementById("street_number").addEventListener("click", function(){
	document.getElementById("street_number-lbl").style.display = '';
});

document.getElementById("route").addEventListener("click", function(){
	document.getElementById("route-lbl").style.display = '';
});
document.getElementById("locality").addEventListener("click", function(){
	document.getElementById("locality-lbl").style.display = '';
});
document.getElementById("sublocality").addEventListener("click", function(){
	document.getElementById("sublocality-lbl").style.display = '';
});
document.getElementById("administrative_area_level_1").addEventListener("click", function(){
	document.getElementById("administrative_area_level_1-lbl").style.display = '';
});
document.getElementById("country").addEventListener("click", function(){
	document.getElementById("country-lbl").style.display = '';
});
document.getElementById("postal_code").addEventListener("click", function(){
	document.getElementById("postal_code-lbl").style.display = '';
});

