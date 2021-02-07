<template>
    <div class="mainContentArea">
      <h1>Welcome to Turf.js</h1>
      <section class="maps">
        <div class="map-insert leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom map-one" id="inMap"></div>
        <Select 
          v-model="operation"
          :list-items="turfOperations"
          @change="changeMapOperation"
        />
        <div class="map-insert leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom map-two" id="outMap"></div>
      </section>
      <section class="features">
        <h2>Advanced geospatial analysis for browsers and Node.js</h2>
        <div>
          <h3>Simple</h3>
          <p>Modular, simple-to-understand JavaScript functions that speak GeoJSON</p>
        </div>
        <div>
          <h3>Modular</h3>
          <p>Turf is a collection of small modules, you only need to take what you want to use</p>
        </div>
        <div>
          <h3>Fast</h3>
          <p>Takes advantage of the newest algorithms and doesn't require you to send data to a server</p>
        </div>
      </section>
    </div>
</template>

<script>
import Select from '../components/Select'

var map1 = null
var map2 = null
var outLayer = null

var points = null

function pointToLayer (feature, latlng) {
  return L.circleMarker(latlng, {
    color: '#0C3952',
    fillOpacity: 0.8
  })
}

// function valueSum (obj) {
//   var sum = 0
//   for (var k in obj) sum += obj[k]
//   return sum
// }

let geojsonOptions = {
  pointToLayer: pointToLayer,
  style: function (feature) {
    if (feature.geometry.type === 'Polygon') {
      let sum = Math.random() * 0.3 + 0.2
      return {
        weight: 1,
        fillOpacity: sum,
        color: '#0C3952'
      }
    } else {
      return {
        radius: 6,
        stroke: false,
        color: '#0C3952',
        fillOpacity: 1
      }
    }
  }
}

export default {
  name: 'Home',
  components: {
    Select
  },
  data: function () {
    return {
      operation: 'tin',
      turfOperations: ['tin', 'buffer', 'centroid', 'voronoi']
    }
  },
  methods: {
    changeMapOperation (e) {
      outLayer.clearLayers()
      let geojson = null
      switch (e) {
        case 'tin':
          geojson = turf.tin(points, 'price')
          break
        case 'buffer':
          geojson = turf.buffer(points, 200, {units: 'meters'})
          break
        case 'centroid':
          geojson = turf.centroid(points)
          break
        case 'voronoi':
          geojson = turf.voronoi(points, {bbox: turf.bbox(points)})
          break
        default:
          geojson = turf.tin(points, 'price')
          break
      }
      outLayer = L.geoJson(geojson, geojsonOptions).addTo(map2)
    }
  },
  mounted: function () {
    points = turf.featureCollection([
      turf.point([-74.000, 40.739], {price: 8}),
      turf.point([-73.992, 40.742], {price: 12}),
      turf.point([-73.997, 40.732], {price: 7}),
      turf.point([-73.994, 40.737], {price: 13}),
      turf.point([-73.989, 40.741], {price: 21}),
      turf.point([-73.993, 40.734], {price: 14}),
      turf.point([-73.988, 40.739], {price: 9})
    ])
    L.mapbox.accessToken = 'pk.eyJ1IjoidHVyZmpzIiwiYSI6ImNrZWp2ODRvNzFqMHoyeHJ6b3Jpc29iczQifQ.YdYb6a6rA5aCtkmDZ5wn_g'
    let mapOptions = { zoomControl: false }
    map1 = L.mapbox.map('inMap', null, mapOptions).addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'))
    map2 = L.mapbox.map('outMap', null, mapOptions).addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'))

    let pointsLayer1 = L.geoJson(points, geojsonOptions).addTo(map1)
    outLayer = L.geoJson(turf.tin(points, 'price'), geojsonOptions).addTo(map2)
    map1.fitBounds(pointsLayer1.getBounds())
    map2.fitBounds(outLayer.getBounds())
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  .mainContentArea {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .maps {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    .map-one,
    .map-two {
      display: flex;
      margin: 0 40px;
      width: 80%;
    }

    .map-one {
      justify-content: flex-end;
    }

    .map-two {
      justify-content: flex-start;
    }
  }
  
  .features {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    h2 {
      width: 100%;
    }

    div {
      flex: 0.3;
      max-width: 300px;
    }
  }

  h1 {
    font-weight: 200;
    font-size: 3rem;
    margin-bottom: 30px;
    margin-top: 0px;
    text-align: center;
  }

  h2 {
    text-align: center;
    margin: 20px 0px;
    font-weight: 600;
  }

  h3 {
    font-size: 1.1rem;
    text-align: center;
  }

  p {
    text-align: center;
  }

  .map-insert {
    height: 300px;
    min-width: 150px;
  }

  @media (max-width: 600px) {
    .mainContentArea {
      padding: 40px 30px;
    }

    .maps {
      flex-direction: column;

      .map-one,
      .map-two {
        margin: 0 10px;
        width: 100%;
      }
    }

    .features {
      flex-direction: column;

      h2, div {
        width: 100%;
        max-width: initial !important;
        margin-top: 15px;
      }
    }
  }
</style>
