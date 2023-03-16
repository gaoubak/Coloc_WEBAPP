<template>
    <div class="min-h-screen bg-orange-400 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-orange-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-orange-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
          <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an account to enjoy all the services without any ads for free!</p>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-4">
                <input v-model="formData.email" type="email"  placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required>
                <input v-model="formData.password" type="password"  placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required>
                <div class="text-center mt-6">
                     <button type="submit" class="py-3 w-64 text-xl text-white bg-orange-400 rounded-2xl">Create Account</button> 
                     <p class="mt-4 text-sm">You don't Have An Account?
                     <NuxtLink to="/register" class="n-link-base">
                      login
                      </NuxtLink>
                    </p>
                </div>
          </form>
      </div>
      <div class="w-40 h-40 absolute bg-orange-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20 h-40 absolute bg-orange-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
    
</template>
          
<script>
//import { useFetch } from 'nuxt'

export default {
name: 'ContactForm',
data() {
  return {
    formData: {
        email: "",
        password: "",
    },
  };
},
methods: {
  handleSubmit: async function() {
    const formData = new FormData();

    for (let [key, value] of Object.entries(this.form)) {
      formData.append(key, value);
    }

    const { data, error } = await useFetch("{Formeezy-Endpoint}", {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })

    if (error) {
      // handle error
    } else {
      const { redirect } = data;
      // Redirect used for reCAPTCHA and/or thank you page
      window.location.href = redirect;
    }
  }
}
};
</script>