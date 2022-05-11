<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

onMounted(() => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibW9vbmVyZCIsImEiOiJjbDJ5cnMwbnMxOGVhM2JvYmEzenptNm90In0.pW5z0tJOAg500xPVjQQjjw";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/moonerd/cl2zeopym001614qcxshezq9n",
    center: [-71.41148120409414, 41.825393535559705],
    zoom: 12,
  });
  map.on("load", () => {
    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      (error, image) => {
        if (error) throw error;
        map.addImage("location-marker", image);
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                // feature for THE JOURNEY TO HOPE HEALTH & HEALIN
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.2984737, 41.4758438],
                },
                properties: { title: "THE JOURNEY TO HOPE HEALTH & HEALIN" },
              },
              {
                // feature for THE JOURNEY TO HOPE HEALTH & HEALIN
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.2961925, 41.5237371],
                },
                properties: { title: "THE JOURNEY TO HOPE HEALTH & HEALIN" },
              },
              {
                // feature for THE JOURNEY TO HOPE HEALTH & HEALIN
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.8284575, 41.3608327],
                },
                properties: { title: "THE JOURNEY TO HOPE HEALTH & HEALIN" },
              },
              {
                // feature for THE JOURNEY TO HOPE HEALTH & HEALIN
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.4671102, 41.8046096],
                },
                properties: { title: "THE JOURNEY TO HOPE HEALTH & HEALIN" },
              },
              {
                // feature for CODAC INC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.3155658, 41.49095519999999],
                },
                properties: { title: "CODAC INC" },
              },
              {
                // feature for RISAT LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.4765479, 42.0152503],
                },
                properties: { title: "RISAT LLC" },
              },
              {
                // feature for ADDICTION RECOVERY INSTITUTE
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.3855454, 41.8787034],
                },
                properties: { title: "ADDICTION RECOVERY INSTITUTE" },
              },
              {
                // feature for VICTA LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.42375969999999, 41.8096787],
                },
                properties: { title: "VICTA LLC" },
              },
              {
                // feature for RISAT LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.40344230000001, 41.7983244],
                },
                properties: { title: "RISAT LLC" },
              },
              {
                // feature for CODAC INC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.4417375, 41.8064443],
                },
                properties: { title: "CODAC INC" },
              },
              {
                // feature for BHG LVII LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.2984737, 41.4758438],
                },
                properties: { title: "BHG LVII LLC" },
              },
              {
                // feature for ADDICTION RECOVERY INSTITUTE SOUTH
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.4310465, 41.7328826],
                },
                properties: { title: "ADDICTION RECOVERY INSTITUTE SOUTH" },
              },
              {
                // feature for BHG LVII LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.4671102, 41.8046096],
                },
                properties: { title: "BHG LVII LLC" },
              },
              {
                // feature for CODAC INC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.44453659999999, 41.7820463],
                },
                properties: { title: "CODAC INC" },
              },
              {
                // feature for BHG LVII LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.3766009, 41.871785],
                },
                properties: { title: "BHG LVII LLC" },
              },
              {
                // feature for CODAC INC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.3499174, 41.8130114],
                },
                properties: { title: "CODAC INC" },
              },
              {
                // feature for BHG LVII LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.2961925, 41.5237371],
                },
                properties: { title: "BHG LVII LLC" },
              },
              {
                // feature for CODAC INC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.3991137, 41.8570662],
                },
                properties: { title: "CODAC INC" },
              },
              {
                // feature for CENTER FOR TREATMENT AND RECOVERY
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.3766009, 41.871785],
                },
                properties: { title: "CENTER FOR TREATMENT AND RECOVERY" },
              },
              {
                // feature for BHG LVII LLC
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-71.8284575, 41.3608327],
                },
                properties: { title: "BHG LVII LLC" },
              }

            ],
          },
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            
            "icon-image": "location-marker",
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.25],
            "text-anchor": "top",
            "icon-allow-overlap": true,
          },
        });
      }
    );
    // TODO: Here we want to load a layer
    // TODO: Here we want to load/setup the popup
  });
});
</script>

<template>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  All Centers are Closed?
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">NeverUseAlone</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Call :<a href="tel:831-313-5590">831-313-5590</a> (800) 484-3731!
        Never Use Alone!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Make me Safe</button>
      </div>
    </div>
  </div>
</div>
  <div id="map" />
</template>
