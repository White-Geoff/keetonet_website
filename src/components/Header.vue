<template>
  <div class="Header flex">
    <div></div>
    <div id="logo">
    <img id="logoImg" src="../assets/Gold_Black_1.png" alt="Logo">
    <img id="taglineImg" src="../assets/Gold_Shine_Text.png" alt="The tools of tomorrow, in your hands: Today.">
    </div>
    <div></div>
  </div>
  <div>
    <div>
      <nav>
        <div id="navToggle" class="wideNavElement navElement navImageContainer">
        <img class="navImage" src="../assets/Menu_Toggle.svg" alt="Nav Toggle"></div>
        <div class="wideNavElement navElement navLinkContainer">
          <router-link to="/">Home</router-link></div>
        <div class="wideNavElement navElement navLinkContainer">
          <router-link to="/portfolio">Our Portfolio</router-link></div>
        <div class="wideNavElement navElement navLinkContainer">
          <router-link to="/rates_bundles">Rates & Bundles</router-link>
        </div>
        <div id="search" class="wideNavElement navElement navImageContainer">
          <img class="navImage" src="../assets/Search.svg" alt="Nav Toggle">
          </div>
      </nav>
      <div id="goldBar"></div>
      <div id="blackBar"></div>
      </div>
    </div>    
  <nav>
    <div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {
     Header,
  },
};
</script>