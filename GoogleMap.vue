<template>
  <div class="GoogleMap">
    <div class="map-container">
      <gmap-map id="map"
        :center="center"
        :zoom="13"
        :options="{
          styles: mapStyles,
          scrollwheel: false
        }"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBP6x4b942l9lqVbx4BK8MMc7x1k6fmTdc'
    }
  });

  export default {
    name: 'GoogleMap',
    props: [
    ],
    components: {
    },
    data () {
      return {
        center: {lat: -37.81169, lng: 144.9593818},
        markers: [{
          position: {lat: -37.8116, lng: 144.95945}
        }],
        mapStyles: [
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'saturation': 36
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 40
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              },
              {
                'weight': 1.2
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 21
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 29
              },
              {
                'weight': 0.2
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 18
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 19
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              }
            ]
          }
        ]
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .vue-map-container {
    height: 500px;
    width: 100%;
    & .gm-bundled-control {
      bottom: 175px !important;
    }
  }
</style>
