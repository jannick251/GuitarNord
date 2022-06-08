
window.onscroll = function () {
  onScrollChecks();
};



let map = L.map("map").setView([57.0033035, 9.8796337], 16);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiamFubmljazI1MSIsImEiOiJjbDM4bXd1azgwMWZiM2RwNGc1d2p0N2NsIn0.iJuQv66mH8jwK3Lo4RTFhQ",
  }
).addTo(map);

let marker = L.marker([57.0033035, 9.8796337]).addTo(map);
let circle = L.circle([57.0033035, 9.8796337], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 20,
}).addTo(map);
let polygon = L.polygon([
  [57.0033035, 9.8796337],
  [57.0033035, 9.8796337],
  [57.0033035, 9.8796337],
]).addTo(map);

marker.bindPopup("<b>FOF Aalborg</b><br>Hobrovej 465E, 9000 Aalborg").openPopup();
circle.bindPopup("Her ligger FOF Aalborg");
polygon.bindPopup("FOF Aalborg");
let popup = L.popup()
  .setLatLng([57.0033035, 9.8796337])
  .setContent("FOF Aalborg")
  .openOn(map);


/* map.dragging.disable(); */
map.on("click", onMapClick);


/* Send besked popop */
function beskedTak() {
    alert("Tak for din besked, jeg vender tilbage hurtigst muligt");
}