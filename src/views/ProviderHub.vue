<script></script>

<template>
  <header class="p-3 navbar navbar-expand-lg navbar-light bg-hubbar text-white">
    <div class="container-fluid title-up">
      <a
        href="/"
        class="navbar-brand offset-lg-2 font-exo fw-bold brand text-white"
        >HRC.</a
      >
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
          <div class="d-flex flex-wrap">
            <ul
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            >
              <li>
                <router-link
                  to="/findHRC/providence"
                  class="nav-link px-2 text-white"
                  >Find HRC</router-link
                >
              </li>
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
              <li>
                <button v-if="isLoggedIn" @click="handleSignOut">
                  Sign out
                </button>
              </li>
            </ul>

            <div class="text-end">
              <router-link
                to="/"
                type="button"
                class="btn btn-outline-primary left text-white"
                ><strong>Sign out </strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="welcome">
    <div class="row center">
      <div class="col"><h3 class="userName">Welcome, Project Weber/Renew</h3></div>
      <div class="col align-right">
        <button class="btn btn-light dash">Dashboard</button>
        <router-link to="/HRCProvider/searchHistory">
              <img
                class="icon"
                src="../../public/userIcon/Project Weber Renew.png"
                alt=""
              /></router-link>
      </div>
    </div>
  </div>

  <div class="hubSelections font-exo">
    <div class="row">
      <div class="col">
        <router-link  to="/HRCProvider/GISFinder">
        <div class="grow selections">
          <!-- <img class="selectionPhoto" src="../../public/profile/locationphotos/12.jpg" alt=""> -->
          <h3 class="selectionTitle">Locate Your Next HRC.</h3>
        </div>
        </router-link>
      </div>
      <div class="col">
        <router-link  to="/HRCProvider/HRCForm">
        <div class="grow selections">
          <h3 class="selectionTitle">Publish A New HRC.</h3>
        </div>
        </router-link>
      </div>
      <div class="col">
        <router-link  to="/underconstruction">
        <div class="grow selections">
          <h3 class="selectionTitle">Manage Your HRC(s).</h3>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.bg-hubbar {
  background-color: #33a9bc;
  color: white;
}
.welcome {
  background-color: #d6eef2;
}
.dash{
  margin-right: 5%;
  height: 3.5rem;
  font-size: 1.5rem;
  width: 15rem;
}
.center {
  width: 66%;
  margin: 0% 17%;
}
.userName{
  margin-top: 1rem;
}
.icon {
  width: 4rem;
}
.hubSelections {
  width: 70%;
  margin: 2% 15%;
}
.align-right{
  text-align: right;
  margin-right: 8%;
}
.selections {
  background-image: url("../../public/profile/locationphotos/12.jpg");
  background-size: 240%;
  background-repeat: no-repeat;
  border-radius: 22px;
  margin: 10%;
  height: 70vh;
  width: 80%;
  background-color: #d6eef2;
  text-align: center;
  filter: opacity(40%);
}
.selectionTitle {
  color: #5b5b5b;
  position: absolute;
  bottom: 2rem;
  width: 100%;
}
.selections:hover .selectionTitle {
  transition: all 0.2s ease-in-out;
  font-size: 2rem;
  color: aliceblue;
  font-weight: 600;
}
.selections:hover {
  background-color: #33a9bc;
  margin: 0%;
  height: 80vh;
  width: 100%;

  filter: grayscale(0%) opacity(100%);
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1);
}
.selectionPhoto {
  width: 100%;
  border-radius: 22px 22px 0 0;
}
</style>
