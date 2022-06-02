<template>
<div class="relocate">  <a href="/" class="navbar-brand font-exo fw-bold brand "
        >HRC.</a
      ><hr></div>
    <div class="row processes">
        <div class="col process" :class="{currentStep: form1}">Basic Information</div>
        <div class="col process" :class="{currentStep: form2}">Detailed Information</div>
        <div class="col process" :class="{currentStep: form3}">Review</div>
    </div>
  <div class="formContainer">
    <form @submit.prevent="sumbitHRC" >
      <div class="form-1" v-if="formPosition === 0">
        <div class="mb-3 form-1">
          <label for="HRCName">Your HRC Name:</label>
          <input
            type="text"
            class="form-control"
            v-model="HRCName"
            id="HRCName"
          />
        </div>

        <div class="mb-3 form-1">
          <div class="row">
            <div class="col-6">
              <label for="HRCAdress">Your HRC Address(Street):</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCAdress"
                id="HRCAdress"
              />
            </div>
            <div class="col-3">
              <label for="HRCCity">City:</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCCity"
                id="HRCAdress"
              />
            </div>
            <div class="col-3">
              <label for="HRCState">State:</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCState"
                id="HRCState"
              />
            </div>
          </div>
        </div>

        <div class="mb-3 form-1">
          <div class="row">
            <div class="col moveRight">
              <label for="HRCLat">Your HRC's Latitude:</label>
              <input
                type="numbers"
                class="form-control"
                v-model="HRCLat"
                id="HRCLat"
              />
            </div>
            <div class="col moveRight">
              <label for="HRCLon">Your HRC's Longitude:</label>
              <input
                type="numbers"
                class="form-control"
                v-model="HRCLon"
                id="HRCLon"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="hrcType"
            >What type of HRC are you setting up? (select one):</label
          >
          <select class="form-control" v-model="hrcType" id="hrcType">
            <option>Permanent</option>
            <option>Temporary</option>
            <option>Mobile</option>
          </select>
        </div>
        <br />
        <div class="form-group">
          <label for="hrcFeature1">What is your Primary Service?</label>
          <select class="form-control" v-model="hrcFeature1" id="hrcFeature1">
            <option>Medication-Assisted Treatment</option>
            <option>Outpatient Treatment</option>
            <option>Suboxone Treatment</option>
            <option>Overdose Prevention</option>
            <option>Intensive Outpatient Program</option>
            <option>Safe Injection</option>
            <option>Needle Exchange</option>
            <option>Fentanyl Test Strips</option>
            <option>Counseling</option>
            <option>Others</option>
          </select>
        </div>
        <br />
        <div class="form-group">
          <label for="hrcFeature2">What is your Secondary Service?</label>
          <select class="form-control" v-model="hrcFeature2" id="hrcFeature2">
            <option>Medication-Assisted Treatment</option>
            <option>Outpatient Treatment</option>
            <option>Suboxone Treatment</option>
            <option>Overdose Prevention</option>
            <option>Intensive Outpatient Program</option>
            <option>Safe Injection</option>
            <option>Needle Exchange</option>
            <option>Fentanyl Test Strips</option>
            <option>Counseling</option>
            <option>Others</option>
          </select>
        </div>
        <br />
        <div class="form-group">
          <label for="hrcFeature3">What is your Tertiary Service?</label>
          <select class="form-control" v-model="hrcFeature3" id="hrcFeature3">
            <option>Medication-Assisted Treatment</option>
            <option>Outpatient Treatment</option>
            <option>Suboxone Treatment</option>
            <option>Overdose Prevention</option>
            <option>Intensive Outpatient Program</option>
            <option>Safe Injection</option>
            <option>Needle Exchange</option>
            <option>Fentanyl Test Strips</option>
            <option>Counseling</option>
            <option>Others</option>
          </select>
        </div>
        <br />
        <button
          @click=" formPosition = formPosition - 1"
          class="btn btn-secondary btnSmallerGray invisible"
        >
          Previous
        </button>
        <button
          @click="changeForm12(), formPosition = formPosition + 1"
          class="btn btn-primary btn-blue btnSmaller"
        >
          Next
        </button>
      </div>

      <div class="form-2" v-else-if="formPosition === 1">
        <div class="mb-3 form-1">
          <h5 class="text-black">
            Please enter your bussiness hours below in the format of
            "7:00AM-2:30PM"(if closed put "CLOSED")
          </h5>
          <div class="row">
            <div class="col">
              <label for="HRCDateSun">Sunday</label>
              <input
                type="text"
                class="form-control noPadding"
                v-model="HRCDateSun"
                id="HRCDateSun"
              />
            </div>
            <div class="col">
              <label for="HRCDateMon">Monday</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCDateMon"
                id="HRCDateMon"
              />
            </div>
            <div class="col">
              <label for="HRCDateTue">Tuesday</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCDateTue"
                id="HRCDateTue"
              />
            </div>
            <div class="col">
              <label for="HRCDateWed">Wednesday</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCDateWed"
                id="HRCDateWed"
              />
            </div>
            <div class="col">
              <label for="HRCDateThu">Thursday</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCDateThu"
                id="HRCDateThu"
              />
            </div>
            <div class="col">
              <label for="HRCDateFri">Friday</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCDateFri"
                id="HRCDateFri"
              />
            </div>
            <div class="col">
              <label for="HRCDateSat">Saturday</label>
              <input
                type="text"
                class="form-control"
                v-model="HRCDateSat"
                id="HRCDateSat"
              />
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="HRCServices"
            >Please list the <strong>service </strong>your HRC will provide
            below:</label
          >
          <textarea
            type="text"
            class="form-control taller"
            v-model="HRCServices"
            id="HRCServices"
          />
        </div>
        <div class="mb-3">
          <label for="HRCCosts"
            >Please list the<strong> Cost</strong> of your service below:</label
          >
          <textarea
            type="text"
            class="form-control taller"
            v-model="HRCCosts"
            id="HRCCosts"
          />
        </div>

        <div class="mb-3">
          <label for="HRCStatement1"
            >Please enter the first paragraph of your statment for your HRC (500
            word limit):</label
          >
          <textarea
            type="text"
            class="form-control taller"
            v-model="HRCStatement1"
            id="HRCStatement1"
          />
        </div>
        <div class="mb-3">
          <label for="HRCStatement2"
            >Please enter the second paragraph of your statment (500 word
            limit):</label
          >
          <textarea
            type="text"
            class="form-control taller"
            v-model="HRCStatement2"
            id="HRCStatement2"
          />
        </div>
        <br />
        <button
          @click="changeForm21(),formPosition = formPosition - 1"
          class="btn btn-secondary btnSmallerGray"
        >
          Previous
        </button>
        <button
          @click="changeForm23(),formPosition = formPosition + 1"
          class="btn btn-primary btn-blue btnSmaller"
        >
          Next
        </button>
      </div>
      <div class="finishForm" v-else>
        <div class="mb-3">
          <div class="row noMargin">
            <div class="col">
              Your HRC Name is:
              <input
                class="form-control"
                type="text"
                :placeholder="HRCName"
                disabled
              />
            </div>
            <div class="col">
              Your HRC Address is:
              <input
                class="form-control"
                type="text"
                :placeholder="HRCAdress + ', ' + HRCCity + ',' + HRCState"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <div class="col">
              Your HRC Latitude is:
              <input
                class="form-control"
                type="text"
                :placeholder="HRCLat"
                disabled
              />
            </div>
            <div class="col">
              Your HRC Longitude is:
              <input
                class="form-control"
                type="text"
                :placeholder="HRCLon"
                disabled
              />
            </div>
            <div class="col">
              Your HRC Type is:
              <input
                class="form-control"
                type="text"
                :placeholder="hrcType"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <div class="col">
              Your Primary Service is:
              <input
                class="form-control"
                type="text"
                :placeholder="hrcFeature1"
                disabled
              />
            </div>
            <div class="col">
              Your Secondary Service is:
              <input
                class="form-control"
                type="text"
                :placeholder="hrcFeature2"
                disabled
              />
            </div>
            <div class="col">
              Your Tertiary Service is:
              <input
                class="form-control"
                type="text"
                :placeholder="hrcFeature3"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <h6>Your Bussiness Schedule is:</h6>
            <div class="col">
              Sunday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateSun"
                disabled
              />
            </div>
            <div class="col">
              Monday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateMon"
                disabled
              />
            </div>
            <div class="col">
              Tuesday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateTue"
                disabled
              />
            </div>
            <div class="col">
              Wednesday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateWed"
                disabled
              />
            </div>
            <div class="col">
              Thursday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateThu"
                disabled
              />
            </div>
            <div class="col">
              Friday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateFri"
                disabled
              />
            </div>
            <div class="col">
              Saturday
              <input
                class="form-control"
                type="text"
                :placeholder="HRCDateSat"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <div class="col">
              Your Services are:<textarea
                type="text"
                class="form-control taller"
                :placeholder="HRCServices"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <div class="col">
              Your Costs are:<textarea
                type="text"
                class="form-control taller"
                :placeholder="HRCCosts"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <div class="col">
              Your Statments are(pt.1):<textarea
                type="text"
                class="form-control taller"
                :placeholder="HRCStatement1"
                disabled
              />
            </div>
          </div>
          <br />
          <div class="row noMargin">
            <div class="col">
              Your Statments are(pt.2):<textarea
                type="text"
                class="form-control taller"
                :placeholder="HRCStatement2"
                disabled
              />
            </div>
          </div>
        </div>

        <button
          @click="changeForm32(),formPosition = formPosition - 1"
          class="btn btn-secondary btnSmallerGray"
        >
          Previous
        </button>
        <button  class="btn btn-primary btn-blue btnSmaller">Submit</button>
      </div>
    </form>
  </div>
