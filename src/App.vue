<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

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
  <header class="p-3 navbar navbar-expand-lg navbar-light bg-navbar text-black">
    <div class="container-fluid title-up">
      <a href="/" class="navbar-brand offset-lg-2 font-exo fw-bold brand">HRC.</a>
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

      <div class="collapse navbar-collapse  " id="navbarTogglerDemo03">
        <div class="ti col-lg-8 container">
          <div
            class="d-flex flex-wrap "
          >
            <ul
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            >
              <li>
                <router-link to="/" class="nav-link px-2 text-secondary"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link to="/findHRC" class="nav-link px-2 text-black"
                  >Find HRC</router-link
                >
              </li>
              <li>
                <router-link to="/resource" class="nav-link px-2 text-black"
                  >Resources</router-link
                >
              </li>
              <li>
                <router-link to="/about" class="nav-link px-2 text-black"
                  >About</router-link
                >
              </li>
              <li>
                <button v-if="isLoggedIn" @click="handleSignOut">
                  Sign out
                </button>
              </li>
            </ul>

            <div class="text-end">
              <router-link
                to="/register"
                type="button"
                class="btn btn-outline-primary left"
                >Join as a HRC Service Provider</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- <div class=" container-fluid">
  <div class="ti navbar navbar-expand-lg navbar-light bg-navbar">
    <nav class=" navbar-nav ms-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <div>
        
      <a href="/" class=" navbar-brand test-black font-exo fw-bold">HRC.</a>
      </div>
      
      <router-link class="nav-item nav-link "  to="/">Home</router-link>
      <router-link class="nav-item nav-link"  to="/findHRC">Find HRC</router-link>
      <router-link class="nav-item nav-link"  to="/resource">Resources</router-link>
      <router-link class="nav-item nav-link"  to="/about">About</router-link>
      <button v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
      <router-link type="button" class="left btn btn-outline-primary me-2"  to="/register"> Join as a HRC Service Provider</router-link>
    </nav>
  </div>
  
</div> -->

  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");

@import "./assets/base.css";
</style>
