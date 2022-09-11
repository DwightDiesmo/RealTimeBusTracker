let accessToken = 'USE-YOUR-ACCESS-TOKEN';

class trolleyStation {
  constructor(name, lng, lat) {
    this.name = name;
    this.lng = lng;
    this.lat = lat;
    this.lgnlat = [this.lng, this.lat];
  }
}

const sdGreenLine = [
  new trolleyStation("12th & Imperial", -117.1541, 32.7053),
  new trolleyStation("Gaslamp Quarter", -117.1599, 32.7114),
  new trolleyStation("Convention Center", -117.1601, 32.7055),
  new trolleyStation("Seaport Village", -117.1709, 32.7091),
  new trolleyStation("Santa Fe Depot", -117.1695, 32.7169),
  new trolleyStation("Little Italy", -117.170174, 32.722480),
  new trolleyStation("Middletown", -117.174438, 32.733125),
  new trolleyStation("Washington Street", -117.16074, 32.749698),
  new trolleyStation("Old Town", -117.1970, 32.7542),
  new trolleyStation("Morena Linda Vista", -117.1968, 32.7636),
  new trolleyStation("Fashion Valley", -117.1667, 32.7681),
  new trolleyStation("Hazard Center", -117.1585, 32.7709),
  new trolleyStation("Mission Valley Center", -117.1624, 32.7671),
  new trolleyStation("Rio Vista", -117.1421, 32.7737),
  new trolleyStation("Fenton Parkway", -117.128752, 32.781642),
  new trolleyStation("Stadium", -117.1196, 32.7831),
  new trolleyStation("Mission San Diego", -117.1105, 32.7816),
  new trolleyStation("Grantville", -117.0972, 32.7804),
  new trolleyStation("SDSU", -117.0714, 32.7774),
  new trolleyStation("Alvarado", -117.0573, 32.7765),
  new trolleyStation("70th Street", -117.0426, 32.7724),
  new trolleyStation("Grossmont", -117.0147, 32.7794),
  new trolleyStation("Amaya Drive", -117.0018, 32.7855),
  new trolleyStation("El Cajon", -116.9761, 32.7920),
  new trolleyStation("Arnele Avenue", -116.97558, 32.80461),
  new trolleyStation("Gillespie Field", -116.9745, 32.8255),
  new trolleyStation("Santee", -116.9809, 32.8410),
];

// TODO: add your own access token
mapboxgl.accessToken = accessToken;

// This is the map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-117.1214, 32.7774],
  zoom: 11,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker()
  .setLngLat([sdGreenLine[0].lng, sdGreenLine[0].lat])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= sdGreenLine.length) return;
    document.getElementById("text-button").innerHTML = sdGreenLine[counter].name;
    marker.setLngLat(sdGreenLine[counter].lgnlat);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== "undefined") {
  module.exports = { move };
}
