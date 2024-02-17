<script lang="ts" setup>
import passwordInput from '@/components/UI/passwordInput.vue';
import auth from '@/middleware/auth';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
// import Vue from 'vue';
// import VueTelInput from 'vue-tel-input';


import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

definePageMeta({
  layout: 'custom',
  middleware: [auth],
})
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const user = ref({
  username: 'spruko',
  password: 'spruko1234',
});
const router = useRouter();

const login = async () => {
  let data = await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (data.authenticated) {
    router.push('/');
    toast.success("LoggedIn", {
      theme: 'auto',
      icon: true,
      hideProgressBar: true,
      autoClose: true,
      position: 'top-right',
    });
  } else {
    toast.error("Invalid credentials", {
      theme: 'auto',
      icon: true,
      hideProgressBar: true,
      autoClose: true,
      position: 'top-right',
    });
  }
};
</script>


<script lang="ts">
export default {
  components: {
    passwordInput
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
      <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
        <div class="card custom-card">
          <div class="card-body p-5">
            <p class="h5 fw-semibold mb-2 text-center">LOGO</p>
            <div class="mt-4">
              <p class="form-label text-default">Login</p>
              <p>Enter Mobile Number to Continue</p>
            </div> 
            <div class="row gy-3">
              <div class="col-xl-12 mt-4">
                <label for="signin-username" class="form-label text-default">Mobile Number</label>
                <vue-tel-input class="form-control-line form-control-lg form-control" :inputOptions = "{placeholder:''}"   :dropdownOptions = "{showFlags:false, showDialCodeInList:true,showDialCodeInSelection:true}"></vue-tel-input>
              </div>
            </div>
            <div class="mt-9">
              <div class="col-xl-12 d-grid mt-2">
                <p class="fs-12 text-muted mt-3">By entering OTP,I agree with the Terms and Conditions</p>
                <NuxtLink @click.prevent="login" class="btn btn-lg btn-primary">NEXT</NuxtLink>
              </div>
              <div class="text-center">
              <p class="fs-12 text-muted mt-3">Cannot access? <NuxtLink to="#"
                  class="text-primary">Login via client id</NuxtLink>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control-line {
  background: transparent;
  border: none;
  border-bottom: 3px solid #845ADF;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

.form-control-line:focus {
  outline: none;
}


</style>
