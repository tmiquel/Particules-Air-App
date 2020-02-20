<template>
  <div id="contact-page">
    <div>
      <h1 id="title" class="text-left mb-4">Contactez-nous</h1>
      <b-form @submit="onSubmit">
        <b-form-row class="mb-4">
          <b-col>
            <b-input v-model="form.LastName" required placeholder="Nom" autocomplete="family-name"></b-input>
          </b-col>
          <b-col>
            <b-input
              v-model="form.FirstName"
              required
              placeholder="Prénom"
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
          class="mb-4"
        ></b-form-input>
        <b-form-textarea v-model="form.text" placeholder="Votre message" rows="3" max-rows="6"></b-form-textarea>

        <b-button type="submit" pill class="px-5 py-2 mt-4 font-weight-bold border-0">Envoyer</b-button>
      </b-form>
      <p class="mt-4">
        <i>Ou écrivez directement à :</i>
        <b>Contact@contact.fr</b>
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

button {
  background: linear-gradient(89.86deg, #006fbf -79.71%, #71c0e8 167.69%);
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
