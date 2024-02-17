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
        <div class="card custom-card " style="background-color: #F8F9FA;">
          <div class="card-body p-3" >
            <div class="row" >
              <div class="col-6">
               <span><i class="fe fe-arrow-left" style="font-size: large; color:#845ADF ;"></i><span style="font-size: 18px;margin-left:1em; color:#845ADF ;">Withdraw</span></span> 
              </div>
            </div>
              <div class="card custom-card overflow-hidden mt-2">
                <div class="card-body">
                  <div class=" align-items-top justify-content-between">
                    <div>
                      <p class="form-label text-default">Withdrawable Amount <i class="fe fe-alert-circle" style=" color:#845ADF ;"></i> :&#8377; 80</p>
                    </div>
                    <hr>
                    
                    <div>
                      <label for="signin-username" class="form-label text-default">Enter Amount</label>
                      <input name="uname" type="text" class="form-control form-control-lg"
                        id="signin-username" placeholder="&#8377; 0" :required="true">
                    </div>

                    <p class="fs-12 text-muted mt-2">Zero</p>
                    
                    <div class="alert alert-warning d-flex align-items-center alert-dismissible fade show" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-info-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </svg>
                    <div style="color: black;font-size: 11px;">Learn how your withdrawable amount and unsettled balance are calculated</div>
                    <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                    </div>
              
                  </div>
                </div>
              </div>

            <div class="card custom-card">
            <div class="card-header justify-content-between  d-block">
              <div >
                Choose Bank Account
              </div>
              <br>

              <div class="row">
                <div class="col-2">
                  <img src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370" height="30" width="30" alt="">
                </div>
                <div class="col-10">
                  <p style="margin-bottom: -4px;">HDFC</p>
                  <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card custom-card">
            <div class="card-body p-0">
              <div class="tab-content">
                <div class="tab-pane show active text-muted border-0 p-0" id="active-orders" role="tabpanel">
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap mb-0">
                      <tbody class="active-tab">
                        
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="lh-1">
                                <span class="avatar avatar-md  avatar-rounded me-2">
                                  <img src="https://e7.pngegg.com/pngimages/521/255/png-clipart-computer-icons-data-file-document-file-format-others-miscellaneous-blue-thumbnail.png" alt="">
                                </span>
                              </div>
                              <div class="align-items-center">
                                <p class="mb-0">Fund Transactions</p>
                                <span class="fs-12 text-muted">Add Funds and Withdraw history</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a aria-label="anchor" href="javascript:void(0);">
                              <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card custom-card">
           <div class="card-body p-0">
             <div class="tab-content">
               <div class="tab-pane show active text-muted border-0 p-0" id="active-orders" role="tabpanel">
                 <div class="table-responsive">
                   <table class="table card-table table-vcenter text-nowrap mb-0">
                     <tbody class="active-tab">
                       <tr>
                         <td>
                           <div class="d-flex align-items-center">
                             <div class="lh-1">
                               <span class="avatar avatar-md  avatar-rounded me-2">
                                 <img src="https://cdn-icons-png.flaticon.com/512/5024/5024335.png" alt="">
                               </span>
                             </div>
                             <div class="align-items-center">
                               <span class="fs-12 text-muted">If you request withdrawal now, the estimated <br>credit time will be <b>11:30 am, 27 Feb 2024</b></span>
                             </div>
                           </div>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 <div class="col-xl-12 d-grid mt-3 mb-2 " >
                    <NuxtLink  class="btn btn-lg btn-light" disabled="disabled">PROCEED</NuxtLink>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.fe {
    font-size: 13px !important;
}



</style>
