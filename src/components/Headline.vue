<template>
  <div class="headlineContainer">
    <img id="headerImg" src="../assets/Handles.png" alt="Headline background image">
    <h1 id="headerText">{{ headlineMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: {
    headlineMsg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headlineContainer {
  margin: 1rem auto 1rem 2.5%;
  width: 95%;
  text-align: left;  
  position: relative;
}
#headerImg {
  width: 100%;
  height: 10%;
  min-height: 20px;
  max-height: 50px;
  padding: 2.5px 0%;
  z-index: 5;
  position: absolute;
  top: 35%;
  left: 0px;
  margin-top: 0.4%;
}
#headerText {
  color: #FFF;
  z-index: 5;
  position: relative;
  top: 0px;
  margin-left: 7%;
  font-size: 1rem;
}
/* Responsive */
@media screen and (min-width: 750px) {
  #headerText {
    font-size: 1.25rem;
  }
}
@media screen and (min-width: 1000px) {
  #headerText {
    font-size: 1.5rem;
  }
}
</style>
