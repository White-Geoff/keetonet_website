<template>
  <div class="bodyContainer blueBackground50 rounded-3xl text-center">
      <div class="p-2 my-2 flex">
        <div class="w-6/12 m-auto">
          <h1 class="font-bold text-2xl">
            <router-link class="underline"  :to="{ name: 'Digital Solutions'}">
           Digital Needs</router-link>
          </h1>
          <ul>
            <li>IT Consulting</li>
            <li>Custom Hosted Solutions</li>
            <li>Website Development</li>
            <li>Application Development</li>
            <li>Software Development</li>
            <li>Cyber Security Consulting</li>
            <li>And more...</li>
          </ul>
        </div>
        <div class="w-6/12">
          <h1 class="font-bold text-2xl">
            <router-link class="underline"  :to="{ name: 'Graphics & Design'}">
           Design Needs</router-link>
            </h1>
          <ul>
            <li>Brand Design</li>
            <li>Graphic Design</li>
            <li>Illustration</li>
            <li>Logo Design</li>
            <li>Web Design</li>
            <li>3D Design</li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
      <div class="offeringsContainer">
      <div class="bundles">
        <div class="consultations  text-white">
          <h1 class="text-4xl">Free Consultations</h1>
          <br>
          <h1>Custom Design & Development starting at $35 per hour</h1>
        </div>
        <div class="w-full flex flex-wrap">
          <div class="bundleContainer">
            <h1 class=" text-white">Restaurant Starter Bundle</h1>
            <h6 class="font-bold">Bundle starts under $1,000</h6>
            <p class="p-2">Includes:</p>
            <ul>
              <li>Consultation</li>
              <li>.ca domain</li>
              <li>Specialized website with easy to update format</li>
              <li>Email</li>
              <li>Google Business Profile</li>
              <li>Social media setup</li>
              <li>And more...</li>
            </ul>
            <p>Starts at 10 hours of Design & Development</p>
          </div>
          <div class="bundleContainer">
            <h1 class=" text-white">More bundles coming soon!</h1>
          </div>
        </div>
      </div>
      <div class="w-11/12 m-auto">
        <h1 class="text-4xl">Bigger Project? Need something else?</h1>
        <h1 class="text-8xl">Talk to us.</h1>
        <p>You can contact us through 
            <router-link class="underline"  :to="{ name: 'Contact'}">this form</router-link>, or send us and email at:</p>
        <br>
        <p>general@keetonet.ca</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>
