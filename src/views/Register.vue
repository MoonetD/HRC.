<template>
  <div class="container-fluid font-exo" id="register">
    <div class="row registerColumn">
      <div class="col-lg-6 registerColumn">
        <nav
          class="regisignNav navbar navbar-expand-lg navbar-light"
          aria-label="Ninth navbar example"
        >
          <div class="container-xl">
            <a class="navbar-brand large-brand" href="/">HRC.</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07XL"
              aria-controls="navbarsExample07XL"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07XL">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <router-link to="/log-in" class="nav-link regisignRoute text-black"
                >Log In</router-link
              >
            </div>
          </div>
        </nav>
        <hr />
        <div class="regisign">
          <h1 class="regisignHeader">Welcome to HRC.</h1>
          <p class="regisignP">
            We Appricieate your consideration of joining HRC. to fight for a
            cost to save lives!
          </p>
          <div class="form-floating fluid-container regisignInput">
            <div class="row">
              <div class="col-lg-6">
                <label for="invitationCode">Invitation Code</label>
                <input
                  type="search"
                  class="form-control w-100"
                  id="invitationCode"
                  placeholder="XXXX-XXXX-XXXX"
                  v-model="invitation"
                />
                
              </div>
              <div class="col-lg-6">
                <button
                  @click="invitation"
                  class="w-100 btn btn-lg btn-yellow"
                  type="submit"
                >
                  Apply for Invitation Code
                </button>
              </div>
            </div>
          </div>

          <div class="form-floating regisignInput">
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating regisignInput ">
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <!-- <p><input type="text" placeholder="Email" /></p>
          <p>
            <input type="password" placeholder="Password" />
          </p> -->
          <p v-if="errMsg">{{ errMsg }}</p>
          <button
            @click="register"
            class="w-100 btn btn-lg btn-blue regisignInput"
            type="submit"
          >
            Sign Up
          </button>
          <hr>
          <button
            @click="signInWithGoogle"
            class="w-100 btn btn-outline-primary btn-lg regisignInput regisignGoogle"
            type="submit"
          >
            Sign Up With Google
          </button>


        </div>
      </div>
      <div class="col-lg-6 blueGround">
        <img class="logo regisignLogo" src="../assets/healthcare.png" />
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup  } from "firebase/auth";
import { useRouter } from "vue-router";
//console.log("I have come here");
const email = ref("");
const errMsg = ref(); //ERROR MESSAGE
const password = ref("");
const router = useRouter(); // get a reference to our vue routerconst provider = new GoogleAuthProvider();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const signInWithGoogle = ()=> signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    router.push("/HRCProvider");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const register = () => {
  console.log("Registering");
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Succesfully registered!");
      router.push("/HRCProvider");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/email-already-in-use":
          errMsg.value = "This Email Is Already Registered";
          break;
        case "auth/weak-password":
          errMsg.value = "Your Password Is Too Weak";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
      }
    });
};

</script>
