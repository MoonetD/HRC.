<script></script>
<template>
  <header class="p-3 navbar navbar-expand-lg navbar-light bg-hubbar text-white">
    <div class="container-fluid title-up">
      <a href="/" class="navbar-brand font-exo fw-bold brand text-white"
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
        <div class="col-lg-8 container">
          <div class="d-flex flex-wrap">
            <ul
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            ></ul>

            <div class="text-end">
                <router-link to="/HRCProvider">
              <button class="btn btn-light dash">Dashboard</button></router-link>
              <img
                class="icon"
                src="../../public/userIcon/ProjectWeberRenew.png"
                alt=""
              />
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

  <div class="row searchLine font-exo">
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">
              15 Westminster St, <br />
              Providence, RI 02903
            </h5>
            <h3>Total Score: <strong class="excelent">89.4</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score excelent">99 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score excelent"> 99.66</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good">84 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score good"> 64.38</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score excelent"> 100</strong>
              </li>
            </ul>
          </div>
                    <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">
              112 Douglas Ave
              <br />
              Providence, RI 02908
            </h5>
            <h3>Total Score:<strong class="good"> 73.6</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score good"> 66 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score excelent"> 100</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good"> 84</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score bad">18.1 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score excelent"> 100</strong>
              </li>
            </ul>
          </div>
                   <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">
              45 Royal Little Dr, <br />
              Providence, RI 02904
            </h5>
            <h3>Total Score: <strong class="good">74.1</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score good"> 72</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score excelent"> 98.2</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good">82 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score bad"> 18.1</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score excelent">100 </strong>
              </li>
            </ul>
          </div>
          <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-Flg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">20 Summer St, <br />Pawtucket, RI 02860</h5>
            <h3>Total Score: <strong class="good">74.2</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score excelent">93 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score excelent">100 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good"> 80</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score excelent"> 97.8</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score bad"> 0</strong>
              </li>
            </ul>
          </div>
                    <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="row searchLine font-exo">
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">
              16 Surrey Dr, <br />
              Johnston, RI 02919
            </h5>
            <h3>Total Score: <strong class="bad">35.3</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score bad">0 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score bad">0 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good">74 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score bad"> 2.64</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score excelent">100 </strong>
              </li>
            </ul>
          </div>
                    <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">
              4 Norman Dr, <br />
              North Providence, RI 02904
            </h5>
            <h3>Total Score: <strong class="bad">59.2</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score bad">49 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score good"> 75.5</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score bad"> 50</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score bad"> 21.5</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score excelent">100 </strong>
              </li>
            </ul>
          </div>
                    <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">301 Pontiac Ave, <br />Cranston, RI 02910</h5>
            <h3>Total Score: <strong class="bad">52.7</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score bad">47 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score good">75.5 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good"> 62</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score bad"> 39</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score bad" > 40</strong>
              </li>
            </ul>
          </div>
                   <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
    <div class="slimer col-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h5 class="fw-normal">12 Hare St, <br />West Warwick, RI 02893</h5>
            <h3>Total Score: <strong class="good">80.1</strong></h3>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mt-2 mb-0">
              <li class="row">
                <h6 class="col-9 tag">Accessibility Score:</h6>
                <strong class="col score good"> 66</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Emergency Response Score:</h6>
                <strong class="col score excelent good">87.8 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Hotzone Coverage Score:</h6>
                <strong class="col score good"> 62</strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Population Score:</h6>
                <strong class="col score good">84.8 </strong>
              </li>
              <li class="row">
                <h6 class="col-9 tag">Other Provider Score:</h6>
                <strong class="col score excelent">100 </strong>
              </li>
            </ul>
          </div>
           <router-link to="/HRCProvider/GISFinder">
          <button
            type="button"
            class="card-footer searchAgain w-100 btn btn-lg btn-primary"
          >
            Update Search
          </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-hubbar {
  background-color: #33a9bc;
  color: white;
}
.icon {
  width: 2.5rem;
}
.dash {
  color: #33a9bc;
  margin-right: 3rem;
}
.left {
  left: 20%;
}
.tag {
  font-size: 15px;
  text-align: left;
  margin-bottom: 1.5rem;
}
.score {
  font-size: 1.1rem;
  text-align: left;
}
.searchAgain {
  background-color: #d6eef2;
  border-color: #d6eef2;
  color: #464646;
}
.searchAgain:hover {
  background-color: #33a9bc;
  border-color: #33a9bc;
}
.searchAgain:focus {
  background-color: #33a9bc;
  border-color: #33a9bc;
}
.searchLine {
  margin-top: 2%;
  padding-inline: 10rem;
}
.slimer {
  padding-inline: 2rem;
  padding-top: 0rem;
}
.brand {
  margin-left: 10%;
}
h5 {
  font-size: large;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.excelent {
  color: #27ca40;
}
.good {
  color: #ffc130;
}
.bad {
  color: #ff6058;
}
</style>
