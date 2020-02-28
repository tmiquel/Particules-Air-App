<template>
  <div id="contact-page" class="mx-2">
    <div>
      <app-heading>Contactez-nous</app-heading>
      <b-form @submit="onSubmit">
        <b-form-row class="mb-4">
          <b-col>
            <b-input
              v-model="form.LastName"
              required
              placeholder="Nom"
              class="rounded-0"
              autocomplete="family-name"
            ></b-input>
          </b-col>
          <b-col>
            <b-input
              v-model="form.FirstName"
              required
              placeholder="Prénom"
              class="rounded-0"
              autocomplete="given-name"
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
        ></b-form-input>
        <b-form-textarea
          v-model="form.text"
          placeholder="Votre message"
          class="rounded-0"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <AppButton type="submit" class="mt-4" />
      </b-form>
      <p class="mt-4">
        <i>Ou écrivez directement à :</i>
        <b>contact@particules.info</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        FirstName: '',
        LastName: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
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
