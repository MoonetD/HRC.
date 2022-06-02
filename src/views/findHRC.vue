<script>
const firebaseConfig = {
  apiKey: "AIzaSyAiDKevHPkyVn9Q7BzmKowbAr4rHL_Qz8Y",
  authDomain: "test-authendication-project.firebaseapp.com",
  databaseURL:
    "https://test-authendication-project-default-rtdb.firebaseio.com",
  projectId: "test-authendication-project",
  storageBucket: "test-authendication-project.appspot.com",
  messagingSenderId: "508647974331",
  appId: "1:508647974331:web:16bba0edc8908c3b10509e",
  measurementId: "G-FBVHLXY6ZL",
};
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekday[d.getDay()];

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const db = getFirestore(fire);

//Set up for getting search data
const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const hours = today.getHours() + ":" + today.getMinutes();

const dateTime = date + " " + time;

var testCollection = [];
var searchObject = [];
var searchLatLon = {};
var HRCLatLon = [];
async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "finalBannerSearch"));
  const searchData = await getDoc(
    doc(db, "searchHistory/" + date + "/" + hours + "/" + hours)
  );
  searchObject.push({ ["search"]: searchData.data() });
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });
  var hrcID = 0;
  querySnapshot.forEach((doc) => {
    hrcID = hrcID + 1;
    testCollection.push({
      ["id"]: hrcID,
      ["providerName"]: doc.id,
      ["HRCDetails"]: doc.data(),
      ["lat"]: doc.data().LAT,
      ["lon"]: doc.data().LON,
    });
    HRCLatLon.push({
      ["id"]: doc.id,
      ["lat"]: doc.data().LAT,
      ["lon"]: doc.data().LON,
    });
  });
  // this.testCollection = testCollection;
  distanceCalculate();
  testCollection.sort((a, b) => (a.distance > b.distance ? 1 : -1));
  // console.log(testCollection)
}
function distanceCalculate() {
  // console.log(searchObject[0].search.searchLon,"is seach lon")
  // console.log(searchObject[0].search.searchLat,"is seach lat")
  searchLatLon.lat = searchObject[0].search.searchLat;
  searchLatLon.lon = searchObject[0].search.searchLon;
  for (var obj of testCollection) {
    var distance =
      Math.pow(
        Math.pow(obj.lat - searchLatLon.lat, 2) +
          Math.pow(obj.lon - searchLatLon.lon, 2),
        0.5
      ) * 69;
    // console.log("distance between your search and", obj.id,"is",distance)
    obj.distance = distance;
  }
}

export default {
  data() {
    // console.log(searchObject, "is search object");
    // return testCollection
    return {
      searchData: testCollection,
    };
  },
  computed: {
    isPermanent() {
      return this.searchData.HRCDetails;
    },
  },
  methods: {
    submitName() {
      console.log(testCollection[0].HRCDetails.ADDRESS);
    },
    refresher() {
      testCollection[0].id = 99;
    },
  },
  mounted() {
    fetchData();
  },
};
</script>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import permanentIcon from "../../public/src/permanent icon.png";
import searchLocation from "../../public/src/search-grey.png";
import temporaryIcon from "../../public/src/temporaryIcon.png";
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { getDoc, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const router = useRouter();
const hrcSearch = ref("");
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const route = useRoute();
var addressSearch = route.params.name;
var currentLocationArray = [];
// const getImgUrl = (pic) =>{
//     return ('../assets/profile/'+pic+'.png')
// }

const checkSearch = () => {
  const searchKey = hrcSearch._value;
  router.push("/findHRC/" + searchKey);
  delay(1000).then(() => location.reload());
};

const gotoHRC = (even, s) => {
  console.log(even);
  console.log(s);
};

const locatorButtonPressed = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        fetch(
          "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
            position.coords.longitude +
            "," +
            position.coords.latitude +
            ".json?limit=1&access_token=pk.eyJ1IjoibW9vbmVyZCIsImEiOiJjbDJ5cnMwbnMxOGVhM2JvYmEzenptNm90In0.pW5z0tJOAg500xPVjQQjjw",
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res.features[0].place_name);
            var currentLocationAddress = res.features[0].place_name;
            router.push("/findHRC/" + currentLocationAddress);
            delay(1000).then(() => location.reload());
            console.log("pushed");
          });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
};

