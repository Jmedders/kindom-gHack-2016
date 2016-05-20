var you = 'freddy'
console.log('map js running');
var players =  [
 {
    "id": 1,
    "name": "Bob",
    "email": "bob@mail.com",
    "password": "asdf",
    zips: [
        {
        code: '80301',
        isKing: true,
        units: {
          "archer": 2,
          "cavalry": 1,
          "knight": 3
          }
        },
        {
        code: '80302',
        isKing: true,
        units: {
          "archer": 1,
          "cavalry": 2,
          "knight": 1
          }
        }
      ]
  },
 {
    "id": 2,
    "name": "freddy",
    "email": "bob@mail.com",
    "password": "asdf",
    zips: [
        {
        code: '80301',
        isKing: false,
        units: {
          "archer": 1,
          "cavalry": 1,
          "knight": 5
          }
        },
        {
        code: '80303',
        isKing: true,
        units: {
          "archer": 1,
          "cavalry": 1,
          "knight": 3
          }
        }
      ]
  }
  ]

var info =[];
var geocoder;
function initAutocomplete() {
  var markers = [];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0150, lng: -105.2705},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  geocoder = new google.maps.Geocoder();

for (var j = 0; j < players.length; j++) {
  let pobj = players[j];
  for (let i = 0; i < pobj.zips.length; i++) {
    if (pobj.zips[i].isKing) {
      geocoder.geocode( { 'address': pobj.zips[i].code}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var marker = new google.maps.Marker({
            map: map,
            icon: 'js/crown.png',
            position: results[0].geometry.location,
          });
          var cont = '!';
          var name = 'You are';
          console.log(pobj.zips[i].units);
          if (!(pobj.name === you)) {
            name = pobj.name + ' is'
            cont = '! Do you want to<a href="#"> attack <a>?'
          }
          var army = '<p> ARMY: archers: '+pobj.zips[i].units.archer+ ' cavalry: '+ pobj.zips[i].units.cavalry+' knights: '+ pobj.zips[i].units.knight+'</p>'
          var infowindow = new google.maps.InfoWindow({
            content: name + ' king of ' + results[0].formatted_address + cont + army,
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          markers.push(marker);
          info.push(infowindow)
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      })
    }
  }
}
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();
      var check = true;
      for (var i = 0; i < markers.length; i++) {
        if (places[0].geometry.location.lat() === markers[i].internalPosition.lat()
        && places[0].geometry.location.lng() === markers[i].internalPosition.lng()) {
          info[i].open(map, markers[i])
          check = false
        }
      }
      if (check) {
        alert('No king would you like to be King of'+places[0].formatted_address+'?!');
        var marker = new google.maps.Marker({
          map: map,
          icon: 'crown.png',
          position: places[0].geometry.location,
        });
        var infowindow = new google.maps.InfoWindow({
          content: 'you are king of ' + places[0].formatted_address,
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        info.push(infowindow)
        markers.push(marker)
      }
      if (places.length == 0) {
        return;
      }


      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      var me = [];
      places.forEach(function(place) {


        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
