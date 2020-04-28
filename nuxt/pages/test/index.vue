<template>
  <div class="box">
    <div class="content">
      <h1>NOUS ÉCRIRE</h1>
      <img src="~/assets/images/icons/desktop/Line1.svg" class="line" />
    </div>

    <div class="content2 mt-4">
      <h2>
        Tu veux nous rejoindre, nous soumettre une idée, un projet ou
        <br />simplement nous passer le bonjour, c’est par ici !
      </h2>
      <img src="~/assets/images/icons/desktop/fleche-bas.svg" class="fleche mt-5" />
    </div>

    <div class="forms">
      <b-form
        @submit.prevent="handleSubmit"
        name="customcontact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="form"
      >
        <input type="hidden" name="form-name" value="customcontact" />
        <b-form-row class="mb-4">
          <b-col>
            <label>Nom(Requis)</label>
            <b-input
              v-model="form.Lastname"
              type="text"
              required
              placeholder
              class="rounded-0"
              autocomplete="family-name"
              name="Lastname"
            ></b-input>
          </b-col>
          <b-col>
            <label>Prénom(Requis)</label>
            <b-input
              v-model="form.Firstname"
              type="text"
              required
              placeholder
              class="rounded-0"
              autocomplete="given-name"
              name="Firstname"
            ></b-input>
          </b-col>
        </b-form-row>
        <label>Email(Requis)</label>
        <b-form-input
          v-model="form.email"
          type="email"
          required
          placeholder
          autocomplete="email"
          class="rounded-0 mb-4"
          name="email"
        ></b-form-input>
        <label>Votre message</label>
        <b-form-textarea
          v-model="form.message"
          placeholder
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
    </div>

    <div class="mb-5">
      <p id="mail">
        Ou écrivez directement à
        <mark class="blue">
          <u>contact@particules.info</u>
        </mark>
      </p>
    </div>
  </div>
</template>





<script>
import axios from 'axios'
import DesktopFooter from '~/components/SingleInstanceCmp/DesktopFooter.vue'
export default {
  components: {
    DesktopFooter
  },
  data() {
    return {
      form: {
        email: '',
        Firstname: '',
        Lastname: '',
        message: ''
      },
      show: true
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'customcontact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push('thanks')
        })
    }
  }
}
</script>



<style scoped>
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.content2 {
  text-align: center;
}

.content,
h1 {
  text-align: center;
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 103.7%;
  color: #454545;
}
h2 {
  font-family: 'Manrope', sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #1680a5;
}
.forms {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
input,
textarea {
  background: #f4f4f4;
  border-radius: 5px;
  border-style: none;
}

.form {
  width: 726px;
  margin: auto;
}
button {
  background: linear-gradient(89.9deg, #1680a5 -79.71%, #62bad9 167.69%);
  border-radius: 36.5px;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#mail {
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */
  text-align: center;
  color: #454545;
}
mark.blue {
  color: #1680a5;
  background: none;
}
label {
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;

  color: #767575;
}
</style>