</template>
<!-- <script setup>

</script> -->
<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default {
  data: () => {
    return {
      formPosition: 0,
      form1: true,
      form2: false,
      form3: false,
      HRCName: "",
      HRCAdress: "",
      HRCLat: "",
      HRCLon: "",
      hrcType: "",
      hrcFeature1: "",
      hrcFeature2: "",
      hrcFeature3: "",
      HRCDateSun: "",
      HRCDateMon: "",
      HRCDateTue: "",
      HRCDateWed: "",
      HRCDateThu: "",
      HRCDateFri: "",
      HRCDateSat: "",
      HRCServices: "",
      HRCCosts: "",
      HRCStatement1: "",
      HRCStatement2: "",
      HRCCity:"",
      HRCState:""
    };
  },
  methods: {
      
    nextStep() {
      formPosition = formPosition + 1;
      console.log(this.formPosition);
    },changeForm12(){
        console.log("changed")
        this.form1=false;
        this.form2=true;
    }
    ,changeForm23(){
        this.form2=false;
        this.form3=true;
    }
    ,
    changeForm21(){
        this.form2=false;
        this.form1=true;
    }
    ,changeForm32(){
        this.form3=false;
        this.form2=true;
    }
    ,
    async sumbitHRC(){

        await setDoc(doc(db,"finalBannerSearch/"+ this.HRCName +"_"+ this.HRCCity), {
            "NAME":this.HRCName,
            "HRCTYPE": this.hrcType,
            "ADDRESS": this.HRCAdress+', '+this.HRCCity+','+this.HRCState,
            "LAT": this.HRCLat,
            "LON": this.HRCLon,
            "FEATURES": [this.hrcFeature1,
                        this.hrcFeature2,
                        this.hrcFeature3],
            "PHOTO": "bank",
            "HRCID": 99,
            "OPENDINGDATA": [this.HRCDateSun,
                            this.HRCDateMon,
                            this.HRCDateTue,
                            this.HRCDateWed,
                            this.HRCDateThu,
                            this.HRCDateFri,
                            this.HRCDateSat],
            "STATUS": true,
            "COST": this.HRCCosts,
            "SERVICES": this.HRCServices,
            "STATEMENT": [ this.HRCStatement1,
                        this.HRCStatement2 ],
            "RATING": [ 0,
                        0]});
            },
  },
};
</script>
<style>
.formContainer {
  width: 50%;
  margin-left: 25%;
  margin-top: 0%;
}
input[type="text"] {
  left: 0;
}
.moveRight {
  padding: 0ch;
  left: 1%;
}
.taller {
  height: 5rem;
}
.noPadding {
  padding: 0ch;
}
input[type="text"] {
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 10px 10px 10px 10px;
  transition: width 0.4s ease-in-out;
}
.relocate{
    width: 50%;
    margin-left: 25%;
    margin-top: 5%;
}
.processes{
    width: 52%;
    margin-left: 24%;
}
.process{
    
    border: 1px solid;
    border-color: #33a9bc;
    margin: 2%;
    border-radius: 22px;
    height: 2.5rem;
    text-align: center;
    font-size: 1.2rem;
    padding-top: 0.2rem;
}
.currentStep{
    
    border: 1px solid;
    background-color: #33a9bc;
    font-weight: 500;
    color: white;
}
.btnSmaller{
    border-color: #33a9bc;
    height: 2.8rem;
    width: 10%;
    font-size: 1.2rem;
    margin-left: 80%;
}
.btnSmallerGray{
    height: 2.8rem;
    width: 10%;
    font-size: 1.2rem;
}
.finishForm{
    padding: 0;
    right: 0;
}
.noMargin{
    margin: 0 !important;
    padding: 0 !important;
}
</style>
