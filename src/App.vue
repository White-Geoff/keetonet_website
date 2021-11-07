<template>
  <div class="flex">
    <div></div>
    <div id="logo">
    <img id="logoImg" src="./assets/Gold_Black_1.png" alt="Logo">
    <img id="taglineImg" src="./assets/Gold_Shine_Text.png" alt="The tools of tomorrow, in your hands: Today.">
    </div>
    <div></div>
  </div>
  <div>
    <div>
      <nav>
        <div id="navToggle" class="wideNavElement navElement navImageContainer">
        <img class="navImage" src="./assets/Menu_Toggle.svg" alt="Nav Toggle"></div>
        <div class="wideNavElement navElement navLinkContainer">
          <router-link to="/">Home</router-link></div>
        <div class="wideNavElement navElement navLinkContainer">
          <router-link to="/portfolio">Our Portfolio</router-link></div>
        <div class="wideNavElement navElement navLinkContainer">
          <router-link to="/rates_bundles">Rates & Bundles</router-link>
        </div>
        <div id="search" class="wideNavElement navElement navImageContainer">
          <img class="navImage" src="./assets/Search.svg" alt="Nav Toggle">
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

  <!-- <div id="nav">
      <nav class="toggle" v-if="active" v-on:click="OpenNav">&#10006;</nav>
      <nav id="toggleImage" class="toggle" v-if="!active" v-on:click="OpenNav"><img src="./assets/Menu_Toggle.svg" alt=""></nav>
      <ul v-if="active">
        <li class="navlink">
          <router-link to="/">Home</router-link></li>
        <li class="navlink">
          <router-link to="/about">About</router-link></li>
        <li class="navlink">
          <router-link to="/portfolio">Our Portfolio</router-link></li>
        <li class="navlink">
          <router-link to="/rates_bundles">Rates & Bundles</router-link></li>
      </ul>
      <div id="wideNav">
        <div class="navlink">
          <router-link to="/">Home</router-link></div>
        <div class="navlink">
          <router-link to="/about">About</router-link></div>
        <div class="navlink">
          <router-link to="/portfolio">Portfolio</router-link></div>
        <div class="navlink">
          <router-link to="/rates_bundles">Rates & Bundles</router-link></div>
      </div>
  </div> -->
  <router-view></router-view>
  <div id="footerContainer">
    <footer>
      <ul>
        <li class="x2 footerli">You may reach us at:</li>
        <li class="footerli">general@keetonet.ca</li>
        <li class="footerli">
          <router-link to="/">Terms of Service</router-link></li>
        <li class="footerli">
          <router-link to="/">Privacy policy</router-link></li>
      </ul>
      <img id="copyright" class="footerli" src="./assets/c_keetonet_2021.png" alt="Copyright KEETONET 2021">
    </footer>
    <div id="goldBarFooter"></div>
    <div id="blackBarFooter"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    methods: {
      OpenNav () {
        this.active = !this.active
      }
    }
  }
</script>

 <style>
  /* Main */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #CCCCFF;
   color: #FFFFFF;
}

/* Logo */
#logo {
  text-align: center;
  width: 100%;
  display: block;
}

#logo img {
  display: block;
}

#logoImg {
  width: 40%;
  max-width: 30rem;
  height: auto;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

#taglineImg {
  width: 80%;
  max-width: 60rem;
  height: auto;
  margin-top: -2.5%;
  margin-left: auto;
  margin-right: auto;
}

.flex {
  display: flex;
}

/* Nav */
nav {
  background: #3A1FA5;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.navElement {
  line-height: 1.2rem;
  padding: .25rem;
}

.navLinkContainer {
  max-width: 20%;
  min-width: 18%;
  text-overflow: wrap;
}

.navImageContainer {
  height: 120%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-content: center;
}

#navToggle {
  padding-left: 5%;
}

#search {
  padding-right: 5%;
}

/* Decorative Nav bars */
#goldBar {
  width: 100%;
  height: .5rem;
  background: #FEF97F;
  display: block;
}

#blackBar {
  width: 100%;
  height: .5rem;
  background: #000;
}

/* Footer */
#footerContainer {
  background: #3A1FA5;
  color: #FFFFFF;
  margin: 0%;
}

.footerli {
  margin: .25rem auto;
  padding: auto;
}

.x2 {
  font-size: 2rem;
}

#copyright {
  width: 25%;
  max-width: 20rem;
  min-width: 10rem;
  height: auto;
  padding-bottom: .5rem;
}

#goldBarFooter {
  width: 100%;
  height: 1rem;
  background: #FEF97F;
  display: block;
  margin: 0%;
}

#blackBarFooter {
  width: 100%;
  height: 1rem;
  background: #000;
}
</style>
