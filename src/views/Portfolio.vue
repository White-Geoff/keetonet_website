<template>
  <div class="bodyContainer">
    <Headline  :headlineMsg = geoffMsg></Headline>
      <div class="portfolioPic flex">
        <img src="../assets/IMG_G.jpg" alt="Profile pic">
        <p>He served 6 years in the Canadian Forces specializing in Information Systems.
           He has graduated from Trios College in the Enterprise Web &
            Mobile Development program and is currently enrolled in
             UOTTAWA as a Secure Operations Center Administration.</p>
    </div>
    <Headline  :headlineMsg = korinneMsg></Headline>
      <div class="portfolioPic flex">
        <img src="../assets/IMG_K.jpg" alt="Profile pic">
        <p>She is able to cover a wide variety of design including 2D layouts,
           3D modeling and texturing, and UI/UX design. She is familiar with the
            industry standard design software and trends. She is also pursuing
             further education related to the business.</p>
    </div>
    <div>
      <Headline  :headlineMsg = projectsMsg></Headline>
      <div class="w-full flex">
        <div class="projectOuterContainer">
          <a href="https://www.keetonet.ca">KEETONET.ca</a>
          <figure class="projectContainer">
            <img src="../assets/keetonetMobile.png" alt="Keetonet mobile site">
            <figcaption>Mobile friendly Site</figcaption>
          </figure>
        </div>
        <div class="projectOuterContainer">
          <a href="https://www.keetonet.ca">KEETONET.ca</a>
          <figure class="projectContainer">
            <img src="../assets/keetonetWeb.png" alt="Keetonet web site">
            <figcaption>Built using modern frameworks.
              Hosted on scalable backend.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '../components/Headline.vue';

export default {
  name: "Highlight",
  components: { Headline },
  data () {
    return {
      geoffMsg: "Geoff White",
      korinneMsg: "Korinne Angela White",
      projectsMsg: "Our recent Projects"
    }
  }
};
</script>

<style>
.portfolioPic {
  max-width: 1000px;
  margin: auto;
}
.portfolioPic img {
width: 30%;
padding: 2.5% 0%;
margin: auto;
}
.portfolioPic p {
width: 60%;
max-width: 500px;
padding: 2.5%;
margin: auto;
}
.projectOuterContainer {
width: 45%;
padding: 2.5%;
margin: auto;
text-align: center;
}
.projectContainer {
  background: rgba(44, 130, 130, 0.25);
  width: 100%;
  margin: auto;
  padding: 1rem;
}
.projectContainer img {
  width: 95%;
  margin: auto;
  padding: 0.25rem 0%;
}
</style>
