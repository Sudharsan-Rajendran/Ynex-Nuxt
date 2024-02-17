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
              <div class="col-12">
               <span><i class="fe fe-arrow-left" style="font-size: large; color:#845ADF ;"></i><span style="font-size: 18px;margin-left:1em; color:#845ADF ;">Transaction Details</span></span> 
                
              </div>
            </div>


            <!------------ card ---------->
            <div class="card custom-card mt-2">
            <div class="card-header justify-content-between  d-block">
              <div>
                <ul class="nav nav-tabs justify-content-center nav-tabs-header mb-0 d-sm-flex d-block mt-sm-0 mt-2"
                  role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page" href="#funds-added"
                      aria-selected="true">Funds Added</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#funds-withdraw"
                      aria-selected="true">Funds Withdraw</a>
                  </li>
                </ul>
              </div>

              <hr>

              <input  name="uname" type="text" class="form-control form-control-lg"
                  id="signin-username" placeholder="Search for bank name or amount" :required="true">

            </div>
            <div class="card-body p-0">
              <div class="tab-content">
                <div class="tab-pane show active text-muted border-0 p-0" id="funds-added" role="tabpanel">
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap mb-0">
                      <tbody class="active-tab">
                        
                        <tr>
                          <td>
                            <p class="text-muted mb-1">15 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKmwT4Lg-b_pzcg000VGriLCqu-90Ot7ibgjRQT2u1g&s" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 100</p> 
                            <span class="badge bg-success-transparent"><i class="fe fe-check-circle" style="font-size: 10px !important;"></i>&nbsp;Success</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">14 Jan 2024 at 03:51  PM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 150</p> 
                            <span class="badge bg-danger-transparent"><i class="fe fe-alert-circle" style="font-size: 10px !important;"></i>&nbsp;Failed</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">13 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 100</p> 
                            <span class="badge bg-success-transparent"><i class="fe fe-check-circle" style="font-size: 10px !important;"></i>&nbsp;Success</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">09 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 200</p> 
                            <span class="badge bg-success-transparent"><i class="fe fe-check-circle" style="font-size: 10px !important;"></i>&nbsp;Success</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">08 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKmwT4Lg-b_pzcg000VGriLCqu-90Ot7ibgjRQT2u1g&s" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 100</p> 
                            <span class="badge bg-danger-transparent"><i class="fe fe-alert-circle" style="font-size: 10px !important;"></i>&nbsp;Failed</span>
                          </td>
                        </tr>

                       
                      </tbody>
                    </table>
                  </div>
                </div>


                <!-- funds withdraw -->
                <div class="tab-pane text-muted border-0 p-0" id="funds-withdraw" role="tabpanel">
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap mb-0">
                      <tbody class="active-tab">

                        <tr>
                          <td>
                            <p class="text-muted mb-1">08 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKmwT4Lg-b_pzcg000VGriLCqu-90Ot7ibgjRQT2u1g&s" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 100</p> 
                            <span class="badge bg-danger-transparent"><i class="fe fe-alert-circle" style="font-size: 10px !important;"></i>&nbsp;Failed</span>
                          </td>
                        </tr>
                        
                        <tr>
                          <td>
                            <p class="text-muted mb-1">09 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 200</p> 
                            <span class="badge bg-success-transparent"><i class="fe fe-check-circle" style="font-size: 10px !important;"></i>&nbsp;Success</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">14 Jan 2024 at 03:51  PM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 150</p> 
                            <span class="badge bg-danger-transparent"><i class="fe fe-alert-circle" style="font-size: 10px !important;"></i>&nbsp;Failed</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">13 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 100</p> 
                            <span class="badge bg-success-transparent"><i class="fe fe-check-circle" style="font-size: 10px !important;"></i>&nbsp;Success</span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <p class="text-muted mb-1">15 Jan 2024 at 10:51  AM</p>
                            <div class="row">
                            <div class="col-2">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKmwT4Lg-b_pzcg000VGriLCqu-90Ot7ibgjRQT2u1g&s" height="30" width="30" alt="">
                            </div>

                            <div class="col-10">
                              <p style="margin-bottom: -4px;">HDFC Bank</p>
                              <p>&#x2022;&#x2022;&#x2022;&#x2022;5254</p>
                            </div>
                          </div>
                          </td>
                          <td>
                            <p class="mb-0">&#8377; 100</p> 
                            <span class="badge bg-success-transparent"><i class="fe fe-check-circle" style="font-size: 10px !important;"></i>&nbsp;Success</span>
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
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
    font-size: 19px !important;
}



</style>
