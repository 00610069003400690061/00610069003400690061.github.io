/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_map_simple]
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 10.867486119159919, lng: 106.79447103866819 },
    zoom: 8,
  });
}

initMap();
// [END maps_map_simple]

