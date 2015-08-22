var map = L.map("map").setView([30.751277776257812, 6.6796875], 2); 

L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abc'
}).addTo(map);
