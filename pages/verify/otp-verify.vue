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
  // middleware: [auth],
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
            <div class="mt-4">
              <p class="form-label text-default">Verify Mobile Number</p>
              <p>We have sent an OTP to you mobile number and registered email address</p>
            </div> 
            <div class="row gy-3">
              <div class="col-xl-12 mt-4">
                <div class="row">
                  <p class="form-label text-default">Mobile Number</p>
                  <div class="col-6">
                  <p>+91 9994488595 </p>
                </div>
                <div class="col-6">
                  <div style="text-align: right;"><i class="bi bi-pencil" style="color: blue;"></i></div>
                </div>
                </div>
               
                <div class="row" style="margin-bottom: -15px;">
                  <label for="signin-username"  class="form-label text-default text-primary col-6">Enter OTP</label>
                  <p style="text-align: right;" class="col-6">Resend in : <span class="text-error">00.27</span></p>
                </div>
                
                <v-otp-input
                ref="otpInput" 
                input-classes="otp-input"
                separator="-"
                :num-inputs="4"
                :should-auto-focus="true"
                input-type="letter-numeric"
                :conditionalClass="['one', 'two', 'three', 'four']"
                
                
              />

              <div><span><i class="bi bi-info-circle" style="color: red; font-size: 11px;"></i></span>&nbsp;<span class="fs-12 text-muted text-error">Didn't receive SMS? Check your registered email!</span></div>
              </div>
            </div>
            <div class="mt-9">
              <div class="col-xl-12 d-grid mt-2">
                <NuxtLink  class="btn btn-lg btn-light" disabled="disabled">NEXT</NuxtLink>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >

.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

.v-otp-input .v-field {   
    width: 33px !important;
    /* border: 1px solid #F7F7F7 !important; */
}



.v-field__field {
    background-color: #F7F7F7 !important;
    border-color: #F7F7F7 !important;
    width: 33px;
}
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
