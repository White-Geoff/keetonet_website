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
  <footer>
    <p>This is a footer</p>
  </footer>
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


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #CCCCFF;
   color: #FFFFFF;
}

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
  margin-left: 30%;
  margin-right: auto;
  display: block;
}

#taglineImg {
  width: 80%;
  max-width: 60rem;
  height: auto;
  margin-top: -2.5%;
  margin-left: 10%;
  margin-right: auto;
}

.flex {
  display: flex;
}

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

.wideNavElement {
  
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

#goldBar {
  width: 100%;
  height: .5rem;
  background: #FEF97F;
  display: block;
}

#blackBar {
  width: 100%;
  height: .4rem;
  background: #000;
}
</style>