// const printAddress = (compareLat, compareLon) => {
//   testResult.then((a) => {
//     console.log(a);
//   });
// };
// console.log("outside",fetchData().then((response) => response.json()));

onMounted(() => {
  // printAddress();
  const searchHRC = () => {
    console.log(hrcSearch._value);
    fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        addressSearch +
        ".json?limit=1&access_token=pk.eyJ1IjoibW9vbmVyZCIsImEiOiJjbDJ5cnMwbnMxOGVhM2JvYmEzenptNm90In0.pW5z0tJOAg500xPVjQQjjw",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.features[0].place_name);
        var mapLat = res.features[0].center[1];
        var mapLon = res.features[0].center[0];
        const today = new Date();
        const date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        const time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        const hours = today.getHours() + ":" + today.getMinutes();

        const dateTime = date + " " + time;
        async function logLocation() {
          await setDoc(
            doc(db, "searchHistory/" + date + "/" + hours + "/" + hours),
            {
              searchDate: dateTime,
              searchTerm: addressSearch,
              searchLat: mapLat,
              searchLon: mapLon,
            }
          );
        }
        logLocation();
        mapboxgl.accessToken =
          "pk.eyJ1IjoibW9vbmVyZCIsImEiOiJjbDJ5cnMwbnMxOGVhM2JvYmEzenptNm90In0.pW5z0tJOAg500xPVjQQjjw";
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/moonerd/cl2zeopym001614qcxshezq9n",
          center: [mapLon, mapLat],
          zoom: 13,
        });
        map.on("load", () => {
          map.loadImage(permanentIcon, (error, image) => {
            if (error) throw error;
            map.addImage("location-marker", image);
            map.addSource("serviceProviders", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
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
                      coordinates: [-71.2984737, 41.4758438],
                    },
                    properties: { title: "BHG LVII LLC" },
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
                    // feature for BHG LVII LLC
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.3766009, 41.871785],
                    },
                    properties: { title: "BHG LVII LLC" },
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
                    // feature for BHG LVII LLC
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.8284575, 41.3608327],
                    },
                    properties: { title: "BHG LVII LLC" },
                  },
                  {
                    // feature for CODAC INC
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.3155658, 41.4909552],
                    },
                    properties: { title: "CODAC INC" },
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
                    // feature for CODAC INC
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.4445366, 41.7820463],
                    },
                    properties: { title: "CODAC INC" },
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
                    // feature for CODAC INC
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.3991137, 41.8570662],
                    },
                    properties: { title: "CODAC INC" },
                  },
                  {
                    // feature for Providence Comprehensive Treatment Center (CTC)
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.4765479, 42.0152503],
                    },
                    properties: {
                      title: "Providence Comprehensive Treatment Center (CTC)",
                    },
                  },
                  {
                    // feature for Providence Comprehensive Treatment Center (CTC)
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.4034423, 41.7983244],
                    },
                    properties: {
                      title: "Providence Comprehensive Treatment Center (CTC)",
                    },
                  },
                  {
                    // feature for VICTA LLC
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.4237597, 41.8096787],
                    },
                    properties: { title: "VICTA LLC" },
                  },
                ],
              },
            });
            map.addLayer({
              id: "points",
              type: "symbol",
              source: "serviceProviders",

              layout: {
                "icon-image": "location-marker",
                // get the title name from the source's "title" property
                "text-field": ["get", "title"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-size": 10,
                "text-offset": [0, 2],
                "text-anchor": "top",
                "icon-allow-overlap": true,
                "text-allow-overlap": true,
              },
            });
          });
          //add temporary location
          map.loadImage(temporaryIcon, (error, tempoIcon) => {
            if (error) throw error;
            map.addImage("temporaryIcon", tempoIcon);
            map.addSource("temporaryLocation", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    // add current search location
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [-71.4116493650789, 41.825304426157594],
                    },
                    properties: { title: "Project Weber/Renew" },
                  },
                ],
              },
            });
            map.addLayer({
              id: "temporary",
              type: "symbol",
              source: "temporaryLocation",
              layout: {
                "icon-image": "temporaryIcon",
                // get the title name from the source's "title" property
                "text-field": ["get", "title"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-size": 10,
                "text-offset": [0, 2],
                "text-anchor": "top",
                "icon-allow-overlap": true,
                "text-allow-overlap": true,
              },
            });
          });
          //add search location
          map.loadImage(searchLocation, (error, searchIcon) => {
            if (error) throw error;
            map.addImage("search-marker", searchIcon);
            map.addSource("currentLocation", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    // add current search location
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [mapLon, mapLat],
                    },
                    properties: { title: "Search Location" },
                  },
                ],
              },
            });
            map.addLayer({
              id: "pts",
              type: "symbol",
              source: "currentLocation",
              layout: {
                "icon-image": "search-marker",
                // get the title name from the source's "title" property
                "text-field": ["get", "title"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-size": 10,
                "text-offset": [0, 2],
                "text-anchor": "top",
                "icon-allow-overlap": true,
                "text-allow-overlap": true,
              },
            });
          });

          // TODO: Here we want to load a layer
          // TODO: Here we want to load/setup the popup
        });
      });
  };

  searchHRC();
});
</script>

