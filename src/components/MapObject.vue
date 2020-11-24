<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
</head>

<template>
   <div id="mapContainer"></div>
</template>


<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "MapObject",

  data() {
    return {
    };
  },
  methods: {
  setupLeafletMap: function () {
    const mymap = L.map("mapContainer").setView([42.3736, -71.1097], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibnphbXpvdyIsImEiOiJja2h2cWtvdXgxbzdjMzJwZG81cGxybWFxIn0.64Bf64i8L6Ac74J9_SHYxw'
}).addTo(mymap);
  },
},
mounted() {
  this.setupLeafletMap();
},
};
</script>

<style scoped>
#mapContainer {
width: 1000px;
height: 600px;
max-height: none;
}
</style>
