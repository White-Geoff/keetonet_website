<template>
  <div class="aboutUs text-center  w-full px-8 pt-8">
    <div class="max-w-screen-sm mx-auto">
      <p>KEETONET Inc. is a software development company based in Huron County, Ontario. 
        We offer a
        <router-link class="underline"  :to="{ name: 'Rates & Bundles'}">full range of digital services</router-link>
         and solutions as a one stop shop.</p>
      <br>
      <p>We are happy to offer a free consultation. 
        Our first meeting is to discover your needs, your timeline, and your budget. 
        We will help you connect with local government digital grants.</p>
      </div>
      <br>
      <h1 class="underline"><router-link class="underline"  :to="{ name: 'Contact'}">Contact us now!</router-link></h1>
  </div>
  <div class="highlightContainer"><Highlight /></div>
</template>


<script>
import Highlight from '../components/Highlight.vue';

export default {
  name: "Home",
  components: { Highlight, },
  };
</script>

<style>
.highlightContainer {
  padding: 5%;
}
</style>



