<template>
  <div>
    <div class="w-4/5 h-full m-auto p-5s">
      <div class=" w-6/12">
         <div class="w-4/5 h-full m-auto p-5s">
              <h1>Create  Coloc</h1>
              <form @submit.prevent="handleSubmit" class="space-y-4">
              <input v-model="formData.email" type="email"  placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-fullborder outline-none" required>
              <input v-model="formData.password" type="password"  placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required>
              </form>
              <hr><p>Or Connect With</p><hr>
              <ul>
                  <li><i class="fab fa-facebook-f fa-2x"></i></li>
                  <li><i class="fab fa-twitter fa-2x"></i></li>
                  <li><i class="fab fa-github fa-2x"></i></li>
                  <li><i class="fab fa-linkedin-in fa-2x"></i></li>
              </ul>
              <div class="clearfix"></div>
              <span class="copyright">&copy;2019</span>  
         </div>
      </div>
      <div class="apply float-right bg-[linear-gradient(135deg,#23212f_5%,#9526a9_95%)] h-full text-white text-center px-0 py-[100px] rounded-[0_10px_10px_0]">
          <div class="w-4/5 h-full m-auto p-5s">
              <i class="fas fa-user-plus fa-5x"></i>
              <h2 class="text-[50px] tracking-[3px] mx-0 my-[30px]">Hello,friend!</h2>
              <p class="text-lg mb-[30px]">Enter your personal details and start journey with us</p>
              <button class=" bg-transparent border text-white text-xl uppercase transition-[0.2s] duration-[all] ease-[ease-in-out] px-5 py-2.5 rounded-[20px] border-solid border-white hover:text-[#9526a9] hover:bg-white hover:cursor-pointer">
                Register <i class="fas fa-arrow-circle-right"></i>
               </button>
          </div>
      </div>  
    </div>
  </div>
</template>

<script>

</script>