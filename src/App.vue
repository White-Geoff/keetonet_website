<template>
  <div id="nav">
    <ul>
      <nav class="toggle" v-if="active" v-on:click="OpenNav">&#10006;</nav>
      <nav class="toggle" v-if="!active" v-on:click="OpenNav">&#9776;</nav>
      <div v-if="active">
        <li class="navlink"><router-link to="/">Home</router-link></li>
        <li class="navlink"><router-link to="/about">About</router-link></li>
        <li class="navlink"><router-link to="/portfolio">Portfolio</router-link></li>
        <li class="navlink"><router-link to="/rates_bundles">Rates & Bundles</router-link></li>
      </div>
        <li class="navlink"><router-link to="/">Home</router-link></li>
        <li class="navlink"><router-link to="/about">About</router-link></li>
        <li class="navlink"><router-link to="/portfolio">Portfolio</router-link></li>
        <li class="navlink"><router-link to="/rates_bundles">Rates & Bundles</router-link></li>
    </ul>
  </div>
  <router-view />
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
}

.toggle {
  width: 30px;
  height: 15px;
  padding-right: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav li {
  color: purple;
  width: 33%;
}

#nav ul {
  max-width: 45%;
  min-width: 35%;
  justify-content: space-around;
  display: inline-flex;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
