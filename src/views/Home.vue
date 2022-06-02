

<template>
  <!-- Navbar -->
  
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
                <router-link to="/findHRC/providence" class="nav-link px-2 text-black"
                  >Find HRC</router-link
                >
              </li>
              <li>
                <router-link to="/resource" class="nav-link px-2 text-black"
                  >Resources</router-link>
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

  <!-- Title -->

  <section class="font-exo" id="title">
    <div class="central row">
      <div class="mx-auto col-lg-6 col-md-12 col-sm-12 title-split">
        <h1 class="text-white font-exo bold title-text">
          Find Harm Reduction Centers in Rhode Island.
        </h1>
        <p class="text-white font-exo title-paragraph">
          The greatest danger of substance use is to use it all alone when there
          is no one to help you prevent or reverse Overdose. Try out a Harm
          Reduction Center to help you prevent Overdose!
        </p>
        <router-link to="/findHRC/providence" type="button" class="btn brn-primary search-btn"
          >Search for a safe space
          <img src="../../public/src/search_icon.png" class="search-icons" alt=""
        /></router-link>
      </div>
      <div class="z-1 mx-auto col-lg-6 title-split">
        <div class="">
          <img class="logo rotate" src="../../public/src/healthcare.png" alt="" />
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section id="features">
    <div class="container-fluid font-exo">
      <div class="row">
        <div class="col-lg-4">
          <img
            class="feature-icons"
            src="../../public/src/verified_icon.png"
            alt="verified_logo"
          />
          <h3 class="feature-text">Verified Harm Reduction Center</h3>
          <p class="ft">
            All the Harm Reduction Centers have been verified by XXX. Your
            safety is our priority.
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="feature-icons"
            src="../../public/src/different_Units.png"
            alt="verified_logo"
          />
          <h3 class="feature-text">Diverse Service Providers</h3>
          <p class="ft">
            We want you to get the latest news on Harm Reduction Centers! Harm
            Reduction Centers will update their latest plan on situating mobile
            harm reduction centers on this site.
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="feature-icons"
            src="../../public/src/location_icon.png"
            alt="verified_logo"
          />
          <h3 class="feature-text">Find Potential HRC Sites</h3>
          <p class="ft">
            We want you to get the latest news on Harm Reduction Centers! Harm
            Reduction Centers will update their latest plan on situating mobile
            harm reduction centers on this site
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimony -->
  <section id="testimony" class="font-exo">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
      data-interval="1000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2 class="testimonial-text">
            “Using HRC. helped me find my Harm Reduction Center, and it had been
            a tremondous help! I found my support group and believe everyone
            deserves one!”
          </h2>

          <em class="testified align-left">Anonymous HRC. User, Providence</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">
            “Using alone is always the number one threats to opiod users. HRC is
            a game changer with a centralized information board for Harm
            Reduction Service Users.”
          </h2>

          <em class="testified float-right align-left"
            >Justin, Founder for Center For Complexity</em
          >
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div class="credits-icons">
      <img
        class="credits align-left"
        src="../../public/src/cfclogo.png"
        alt="tc-logo"
      />
      <img
        class="credits align-left"
        src="../../public/src/RISD_logo.png"
        alt="tnw-logo"
      />
      <img
        class="credits align-left"
        src="../../public/src//brown_icon.png"
        alt="biz-insider-logo"
      />
    </div>
  </section>

  <!-- Call to Action -->
  <section id="callToAction" class="font-exo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 font-exo">
          <h3 class="cta-text">
            What Are You Waiting For? Your Next Safe Injection Awaits!
          </h3>
        </div>
        <div class="col-lg-6 cta-btn">
          <router-link
            to="/findHRC/providence"
            type="button"
            class="btn search-cta my-auto"
            >Start Searching!
            <img src="../../public/src/white-search-icon.png" class="search-icons-cta" alt=""
          /></router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Rights -->
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
</template>
