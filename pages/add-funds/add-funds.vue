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
                <i class="fe fe-arrow-left" style="font-size: large; color:#845ADF ;"></i>
                
              </div>
              <div class="col-6" style="float: right;">
                <p style="float: right;color: #845ADF; ">LEARN HOW</p>
                
              </div>
            </div>
              <div class="card custom-card overflow-hidden">
                <div class="card-body">
                  <div class=" align-items-top justify-content-between">
                    <div>
                      <p class="form-label text-default">Trading Balance &#8377; 80</p>
                    </div>
                    <hr>
                    
                    <div>
                      <label for="signin-username" class="form-label text-default">Enter Amount</label>
                      <input name="uname" type="text" class="form-control form-control-lg"
                        id="signin-username" placeholder="&#8377; 0" :required="true">
                    </div>

                    <p class="fs-12 text-muted mt-2">Zero</p>

              <div class="row">
                <div class="col-4">
                    <button type="button" class="btn btn-primary btn-sm" >+ &#8377; 1,000</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-primary btn-sm">+ &#8377; 5,000</button>
                </div>
                <div class="col-4" >
                    <button type="button"  class="btn btn-primary btn-sm">+ &#8377; 1,000</button>
                </div>
              </div>
                  </div>
                </div>
              </div>
         

            <div class="card custom-card">
            <div class="card-header justify-content-between  d-block">
              <div >
                Pay Using Registered Bank Account
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
              <br>

              <div >
                Select Payment Method
              </div>
              <!-- <div>
                <ul class="nav nav-tabs justify-content-end nav-tabs-header mb-0 d-sm-flex d-block mt-sm-0 mt-2"
                  role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page" href="#active-orders"
                      aria-selected="true">Active Orders</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#completed-orders"
                      aria-selected="true">Completed</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#cancelled-orders"
                      aria-selected="true">Cancelled</a>
                  </li>
                </ul>
              </div> -->
            </div>
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
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKmwT4Lg-b_pzcg000VGriLCqu-90Ot7ibgjRQT2u1g&s" alt="">
                                </span>
                              </div>
                              <div class="align-items-center">
                                <p class="mb-0">Phone Pe</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a aria-label="anchor" href="javascript:void(0);">
                              <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="lh-1">
                                <span class="avatar avatar-md  avatar-rounded me-2">
                                  <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" alt="">
                                </span>
                              </div>
                              <div class="align-items-center">
                                <p class="mb-0">Google Pay</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a aria-label="anchor" href="javascript:void(0);">
                              <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="lh-1">
                                <span class="avatar avatar-md  avatar-rounded me-2">
                                  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" alt="">
                                </span>
                              </div>
                              <div class="align-items-center">
                                <p class="mb-0">UPI</p>
                                <span class="fs-12 text-muted">Paytm, BHIM, Bank UPI Apps...</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a aria-label="anchor" href="javascript:void(0);">
                              <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="lh-1">
                                <span class="avatar avatar-md  avatar-rounded me-2">
                                  <img src="https://static.vecteezy.com/system/resources/previews/026/221/538/original/internet-icon-symbol-design-illustration-vector.jpg" alt="">
                                </span>
                              </div>
                              <div class="align-items-center">
                                <p class="mb-0">Net Banking</p>
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
