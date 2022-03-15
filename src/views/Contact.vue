<template>
  <form ref="form" id="contact-form" @submit.prevent=Submit>
    <div class="relative z-10">
      <h4>Name:</h4>
      <input  name="name" placeholder="Enter name here…" 
      class="form-control"  id="name-input"/>
      <br/>
      <h4>Phone:</h4>
      <input name="phone"  placeholder="Enter phone number" 
      class="form-control" id="phone-input"/>
      <br/>
      <h4>Email:</h4>
      <input name="email"  placeholder="Enter email here…" 
      class="form-control" id="email-input" />
      <br/>
      <h4>How can we help you?</h4>
      <textarea name="message" rows="3" placeholder="Enter your message…" 
      class="form-control" id="description-input"></textarea>
      <br/>
      <div>
        <h4>Preferred Contact method:</h4>
        <div class="flex">
          <div class="text-center w-2/4">
            <input name="contactChoice"  type="radio" id="contactChoiceEmail" class="form-control" value="email"/>
            <label for="contactChoice">Email</label><br>
          </div>
          <div class="text-center w-2/4">
            <input name="contactChoice"  type="radio" id="contactChoicePhone" class="form-control" value="phone"/>
            <label for="contactChoice">Phone</label><br>
          </div>
          <div class="text-center w-2/4">
            <input name="contactChoice"  type="radio" id="contactChoicePhone" class="form-control" value="text"/>
            <label for="contactChoice">Text</label><br>
          </div>
        </div>
      </div>
      <br/>
        <button type="reset"  id="resetbtn"
        class="btn btn-lg">Reset</button>
        <button type="submit"  value="Send"
        class="btn btn-lg">Submit</button>
    </div>
    <div>
        
      </div>
      <div class="z-20 -mt-80 h-20 mb-80 pt-4">
        <h4>I accept the terms</h4>
        <input name="terms"  type="checkbox" id="acceptTerms" class="form-control"/>
      </div>
      <div v-if="submitComplete" class="text-center w-full">
        <p>Thankyou for your message</p>
        <button v-on:click=ResetOnSubmit  type="button"
        class="btn btn-lg">Acknowledge</button>
      </div>
</form>

</template>


<script>
import emailjs from 'emailjs-com';

export default {
  name: "Home",
  data () {
      return {
        submitComplete: false,
      }
    },
  methods: {
    Reset(){
       this.name = ""
       this.phone = ""
       this.email = ""
       this.message = ""
       this.contactChoice = ""
       this.terms = ""
     },
     ResetOnSubmit(){
       this.name = "",
       this.phone = "",
       this.email = "",
       this.message = "",
       this.contactChoice = ""
       this.terms = ""
       this.submitComplete = false
     },
    Submit() {
      emailjs.sendForm('service_67bbruu', 'template_6rji6sj', this.$refs.form, 'user_gdwqVVzFx51tCkVirTCP6')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.submitComplete = true;
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
     
  }
  };

</script>

<style>
#contact-form {
  margin: 2rem auto;
  width: 90%;
  max-width: 500px;
  padding: 1rem 0%;
}
input {
  height: 35px;
}
.form-control {
  width: 100%;
  text-align: center;
  border-radius: 15px;
  color: #000;
  padding: 0.5rem;
  margin: 0.5rem;
}
.btn {
  background: #3A1FA5;
  color: #FFFFFF;
  padding: 0.5rem;
  margin: 1rem;
}
#resetbtn {
  background: #ff0000;
}
h4 {
  padding: 0.2rem;
}
</style>



