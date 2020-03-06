<template>
  <div id="contact-page" class="mx-2">
    <div>
      <app-heading>Contactez-nous</app-heading>
      <b-form
        @submit.prevent="handleSubmit"
        name="customcontact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="customcontact" />
        <b-form-row class="mb-4">
          <b-col>
            <b-input
              v-model="form.Lastname"
              type="text"
              required
              placeholder="Nom"
              class="rounded-0"
              autocomplete="family-name"
              name="Lastname"
            ></b-input>
          </b-col>
          <b-col>
            <b-input
              v-model="form.Firstname"
              type="text"
              required
              placeholder="Prénom"
              class="rounded-0"
              autocomplete="given-name"
              name="Firstname"
            ></b-input>
          </b-col>
        </b-form-row>
        <b-form-input
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
          autocomplete="email"
          class="rounded-0 mb-4"
          name="email"
        ></b-form-input>
        <b-form-textarea
          v-model="form.text"
          placeholder="Votre message"
          class="rounded-0"
          rows="3"
          max-rows="6"
          name="message"
        ></b-form-textarea>
        <button
          type="submit"
          class="btn rounded-pill font-weight-bold border-0 mt-2 mb-4 text-white mt-4"
          tag="button"
          value="send message"
        >Envoyer</button>
      </b-form>
      <p class="mt-4">
        <i>Ou écrivez directement à :</i>
        <b>contact@particules.info</b>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SubmissionSuccess from '~/components/submission/SubmissionSuccess.vue'
export default {
  data() {
    return {
      form: {
        email: '',
        Firstname: '',
        Lastname: '',
        text: ''
      },
      show: true
    }
  },
  methods: {
    handleSubmit() {
      post('/')
      then(() => {
        this.$router.push('thanks')
      })
    }
  }
}
</script>


<style scoped>
#contact-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
button {
  background: linear-gradient(
    89.86deg,
    var(--left-navbar-gradient-color) -79.71%,
    var(--right-navbar-gradient-color) 167.69%
  );
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
input,
textarea {
  background: #f0f0f0;
}
#title {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 26px;
  color: #454545;
}
</style>
