// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-117.1541, 32.7053],
  [-117.1599, 32.7114],
  [-117.1601, 32.7055],
  [-117.1709, 32.7091],
  [-117.1695, 32.7169],
  [-117.170174, 32.722480],
  [-117.174438, 32.733125],
  [-117.16074, 32.749698],
  [-117.1970, 32.7542],
  [-117.1968, 32.7636],
  [-117.1667, 32.7681],
  [-117.1585, 32.7709],
  [-117.1624, 32.7671],
  [-117.1421, 32.7737],
  [-117.128752, 32.781642],
  [-117.1196, 32.7831],
  [-117.1105, 32.7816],
  [-117.0972, 32.7804],
  [-117.0714, 32.7774],
  [-117.0573, 32.7765],
  [-117.0426, 32.7724],
  [-117.0147, 32.7794],
  [-117.0018, 32.7855],
  [-116.9761, 32.7920],
  [-116.97558, 32.80461],
  [-116.9745, 32.8255],
  [-116.9809, 32.8410],
];

// TODO: add your own access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHdpZ2h0ZGllc21vIiwiYSI6ImNsN3cwbndhNTBncWczbm1zYjBjOW0zc3kifQ.Rt6lA0T1uZIKZ1YulLyYYg";

// This is the map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-117.0714, 32.7774],
  zoom: 11,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker()
  .setLngLat([busStops[0][0], busStops[0][1]])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== "undefined") {
  module.exports = { move };
}
