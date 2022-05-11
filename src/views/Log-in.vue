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
              <router-link
                to="/register"
                class="nav-link regisignRoute text-black"
                >Sign Up</router-link
              >
            </div>
          </div>
        </nav>
        <hr />
        <div class="regisign">
          <h1 class="regisignHeader">Welcome Back!</h1>
          <p class="regisignP">
            Thank you for being a member of HRC. The Community is growing
            stronger because of you!
          </p>

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

          <div class="form-floating regisignInput">
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <p v-if="errMsg">{{ errMsg }}</p>
          <button
            @click="register"
            class="w-100 btn btn-lg btn-ye regisignInput"
            type="submit"
          >
            Sign Up
          </button>
          <hr />
          <button
            @click="signInWithGoogle"
            class="w-100 btn btn-outline-primary btn-lg regisignInput regilogGoogle"
            type="submit"
          >
            Sign In With Google
          </button>
        </div>
      </div>
      <div class="col-lg-6 yellowGround">
        <img class=" regisignLogo" src="../assets/healthcare.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
const provider = new GoogleAuthProvider();
const auth = getAuth();
const signInWithGoogle = ()=> signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    router.push("/feed");
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

const email = ref("");
const password = ref("");
const errMsg = ref(); //ERROR MESSAGE
const router = useRouter(); // get a reference to our vue router
//console.log("I have and come here");

const register = () => {
  console.log("Registering");
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Succesfully Signin!");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
      }
    });
};

</script>
