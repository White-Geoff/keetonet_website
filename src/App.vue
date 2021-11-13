<template>
<!-- logo and tagline -->
  <div class="flex">
    <div></div>
    <div id="logo">
    <img id="logoImg" src="./assets/Gold_Black_1.png" alt="Logo"/>
    <img id="taglineImg" src="./assets/Gold_Shine_Text.png"
     alt="The tools of tomorrow, in your hands: Today.">
    </div>
    <div></div>
  </div>
  <!-- Navs -->
  <div>
    <div class="navBackground">
      <!-- Initial wide nav -->
      <nav v-if="!fullNavActive">
        <div id="internalNav">
          <div  v-on:click=ToggleNav id="navToggle" class="cursor-pointer wideNavElement navElement navImageContainer">
          <img class="navImage" src="./assets/Menu_Toggle.svg" alt="Nav Toggle"></div>
          <div class="wideNavElement navElement navLinkContainer ">
            <router-link :to="{ name: 'Home'}">Home</router-link></div>
          <div class="wideNavElement navElement navLinkContainer ">
            <router-link :to="{ name: 'Portfolio'}">Our Portfolio</router-link></div>
          <div class="wideNavElement navElement navLinkContainer ">
            <router-link :to="{ name: 'Rates & Bundles'}">Rates & Bundles</router-link>
          </div>
          <div   v-on:click=ToggleSearch id="search" class="cursor-pointer wideNavElement navElement navImageContainer">
            <img class="navImage" src="./assets/Search.svg" alt="Search Icon">
            </div>
        </div>
      </nav>   
      <!-- Full nav -->
      <nav v-if="fullNavActive">
        <div id="fullNav">
          <!-- Start full search bar -->
          <div class="flex justify-center">
            <div class="searchContainer rounded-full flex ">
              <div  v-on:click=ToggleNav class="closeButton text-2xl font-bold">X</div>
              <div class="interiorSearchContainer flex">
                <img class="searchIcon px-1" src="./assets/Search.svg" alt="Search Icon">
                <input type="search" name="searchBar" id="search" placeholder="Coming Soon" 
                class="searchBar rounded-lg">
              </div>
            </div>
          </div>
          <!-- End full search bar -->
          <div class="fullNavLinks flex">
            <ul class="py-0.5 pr-2">
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Home'}">Home</router-link></li>
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Portfolio'}">Portfolio</router-link></li>
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Rates & Bundles'}">Rates & Bundles</router-link></li>
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Hosted Solutions'}">Hosted Solutions</router-link></li>
            </ul>
            <ul class="py-0.5 pl-2">
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Graphics & Design'}">Graphics & Design</router-link></li>
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Advertising'}">Advertising</router-link></li>
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Applications'}">Applications</router-link></li>
              <li class="text-xl fullNavElement navElement navLinkContainer">
                <router-link :to="{ name: 'Custom Software'}">Custom Software</router-link></li>
            </ul>
          </div>
        </div>        
      </nav>
      <!-- End full nav -->
      <!-- Start full search bar -->
      <div v-if="searchActive && !fullNavActive" class="flex justify-center">
        <div class="searchContainer rounded-full flex ">
          <div  v-on:click=ToggleSearch class="closeButton text-2xl font-bold">X</div>
          <div class="interiorSearchContainer flex">
            <img class="searchIcon px-1" src="./assets/Search.svg" alt="Search Icon">
            <input type="search" name="searchBar" id="search" placeholder="Coming Soon" 
            class="searchBar rounded-lg">
          </div>
        </div>
      </div>
      <!-- End full search bar -->
      <!-- Coloured bars -->
      <div class="goldBar h-2"></div>
      <div class="blackBar h-2"></div>
    </div>
  </div> 

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
  <!-- footer -->
  <div id="footerContainer">
    <footer>
      <ul>
        <li class="text-3xl footerli">You may reach us at:</li>
        <li class="footerli">general@keetonet.ca</li>
        <li class="footerli">
          <router-link :to="{ name: 'Terms of Service'}">Terms of Service</router-link></li>
        <li class="footerli">
          <router-link :to="{ name: 'Privacy Policy'}">Privacy policy</router-link></li>
      </ul>
      <img id="copyright" class="footerli" src="./assets/c_keetonet.png"
       alt="Copyright KEETONET 2021-2022">
    </footer>
    <div class="goldBar h-4"></div>
    <div class="blackBar h-4"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchActive: false,
        fullNavActive: false
      }
    },
    methods: {
      ToggleSearch () {
        if (this.fullNavActive) {
          return
        }
        else {
          this.searchActive = !this.searchActive
        }
        
      },
      ToggleNav () {
        this.fullNavActive = !this.fullNavActive;
        this.searchActive = false;
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
   color: #000;
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
.navBackground {
  background: #3A1FA5;
  color: #FFFFFF;
}
nav {
   color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}

#internalNav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  max-width: 500px;
  height: auto;
  padding: 0% 1%;
}

.navElement {
  font-family: Abel; 
}

.wideNavElement {
  line-height: 1.2rem;
  display: flex;
  flex-grow: 1;
  font-family: Abel; 
  max-width: 10rem; 
  min-width: 10rem;
}

.fullNavLinks {
  min-width: 50%;
}

.fullNavLinks ul {
}

.fullNavLinks li {
  padding: 0.5rem 0.2rem;
  min-width: 10rem;
}

.fullNavElement {

}

.navLinkContainer {  
  text-overflow: wrap;
}

.navImageContainer {
  min-height: 2.75rem;
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
/* Full Search bar */
.closeButton {
  width: 15%;
  color: #3A1FA5;
  padding-top: 1.5%;
}
.searchContainer {
  background-color: #CCCCFF;
  width: 95%;
  max-width: 350px;
  padding: .25rem .75rem;
  margin: .5rem;
}
.interiorSearchContainer {
  padding: 5% auto auto 5%;
}
.searchIcon {
  min-width: 3rem;
}
.searchBar {
  padding-left: .25rem;
  margin-left: .5rem;
  background: #2C8282;  
  width: 90%;
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
  font-size: 0.75rem;
  min-width: 3.5rem;
}
}

@media screen and (min-width: 425px) {
  #taglineImg {
  margin-top: -2.75%;
}
.wideNavElement { 
  padding: 0% .75rem;
  font-size: 0.85rem;
  min-width: 4.5rem;
}
}

@media screen and (min-width: 600px) {
  #taglineImg {
  margin-top: -3.5%;
}
.wideNavElement {
  padding: 0% 1rem;
  font-size: 1rem;
  min-width: 6rem;
}
}

@media screen and (min-width: 750px) {
.wideNavElement{
  padding: 0% 1.25rem;
  font-size: 1.25rem;
  min-width: 7rem;
}
}


@media screen and (min-width: 1000px) {
  #taglineImg {
  margin-top: -3%;
}
.wideNavElement{
  padding: 0% 1.5rem;
  font-size: 1.5rem;
  min-width: 8rem;
}
#internalNav {
  width: 40%;
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
  min-width: 9rem;
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
  width: 30%;
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
