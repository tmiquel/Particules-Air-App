<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <div id="title">Contactez-nous</div>
        <br/>
        <br/>
         <b-form inline>
            <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.LastName" required placeholder="Nom">
            </b-input>

            <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.FirstName" required placeholder="Prénom">
            </b-input>
        </b-form>
        <br>
      <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
        <br>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Votre message"
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>

      <b-button type="submit" pill variant=""><b>Envoyer</b></b-button>
    </b-form>
    <br />
    <div><i>Ou écrivez directement à :</i> <b>Contact@contact.fr</b></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        FirstName: "",
        LastName: "",
        text: "",
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>


<style scoped>

button {
        

    background: linear-gradient(89.86deg, #006FBF -79.71%, #71C0E8 167.69%);
    border-radius: 24.5px;
    width: 117.69px;
    height: 35.48px;
    left: 148.15px;
    top: 533.59px;

}

#input-1 {

position: center;
width: 418px;
height: 43.63px;
left: 18.11px;
top: 295.95px;

background: #F0F0F0;

}

#inline-form-input-name {

background: #F0F0F0;


}

#textarea {
    position: center;
    width: 418px;
    height: 152.61px;
    left: 18.11px;
    top: 355.45px;

background: #F0F0F0;
}

#title {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 26px;
    position: absolute;

color: #454545;
}
</style>