<template>
  <header
    class="blueGround p-3 navbar navbar-expand-lg navbar-dark bg-navbar text-white"
  >
    <div class="container-fluid title-up">
      <a
        href="/"
        class="navbar-brand font-exo fw-bold brand text-white brandSearch"
        >HRC.</a
      >
      <div class="col-lg-4">
        <form @submit.prevent="onSubmit" @submit="checkSearch">
          <input
            class="form-control"
            type="text"
            placeholder="1 Kennedy Plaza, Providence, RI 02903"
            aria-label="Search"
            v-model="hrcSearch"
          />
        </form>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div class="ti col-lg-8 container">
          <div class="row fullWidth">
            <div class="col-lg-6 searchLeft">
              <ul
                class="nav col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
              >
                <li>
                  <router-link to="/resource" class="nav-link px-2 text-white"
                    >Resources</router-link
                  >
                </li>
                <li>
                  <router-link to="/about" class="nav-link px-2 text-white"
                    >About</router-link
                  >
                </li>
                <router-link
                  to="/register"
                  type="button"
                  class="btn btn-outline-primary"
                  >Join as a HRC Service Provider</router-link
                >
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Search Bar -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">NeverUseAlone</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Call :<a href="tel:(800) 484-3731">(800) 484-3731</a>!
          Never Use Alone!
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Make me Safe</button>
        </div>
      </div>
    </div>
  </div>
    <div
    class="modal fade"
    id="useLocation"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Prompt to use</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Our website does not access any personal information and does not link your location with any tracable information.
          <br>
          Using your location helps the Harm Reduction Centers to better understand where are the potential users located.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary"
          @click="locatorButtonPressed"
          >Use My Location</button>
        </div>
      </div>
    </div>
  </div>
  <div class="fluid-container font-exo">
    <div class="row noMargin">
      <div class="col-lg-5">
        <div id="map" />
      </div>
      <div class="col-lg-7 nopadding x overflow-auto result">
        <div class="smallSearchHeader blueGround">
          <div class="whiteButton"></div>
        </div>

        <button
          type="button"
          class="btn btn-primary btn-yellow text-black allClosed btn-margin"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          All Centers are Closed?
        </button>
        <button
          class="btn text-black allClosed btn-light tall btn-margin"
          data-bs-toggle="modal"
          data-bs-target="#useLocation"
        >
          Try Using Your Location?
        </button>
        <h3 class="text-black searchLocation">
          Harm Reduction Service Providers Near: <br> <h3 class="adress"> {{ addressSearch }} </h3>
        </h3>
        <hr />
        <ul>
          <div
            v-for="(item, index) in testCollection"
            :index="index"
            :key="item.id"
          >
            <div
              @click="router.push('/HRCDetails/' + item.providerName)"
              class="resultContainer"
            >
              <div class="row">
                <div class="col-4 col-lg-3 hrcType">
                  <img
                    class="typeIcon"
                    :src="'src/typeIcons/' + item.HRCDetails.HRCTYPE + '.png'"
                    alt=""
                  />
                  {{ item.HRCDetails.HRCTYPE }}
                </div>
                <div class="col-8 col-lg-9 noPadding">
                  <div class="btn btn-primaty distance btn-gray">
                    {{ Math.round(item.distance * 10) / 10 }} miles away
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4 col-lg-3">
                  <img
                    class="profilePhoto"
                    :src="
                      '../../public/src/profile/' +
                      item.HRCDetails.HRCTYPE +
                      item.HRCDetails.NAME +
                      '.png'
                    "
                  />
                </div>
                <div class="col-8 col-lg-9 noPadding">
                  <h3 class="resultName text-black">
                    {{ item.HRCDetails.NAME }}
                  </h3>
                  <p class="resultAddress">{{ item.HRCDetails.ADDRESS }}</p>

                  <div class="row">
                    <div class="col-lg-6 col-sm-6">
                      <div
                        v-if="day === 'Sunday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[0] }}
                      </div>
                      <div
                        v-if="day === 'Monday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[1] }}
                      </div>
                      <div
                        v-if="day === 'Tuesday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[2] }}
                      </div>
                      <div
                        v-if="day === 'Wednesday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[3] }}
                      </div>
                      <div
                        v-if="day === 'Thursday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[4] }}
                      </div>
                      <div
                        v-if="day === 'Friday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[5] }}
                      </div>
                      <div
                        v-if="day === 'Saturday'"
                        class="btn btn-primaty feature btn-gray"
                      >
                        {{ item.HRCDetails.OPENDINGDATA[6] }}
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="btn btn-primay feature btn-gray">
                        {{ "⭐".repeat(Math.round(item.HRCDetails.RATING[0]))
                        }}{{
                          "✩".repeat(5 - Math.round(item.HRCDetails.RATING[0]))
                        }}
                        ({{ item.HRCDetails.RATING[1] }}) | Read Reviews
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      <div
                        class="btn btn-primaty feature smaller btn-search-yellow"
                        :class="{
                          'btn-search-blue':
                            item.HRCDetails.HRCTYPE === 'Permanent',
                        }"
                      >
                        {{ item.HRCDetails.FEATURES[0] }}
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6">
                      <div
                        class="btn btn-primaty feature smaller btn-search-yellow"
                        :class="{
                          'btn-search-blue':
                            item.HRCDetails.HRCTYPE === 'Permanent',
                        }"
                      >
                        {{ item.HRCDetails.FEATURES[1] }}
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div
                        class="btn btn-primaty feature smaller btn-search-yellow"
                        :class="{
                          'btn-search-blue':
                            item.HRCDetails.HRCTYPE === 'Permanent',
                        }"
                      >
                        {{ item.HRCDetails.FEATURES[2] }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="breaker" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.btn-search-blue {
  background-color: #33a9bc;
  color: white;
}
.btn-search-blue:hover {
  color: white;
}

.feature {
  font-size: 16px;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
  height: 2.4rem;
}
.distance {
  font-size: 15px;
  width: 32%;
  margin-bottom: 2rem;
}
.smaller {
  padding-top: 0.5rem;
  font-size: 12.5px;
}
.allClosed {
  width: 50%;
  border-color: #ffd124;
}
.allClosed:hover {
  background-color: #ffd124;
  border-color: #ffd124;
}
.tall{
  height: 4rem;
}

.btn-margin{
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  width: 45%;
}
@media (max-width: 990px) {
  .smaller {
    font-size: 13px;
  }
  .distance {
    font-size: 13px;
    width: 90%;
    margin-bottom: 2rem;
  }
  .feature {
    margin: 0;
    height: auto;
    margin-top: 0.5rem;
    width: 100%;
    font-size: 13px;
  }

  .resultName,
  .resultAddress {
    margin-left: 0;
  }
  .allClosed {
    width: 100%;
  }
  .profilePhoto {
    width: 100%;
  }
  .noPadding {
    padding: 0;
  }
  .hrcType {
    font-size: 12px;
  }
  .fullWidth {
    width: 50% !important;
  }
  .btn-margin{
  margin-top: 2rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  width: 95%;
  margin-left: 2.5%;
  
}
.searchLocation{
  font-size: 1.1rem;
  margin: 7%;
  margin-top: 2rem;
}
.adress{
  font-size: 1.3rem;
  font-weight: 600;
}
}
</style>
