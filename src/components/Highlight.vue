<template>
  <div class="hidden highlightBanner text-center justify-center w-full">
    <div class="max-w-screen-lg">
      <h1 class="text-blue-600 text-3xl p-4">Check out our featured Items</h1>
      <h3 class="text-blue-600 text-3xl p-4">Order by Nov 24, 2021. Estimated Delivery by Dec 4, 2021</h3>
      <div class="highlightImgContainer"> 
        <figure>     
          <div class="highlightImg">
            <img src="../assets/Highlight/1Grey_Card.png" alt="Christmas Card Design">
            <figcaption>CardDe21A01</figcaption>
          </div>
        </figure>
        <figure>
          <div class="highlightImg">
            <img src="../assets/Highlight/1grinch.png" alt="Christmas Card Design">
            <figcaption>CardDe21A02</figcaption> 
          </div>
        </figure>
        <figure>
          <div class="highlightImg">
            <img src="../assets/Highlight/2snowman.png" alt="Christmas Card Design">
            <figcaption>CardDe21A03</figcaption>  
          </div>
        </figure>
      </div>
      <div class="highlightImgContainer">
        <figure>
          <div class="highlightImg">
            <img src="../assets/Highlight/3_balls.png" alt="Christmas Card Design">
            <figcaption>CardDe21A04</figcaption>  
          </div>
        </figure>
        <figure>
          <div class="highlightImg">
            <img src="../assets/Highlight/Purple.png" alt="Christmas Card Design">
            <figcaption>CardDe21A05</figcaption>  
          </div>
        </figure>
        <figure>
          <div class="highlightImg">
            <img src="../assets/Highlight/stripes.png" alt="Christmas Card Design">
            <figcaption>CardDe21A06</figcaption>  
          </div>
        </figure>
      </div>
      <h1 class="text-blue-600 text-3xl p-4"><router-link :to="{ name: 'Home'}">Go to highlighted items</router-link></h1>
    </div>
  </div>
  <div class="highlightContainer">
    <Headline 
      :headlineMsg = headlineMsg>
      </Headline>
    <div class="flex w-11/12 flex-wrap">
      <figure>
          <img src="../assets/Highlight/1Grey_Card.png" alt="Christmas Card Design">
          <figcaption>CardDe21A01</figcaption>
      </figure>
      <figure>
          <img src="../assets/Highlight/1grinch.png" alt="Christmas Card Design">
          <figcaption>CardDe21A02</figcaption> 
      </figure>
      <figure>
          <img src="../assets/Highlight/2snowman.png" alt="Christmas Card Design">
          <figcaption>CardDe21A03</figcaption> 
      </figure>
      <figure>
          <img src="../assets/Highlight/3_balls.png" alt="Christmas Card Design">
          <figcaption>CardDe21A04</figcaption>  
      </figure>
      <figure>
          <img src="../assets/Highlight/Purple.png" alt="Christmas Card Design">
          <figcaption>CardDe21A05</figcaption>  
      </figure>
      <figure>
          <img src="../assets/Highlight/stripes.png" alt="Christmas Card Design">
          <figcaption>CardDe21A06</figcaption> 
      </figure>
      <figure>     
          <img src="../assets/Highlight/1Grey_Card.png" alt="Christmas Card Design">
          <figcaption>CardDe21A01</figcaption>
      </figure>
      <figure>
          <img src="../assets/Highlight/1grinch.png" alt="Christmas Card Design">
          <figcaption>CardDe21A02</figcaption> 
      </figure>
      <figure>
          <img src="../assets/Highlight/2snowman.png" alt="Christmas Card Design">
          <figcaption>CardDe21A03</figcaption> 
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
.highlightContainer {

}

.highlightBanner {
   color: #000;
  background: rgb(22,91,51);
  background: linear-gradient(to right,
rgba(255,47,42,0.5), 
rgba(47,219,106,0.5),
rgba(254,229,81,0.5),
rgba(139,106,251,0.5),
rgba(94,222,255,0.5)
 );
}
.highlightImgContainer {
  width: 90%;
  max-width: 1000px;
  display: flex;
  margin-left: 5%;
  margin-right: auto;
}
.highlightImg {
  height: auto;
  width: 95%;
  padding: 2.5%;
  margin-left: 2.5%;
  margin-right: auto;
}

figcaption {
  padding: 0.25rem;
}
</style>
