



<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";




const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
       

});

const handleSignOut = () => {
  console.log("logging out");
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>


<template>


  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");

@import "./assets/base.css";

</style>
