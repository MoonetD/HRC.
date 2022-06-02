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

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const db = getFirestore(fire);

const route = useRoute();

//Set up for getting search data
var searchName = [];
var HRCArray = [];
var testCollection = [];

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

export default {
  data() {
    // console.log(searchObject, "is search object");
    // return testCollection
    return {
      searchData: testCollection,
      ID: this.HRCArray,
      image: {},
    };
  },
  computed: {},
  methods: {
    submitName() {
      console.log(testCollection[0].HRCDetails.ADDRESS);
    },
    isPermanent() {
      return;
    },
    refresher() {
      testCollection[0].id = 99;
    },
  },
  mounted() {},
};
</script>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { getDoc, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const router = useRouter();
const hrcSearch = ref("");
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// fetchData();

onMounted(() => {
  const route = useRoute();
  var addressSearch = route.params.name;
  searchName.push(addressSearch);
  // printAddress();
  async function fetchData() {
    const searchData = await getDoc(
      doc(db, "finalBannerSearch/" + addressSearch)
    );
    HRCArray.push({ ["search"]: searchData.data() });
  }
  fetchData();
  console.log(HRCArray);
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
            class="form-control searchInput"
            placeholder="Search Streets"
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
            <div class="col-lg-6 ">
              <ul
                class="nav col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
              >
                <div class="col-12 ">
                  <li>
                    <router-link to="/resource" class="nav-link px-2 text-white"
                      >Resources</router-link
                    >
                  </li>
                </div>
                <div class="col-12">
                  <li>
                    <router-link to="/about" class="nav-link px-2 text-white"
                      >About</router-link
                    >
                  </li>
                </div>
                <div class="col-12">
                  <router-link
                    to="/register"
                    type="button"
                    class="btn btn-outline-primary btn-outline-provider float-right"
                    id="joinProvider"
                    >Join as a HRC Service Provider</router-link
                  >
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div v-for="(item, index) in HRCArray">
    <div class="container font-exo">
      <div class="imgText">
        <img
          class="imgText"
          :src="'../profile/detailLocationPhotos/' + item.search.HRCID + '.jpg'"
          alt=""
        />
        <div class="HRCNameText">
          <h4 class="text-white">{{ item.search.NAME }}</h4>
        </div>
        <div class="HRCAddressText">
          <p>{{ item.search.ADDRESS }}</p>
        </div>
          <div class="updated">
          <p class="updateDate">Updated May 18th, 2022</p>
        </div>
        <div class="HRCTypeText">
          <img
            class="typeIcon"
            :src="'../typeIcons/' + item.search.HRCTYPE + '.png'"
            alt=""
          />
          <p class="smallerText">{{ item.search.HRCTYPE }}</p>
        </div>
      
      </div>
    </div>
    <div class="container clickables">
      <div>
        <a
          class="btn btn-primary btn-blue noBoarder fullwidth-btn directionBtn direction"
          target="_blank"
          :href="'https://www.google.com/maps/search/' + item.search.ADDRESS"
          >
          <p class=" float-middle biggerfeatureText "> Direction</p>
          </a
        >
      </div>
      <div class="row features">
        <div class="col toLeft">
          <a :href="'tel:' + item.search.PHONE"
            ><button class="btn btn-outline-primary halfwidth-btn call">
              <p class="featureText">Call</p>
            </button></a
          >
        </div>
        <div class="col toRight">
          <a :href="item.search.WEBSITE">
            <button class="btn btn-outline-primary halfwidth-btn  internet">
              
              <p class="featureText">Website </p>
              
            </button></a
          >
        </div>
      </div>
      <div class="HRCSchedule">
        <button
          class="btn btn-primary HRCSchedulebtn "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <!-- <img class="smallIcons float-left" src="/icons/calendar.png" alt="" /> -->
          <p class="float-middle center featureText">
          <p v-if="day === 'Sunday'">{{ item.search.OPENDINGDATA[0] }}</p>
          <p v-else-if="day === 'Monday'">{{ item.search.OPENDINGDATA[1] }}</p>
          <p v-else-if="day === 'Tuesday'">{{ item.search.OPENDINGDATA[2] }}</p>
          <p v-else-if="day === 'Wednesday'">
            {{ item.search.OPENDINGDATA[3] }}
          </p>
          <p v-else-if="day === 'Thursday'">
            {{ item.search.OPENDINGDATA[4] }}
          </p>
          <p v-else-if="day === 'Friday'">{{ item.search.OPENDINGDATA[5] }}</p>
          <p v-else-if="day === 'Saturday'">
            {{ item.search.OPENDINGDATA[6] }}
          </p>
          <p v-else>False Date Data</p></p>

          <p class="float-right goUp center">▽</p>
        </button>
        <div class="collapse" id="collapseExample">
          <div class="card card-body container smallerFonts">
            <div class="row">
              <div class="col">Sunday: {{ item.search.OPENDINGDATA[0] }}</div>
              <div class="col">Thursday: {{ item.search.OPENDINGDATA[4] }}</div>
            </div>
            <div class="row">
              <div class="col">Monday: {{ item.search.OPENDINGDATA[1] }}</div>
              <div class="col">Friday: {{ item.search.OPENDINGDATA[5] }}</div>
            </div>
            <div class="row">
              <div class="col">Tuesday: {{ item.search.OPENDINGDATA[2] }}</div>
              <div class="col">Saturday: {{ item.search.OPENDINGDATA[6] }}</div>
            </div>
            <div class="row">
              <div class="col">
                Wednesday: {{ item.search.OPENDINGDATA[3] }}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <br>
      <hr />
      <div class="container services">
        <h3 class="subtitle">Availiable Services</h3>
        <ul>
          <li>{{ item.search.FEATURES[0] }}</li>
          <li>{{ item.search.FEATURES[1] }}</li>
          <li>{{ item.search.FEATURES[2] }}</li>
        </ul>
      </div>
      <hr />
      <div class="container costs">
        <h3  class="subtitle">Service Costs</h3>
        <ul>
          <li>Call HRC Provider for Details.</li>
        </ul>
      </div>
      <hr />
      <div class="container statements">
        <h3  class="subtitle">Professional Statements:</h3>
        <p class="statementParagraph">{{ item.search.STATEMENT[0] }}</p>
        <p class="statementParagraph">{{ item.search.STATEMENT[1] }}</p>
      </div>
      <hr />
      <div class="container">
<h3  class=" subtitle">Location on Map</h3>
      <iframe
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        :src="
          'https://www.google.com/maps/embed/v1/place?key=AIzaSyAVFyk0PEhXAAJDAVl17iEho7xn_ec_sqk&q=' +
          item.search.ADDRESS
        "
      >
      </iframe>
      </div>
       
      <form class="rating">
        <div class="ratingHeader">Write a Review</div>
        <div class="ratingMain">
          <h3 class="ratingName">{{ item.search.NAME }}</h3>
          <div class="row selectionRwo">
            <div class="col stars selectRating">✩✩✩✩✩</div>
            <div class="col selectRating text-right">Select Rating</div>
          </div>
          <div class="ratingKeyword selectionRwo">
            <div class="form-floating">
              <input
                class="form-control"
                id="keywords"
                placeholder="name@example.com"
              />
              <label class="text-white" for="Ask HRC for Keywords"
                >Enter the Keywors from HRC provider :</label
              >
            </div>
          </div>
          <div>
            <textarea
              placeholder="Enter your Your comment below (500 words remains) |"
              id="review"
            ></textarea>
            <button class="btn btn-primary btn-yellow text-black reviewBtn">
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- Footer -->
  <footer id="rights">
    <router-link to="/about" class="nav-link px-0 text-black"
      >About</router-link
    >
    <p class="Rights">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Risus ultricies
      tristique nulla aliquet enim tortor at auctor. Nunc sed velit dignissim
      sodales ut eu sem integer. Lacinia quis vel eros donec ac.
    </p>
    <p class="copyright">© Copyright HRC. Group</p>
  </footer>
  <!-- Modal -->
</template>

<style scoped>
.imgText {
  width: 100%;
  border-radius: 22px;
  margin-top: 2%;
}
.HRCNameText {
  position: absolute;
  top: 1.5rem;
  left: 4%;
}
h4 {
  font-size: 2rem;
}
.features{
  margin:0.8rem 0 !important;
}
.HRCAddressText {
  position: absolute;
  top: 3rem;
  left: 4%;
  color: white;
  font-size: 1.5rem;
}
.HRCTypeText {
  position: absolute;
  bottom: 1rem;
  left: 4%;
  color: white;
  font-size: 1.5rem;
  width: 12%;
}
.smallerText {
  font-size: 1rem;
  float: right;
  padding-top: 0.5rem;
}

.typeIcon {
  float: left;
}
.smallIcons {
  width: 1.8rem;
}
.HRCSchedulebtn {
  background-color: white;
  border-color: #33a9bc;
  color: #33a9bc;
  width: 100%;
  height: auto;
  background-image: url("../../public/icons/calendar.png");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 5% center;
}
.call{
    background-color: white;
  border-color: #33a9bc;
  color: #33a9bc;
  width: 100%;
  height: auto;
  background-image: url("../../public/icons/phone-call.png");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 1.3rem center;
}
.internet{
      background-color: white;
  border-color: #33a9bc;
  color: #33a9bc;
  width: 100%;
  height: auto;
  background-image: url("../../public/icons/world-wide-web.png");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 1.3rem center;
}
.internet:hover{
  background-image: url("../../public/icons/white_internet.png");
  color: white;
}
.call:hover{
  background-image: url("../../public/icons/white_phone.png");
  color: white;
}
.direction{
  height: auto;
  background-image: url("../../public/icons/location.png");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 1.3rem center;
}
.HRCSchedulebtn:hover {
  background-color: white;
  border-color: #33a9bc;
  color: #33a9bc;
  width: 100%;

  
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.float-middle {
  width: 50%;
  margin-inline: auto;
}
.btn {
  border-radius: 15px;
  height: 3rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
}
.goUp {
  bottom: 2.4rem;
}
.noBoarder {
  border-width: 0;
}

.HRCSchedulebtn:focus {
  border-radius: 15px 15px 0 0;
  border-width: 0;
  box-shadow: 0;
  background-color: #33a9bc;
  border-color: #33a9bc;
  color: white;
    background-image: url("../../public/icons/white_calendar.png");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 5% center
}
.btn:focus {
  box-shadow: none;
}
#review {
  margin-left: 5%;
  width: 90%;
  height: 10rem;
  border-color: #b8b8b8;
}
.ratingHeader {
  margin-top: 1.5rem;
  padding: 0.2rem;
  border-radius: 22px 22px 0 0;
  background-color: #33a9bc;
  text-align: center;
  color: white;
}

.ratingName {
  margin-top: 2rem;
  text-align: center;
}
#keywords {
  background-color: #33a9bc;
  color: white;
}
.selectRating {
  font-size: 1.2rem;
}
.text-right {
  text-align: right;
  padding-top: 0.5rem;
  left: 5%;
}
.selectionRwo {
  padding-inline: 5%;
}
.stars {
  font-size: 1.8rem;
}
.reviewBtn {
  margin-left: 5%;
  border-radius: 12px !important;
  width: 90%;
  border-color: #ffd124;
  font-size: 1.6rem;
  height: 5rem;
  margin-bottom: 5rem;
}
.searchInput {
  border-radius: 22px;
  width: 80%;
}
.reviewBtn:hover {
  margin-left: 5%;
  width: 90%;
  border-color: #ffd124;
  background-color: #ffd124;
}
.searchInput {
  left: 10.8rem;
}
.btn-outline-provider {
  color: azure;
  border-color: azure;
  margin-left: 20%;
}
.btn-outline-provider:hover {
  color: #535353;
  background-color: azure !important;
}
.nav-link{
  text-align: right;
}
#joinProvider{
  margin-top: 0;
  font-size: 0.9rem;
  padding-top: 0.8rem;
}
.toLeft{
  padding-left: 0;
}
.toRight{
  padding-right: 0;
}
.updateDate{
  position: absolute;
  color: white;
  font-size: 11px;
  bottom: 0;
  height: 11px;
  right: 2rem;
}
.featureText{
  font-size: 18px;
}
.features{
  margin-top: 1rem;

}
.center{
  margin-bottom: 0.2rem;
}
.directionBtn{
  margin-top: 2.5rem ;
}
.directionBtn{
  height: 48px;
}
.directionBtn:hover{
  background-color: #33a9bc;
}
.biggerfeatureText{
  font-size: 20px;
} 
.subtitle{
  margin-bottom: 1rem;
}
.statementParagraph{
  padding: 0.5rem;
}
@media (max-width: 990px) {
  .HRCAddressText {
    font-size: 0.8rem;
    top: 3.5rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  .HRCTypeText {
    height: 35px;
    bottom: 0;
    width: 30%;
  }
  .smallerText {
    font-size: 0.8rem;
    float: right;
    bottom: 0.2rem;
  }
  .halfwidth-btn {
    width: 100%;
  }
  .fullwidth-btn {
    width: 100%;
  }
  .smallerFonts {
    font-size: 14px;
  }
  .navbar-brand {
    margin-right: 0 !important;
  }
  .searchInput {
    left: 2.8rem;
  }
}
</style>
