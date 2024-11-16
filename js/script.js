function initMap() {
  // Initialize the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.4239163, lng: -122.0947209 }, // Coordinates for Google HQ
    zoom: 17, // Zoom level
    tilt: 45, // Enable 3D
    mapId: "DEMO_MAP_ID",
  });

  // Add a marker
  const marker = new google.maps.Marker({
    position: { lat: 37.4239163, lng: -122.0947209 },
    map: map,
    title: "Google HQ", // Tooltip text
  });

  // Info Window
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div>
        <h2>Google HQ</h2>
        <p>Located in Mountain View, CA.</p>
      </div>
    `,
  });

  // Add a click listener to the marker
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  // Enable 3D controls
  map.setOptions({
    tilt: 45, // Adjust tilt for 3D view
    heading: 90, // Direction for 3D map
  });
}
