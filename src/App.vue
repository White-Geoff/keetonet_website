<template>
  <div class="flex">
    <div></div>
    <div id="logo">
    <img id="logoImg" src="./assets/Gold_Black_1.png" alt="Logo"/>
    <img id="taglineImg" src="./assets/Gold_Shine_Text.png"
     alt="The tools of tomorrow, in your hands: Today.">
    </div>
    <div></div>
  </div>
  <div>
    <div>
      <nav>
        <div id="internalNav">
          <div id="navToggle" class="wideNavElement navElement navImageContainer">
          <img class="navImage" src="./assets/Menu_Toggle.svg" alt="Nav Toggle"></div>
          <div class="wideNavElement navElement navLinkContainer ">
            <router-link to="/">Home</router-link></div>
          <div class="wideNavElement navElement navLinkContainer ">
            <router-link to="/portfolio">Our Portfolio</router-link></div>
          <div class="wideNavElement navElement navLinkContainer ">
            <router-link to="/rates_bundles">Rates & Bundles</router-link>
          </div>
          <div id="search" class="wideNavElement navElement navImageContainer">
            <img class="navImage" src="./assets/Search.svg" alt="Nav Toggle">
            </div>
        </div>
      </nav>
      <div class="goldBar h-2"></div>
      <div class="blackBar h-2"></div>
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
        <li class="text-3xl footerli">You may reach us at:</li>
        <li class="footerli">general@keetonet.ca</li>
        <li class="footerli">
          <router-link to="/">Terms of Service</router-link></li>
        <li class="footerli">
          <router-link to="/">Privacy policy</router-link></li>
      </ul>
      <img id="copyright" class="footerli" src="./assets/c_keetonet_2021.png"
       alt="Copyright KEETONET 2021">
    </footer>
    <div class="goldBar h-4"></div>
    <div class="blackBar h-4"></div>
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
  margin-top: 25%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

/* Nav */
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3A1FA5;
  color: #FFFFFF;
  width: 100%;
  height: auto;
}

#internalNav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 50%;
  max-width: 500px;
  height: auto;
  padding: 0% 1%;
}

.wideNavElement {
  line-height: 1.2rem;
  display: flex;
  flex-grow: 1;
  font-family: Abel;  
}

.navLinkContainer {
  max-width: 7rem;
  text-overflow: wrap;
}

.navImageContainer {
  min-height: 2.75rem;
  max-width: 7rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

.navImage {
  min-width: 3rem;
}

#navToggle {
  padding-left: 5%;
}

#search {
  padding-right: 5%;
}

/* Decorative Nav bars */
.goldBar {
  width: 100%;
  background: #FEF97F;
  display: block;
}

.blackBar {
  width: 100%;
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

#copyright {
  width: 25%;
  max-width: 20rem;
  min-width: 10rem;
  height: auto;
  padding-bottom: .5rem;
}

/* Responsive media */
@media screen and (max-width: 425px) {
  #taglineImg {
  margin-top: -2.5%;
}
 .wideNavElement {
  padding: 0% .5rem;
}
}

@media screen and (min-width: 425px) {
  #taglineImg {
  margin-top: -2.75%;
}
.wideNavElement { 
  padding: 0% .75rem;
}
}

@media screen and (min-width: 600px) {
  #taglineImg {
  margin-top: -3.5%;
}
.wideNavElement {
  padding: 0% 1rem;
  font-size: 1.5rem;
}
}

@media screen and (min-width: 750px) {
.wideNavElement{
  padding: 0% 1.25rem;
  font-size: 1.5rem;
}
}


@media screen and (min-width: 1000px) {
  #taglineImg {
  margin-top: -3%;
}
.wideNavElement{
  padding: 0% 1.5rem;
  font-size: 1.5rem;
}
#internalNav {
  min-width: 40%;
  max-width: 750px;
}
}

@media screen and (min-width: 1250px) {
  #taglineImg {
  margin-top: -2.5%;
}
.wideNavElement{
  padding: 0% 1.75rem;
  font-size: 1.5rem;
}
}

@media screen and (min-width: 1500px) {
  #taglineImg {
  margin-top: -2.25%;
}
.wideNavElement{
  padding: 0% 2rem;
  font-size: 1.5rem;
}
#internalNav {
  min-width: 30%;
  max-width: 1000px;
}
}

@media screen and (min-width: 1750px) {
  #taglineImg {
  margin-top: -2%;
}
}

@media screen and (min-width: 2000px) {
  #taglineImg {
  margin-top: -1.5%;
}
}

@media screen and (min-width: 2500px) {
  #taglineImg {
  margin-top: -1%;
}
}

@media screen and (min-width: 4250px) {
  #taglineImg {
  margin-top: -0.5%;
}
}
</style>
