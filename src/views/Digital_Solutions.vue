<template>
  <div class="bodyContainer text-center">
    <h1 class="text-3xl py-3">What we offer:</h1>
    <div class="digitalContainer webContainer">
      <h1 class=" text-white">Web Development:</h1>
      <br>
      <div class="projectOuterContainer">
          <a href="https://www.keetonet.ca">
            <div>
              <h3 class="underline"> KEETONET.ca</h3>
            </div></a>
            <p>A mobile friendly site built using modern frameworks and hosted on a scalable backend</p>
        </div>
        <div class="graphicsContainer">
          <h1 id="textXS">Wireframes:</h1>
          <br>
          <p>Coming soon</p>
          <br>
          <!-- switch to flex to show -->
          <div class="hidden carousel flex-nowrap overflow-scroll">
            <div class="graphicsInnerContainer">
              <figure>
                <img src="https://via.placeholder.com/150" alt="Placeholder image">
                <figcaption>Description here</figcaption>
            </figure>
            </div>
            <div class="graphicsInnerContainer">
              <figure>
                <img src="https://via.placeholder.com/150" alt="Placeholder image">
                <figcaption>Description here</figcaption>
            </figure>
            </div>
            <div class="graphicsInnerContainer">
              <figure>
                <img src="https://via.placeholder.com/150" alt="Placeholder image">
                <figcaption>Description here</figcaption>
            </figure>
            </div>
            <div class="graphicsInnerContainer">
              <figure>
                <img src="https://via.placeholder.com/150" alt="Placeholder image">
                <figcaption>Description here</figcaption>
            </figure>
            </div>
            <div class="graphicsInnerContainer">
              <figure>
                <img src="https://via.placeholder.com/150" alt="Placeholder image">
                <figcaption>Description here</figcaption>
            </figure>
            </div>
          </div>
    </div>
    </div>
    <div class="digitalContainer appsContainer">
      <h1 class=" text-white">App Development:</h1>
    </div>
    <div class="digitalContainer softwarecontainer">
      <h1 class=" text-white">Custom Software Development:</h1>
    </div>
    <div class="digitalContainer hostedContainer">
      <h1 class=" text-white">Custom Hosted Solutions:</h1>
    </div>
    <div class="digitalContainer adsContainer">
      <h1 class=" text-white">Advertisment opportunities:</h1>
      <p class="text-sm">Looking to advertise?</p>
      <p class="text-sm">Looking to make money hosting ads?</p>
    </div>
  </div>
</template>

 <script>
 </script>

<style>
.digitalContainer  {
  min-height: 100px;
  padding: 2rem;
  margin: 2rem auto;
  background: rgba(44, 130, 130, 0.25);
  border-radius: 20px;
  max-width: 1000px;
}
#textXS {
  font-size: 1rem;
  text-align: center;
}
</style>
