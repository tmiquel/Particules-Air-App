<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
        <div>CONTACTEZ NOUS</div>
        <br><br>
        
        <b-form-input
          id="input-2"
          v-model="form.LastName"
          required
          placeholder="Nom"
        ></b-form-input>

        <b-form-input
          id="input-2"
          v-model="form.FirstName"
          required
          placeholder="Prénom"
        ></b-form-input>
      
      <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>

        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Votre message"
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
      
      <b-button type="submit" pill variant="info">Envoyer</b-button>
    </b-form>
    <br>
    <div>Ou écrivez directement à : Contact@cotact.fr</div>
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
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>
