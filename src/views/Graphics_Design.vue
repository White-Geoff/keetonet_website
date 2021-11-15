<template>
<div class="bodyContainer">
  <div class="text-center  w-full">
    <div class="max-w-m m-auto textContainer w-5/6">
      <p>
        Below are samples of art, layout, models and wireframes we have done
        as commisioned projects and to show off on our site.
      </p>
      <br>
      <p>You can click here to view our <span class="underline font-bold">
        Rates & Bundles.</span> </p>
        <br>
    <img class="w-full" src="../assets/Lines.png" alt="Lines">
    </div>
  </div>
  <div class="m-auto w-full space-around">
    <div class="graphicsContainer">
      <h1>Illustrations</h1>
      <div class="carousel flex flex-nowrap overflow-scroll">
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
          </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
          </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
          </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
          </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
          </figure>
        </div>
        <div class="h-20"></div>
      </div>
      <div class="scrollbar">

      </div>
    </div>
    <div class="graphicsContainer">
      <h1>Cards</h1>
      <br>
      <div class="carousel flex flex-nowrap overflow-scroll">
          <div class="graphicsInnerContainer">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Placeholder image">
              <figcaption>Text here?</figcaption>
          </figure>
          </div>
          <div class="graphicsInnerContainer">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Placeholder image">
              <figcaption>Text here?</figcaption>
          </figure>
          </div>
          <div class="graphicsInnerContainer">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Placeholder image">
              <figcaption>Text here?</figcaption>
          </figure>
          </div>
          <div class="graphicsInnerContainer">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Placeholder image">
              <figcaption>Text here?</figcaption>
          </figure>
          </div>
          <div class="graphicsInnerContainer">
            <figure>
              <img src="https://via.placeholder.com/150" alt="Placeholder image">
              <figcaption>Text here?</figcaption>
          </figure>
          </div>
      </div>
    </div>
    <div class="graphicsContainer">
      <h1>Wireframes</h1>
      <br>
      <div class="carousel flex flex-nowrap overflow-scroll">
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
        </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
        </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
        </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
        </figure>
        </div>
        <div class="graphicsInnerContainer">
          <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder image">
            <figcaption>Text here?</figcaption>
        </figure>
        </div>
      </div>
      <div class="scrollbar">

      </div>
    </div>
  </div>
</div>
</template>

<script>
 </script>

 <style>
 h1 {
   text-align: left;
   color: #FFF;
   font-size: 2rem;
 }
 .graphicsContainer {
  background: rgba(44, 130, 130, 0.25);
  width: 95%;
  margin: 0.1rem auto 0.1rem 2.5%;
  max-width: 1000px;
  width: 90%;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 20px;
 }
 .carousel {
   height: 100%;
   overflow-y: hidden;
 }
 .graphicsInnerContainer {
   background: #2C8282;
   padding: 0.5rem 0.5rem;
   margin: 0.5rem 0.5rem;
   height: 200px;
 }
 .graphicsInnerContainer figcaption {
   padding: 0.75rem 0.5rem;
 }
 .graphicsInnerContainer img {
   min-width: 150px;
   height: 150px;
 }
 
 @media screen and (min-width: 1000px) {
   .graphicsInnerContainer img {
   min-width: 300px;
   height: 300px;
 }
 .graphicsInnerContainer {
   height: 400px;
 }
 }
 </style>
