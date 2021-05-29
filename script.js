
mapboxgl.accessToken = 
'pk.eyJ1Ijoic2NvcnBpYW5zIiwiYSI6ImNrcDd1N2NqbzAzdG4yb254NjQ5MGJpMHIifQ.quDXv5JJ_UerazZ0EAl95w';


navigator.geolocation.getCurrentPosition(successsLocation,
  errorLocation, {
  enableHighAccuracy: true
  
})

function successsLocation(position){
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])


}
function errorLocation() {
  setupMap([7.2955, 80.6356])
}

function setupMap(center) {
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  zoom:15
  });
 
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)
 

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
})

map.addControl(directions, 'top-left')
}
  

