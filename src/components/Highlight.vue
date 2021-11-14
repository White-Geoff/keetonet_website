<template>
  <div class="highlightContainer w-full p-0">
    <Headline 
      :headlineMsg = headlineMsg>
      </Headline>
    <div class="highlightImgContainer text-center flex w-11/12 flex-wrap flex-row m-auto">
      <h1 class="w-full m-1">Order by Nov 24, 2021. Estimated delivery Dec 3-8, 2021</h1>
      <h3 class="w-full m-1">Free pickup, Delivery available.</h3>
      <h6 class="w-full m-1">Find in local stores</h6>
      <figure class="highlightFigure">
          <img src="../assets/Highlight/1Grey_Card.png" alt="Christmas Card Design">
          <figcaption>CardDe21A01</figcaption>
      </figure>
      <figure class="highlightFigure">
          <img src="../assets/Highlight/1grinch.png" alt="Christmas Card Design">
          <figcaption>CardDe21A02</figcaption> 
      </figure>
      <figure class="highlightFigure">
          <img src="../assets/Highlight/2snowman.png" alt="Christmas Card Design">
          <figcaption>CardDe21A03</figcaption> 
      </figure>
      <figure class="highlightFigure">
          <img src="../assets/Highlight/3_balls.png" alt="Christmas Card Design">
          <figcaption>CardDe21A04</figcaption>  
      </figure>
      <figure class="highlightFigure">
          <img src="../assets/Highlight/Purple.png" alt="Christmas Card Design">
          <figcaption>CardDe21A05</figcaption>  
      </figure>
      <figure class="highlightFigure">
          <img src="../assets/Highlight/stripes.png" alt="Christmas Card Design">
          <figcaption>CardDe21A06</figcaption> 
      </figure>
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
      headlineMsg: "Check out our featured items!"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.highlightImgContainer {
  background: rgba(44, 130, 130, 0.25);
  width: 100%;
  padding: 1rem;
  border-radius: 17px;
}
.highlightFigure {
  min-width: 150px;
  max-width: 33%;
  padding: 1%;
  margin: 0% auto;
}
.highlightFigure img {
  height: 80%;
  width: auto;
  margin: auto;
}
.highlightFigure figcaption {
  padding: 0.5rem;
}
</style>
