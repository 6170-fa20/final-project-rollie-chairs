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
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "MapObject",

  props: ['businesses'],

  data() {
    return {
    error: "",
    success: "",
    businesses: [],
    locations: [],
    markers: [],
    };
  },
  methods: {

  loadAllBusinesses: async function() {
    await axios.get(`/api/business/all`).then(response => {
      this.businesses = response.data;
      this.success = "Showing you all businesses on Scope"
    })
    .catch(error => {this.error = error.response.data.error});
    this.clearMessages();
  },

  loadAllLocations: async function() {
    await axios.get(`/api/business/all/locations`).then(response => {
      this.locations = response.data;
      this.success = "Showing you all businesses on Scope"
    })
    .catch(error => {this.error = error.response.data.error});
    this.clearMessages();
  },

  clearMessages: function() {
    setInterval(() => {
      this.success = "";
      this.error = "";
    }, 7000);
  },


  setupLeafletMap: async function () {
  delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
    const mymap = L.map("mapContainer").setView([42.3736, -71.1097], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibnphbXpvdyIsImEiOiJja2h2cWtvdXgxbzdjMzJwZG81cGxybWFxIn0.64Bf64i8L6Ac74J9_SHYxw'
}).addTo(mymap);
    var i;
    for(i = 0; i <= this.locations.length; i++){
        try {
            var name = this.businesses[i]["name"];
            /* eslint-disable no-console */
            console.log(this.businesses[i]["id"]);
            this.markers[i] = L.marker([this.locations[i][0]["latitude"], this.locations[i][0]["longitude"]], {id: this.businesses[i]["id"]}).on('click', markerFunction(this.businesses[i]["id"])).addTo(mymap);
            this.markers[i].bindPopup(name);
            this.markers[i].on('mouseover', function () {
                this.openPopup();
            });
            this.markers[i].on('mouseout', function () {
                this.closePopup();
            });

        } catch (e) {
            continue;
        }
    }

    function markerFunction(e)
    { return function(){ window.location = '/businesses/' + e; } }
  },
},
async mounted() {
    this.loadAllBusinesses().then(() => {
        this.loadAllLocations().then(() => {
            this.setupLeafletMap();
        });
    });
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
