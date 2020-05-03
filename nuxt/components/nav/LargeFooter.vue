<template>
  <footer>
    <b-container fluid :style="{ padding: '14px 30px 0 30px' }" class="pink">
      <b-row class="d-flex blue align-items-center upper-gray-bar" :style="{ height: '360px' }">
        <b-col cols="2" class="d-flex h-100 justify-content-center red small-centered-right-border">
          <img src="~assets/images/icons/particules-initials-logo.svg" alt="Particules" />
        </b-col>
        <b-col
          cols="2"
          class="red text-center h-100 d-flex justify-content-center align-items-center long-centered-right-border"
        >
          <b-container fluid>
            <b-row class="h-100" no-gutters>
              <b-col class="vertical-blue-bar">
                <b-nav vertical class="pink">
                  <b-nav-item to="/"><b>Accueil</b></b-nav-item>
                  <b-nav-item to="/posts"><b>Article</b></b-nav-item>
                  <b-nav-item to="/maps"><b>Carte</b></b-nav-item>
                  <b-nav-item to="/about"><b>L'équipe</b></b-nav-item>
                  <b-nav-item to="/contact"><b>Contact</b></b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col cols="4" class="h-100 red text-center long-centered-right-border">
          <b-row cols="1" class="h-100 red" align-v="center" align-h="center">
            <b-col class="pink">
              <b-container fluid>
                <b-row cols="1">
                  <b-col class="text-primary center-primary-underline py-3" :style="{ fontWeight: '600' }">
                    Vous aimez notre travail ? Partagez-le !
                  </b-col>
                  <b-col class="my-3">
                    <b-button
                      class="social-network-btn mx-2 d-inline-flex justify-content-center align-items-center"
                      target="_blank"
                      :href="particulesInfo.linkedin"
                      :style="{ cursor: 'pointer', backgroundColor: 'light' }"
                      pill
                    >
                      <a-icon
                        type="linkedin"
                        :theme="'filled'"
                        :style="{ fontSize: '30px', color: '#0e76a8' }"
                        fill="#0e76a8"
                      />
                    </b-button>
                    <b-button
                      class="social-network-btn mx-2 d-inline-flex justify-content-center align-items-center"
                      target="_blank"
                      :href="particulesInfo.twitter"
                      :style="{ cursor: 'pointer', backgroundColor: 'light' }"
                      pill
                    >
                      <a-icon type="twitter" :style="{ fontSize: '30px', color: '#00acee' }" fill="#00acee" />
                    </b-button>
                    <b-button
                      class="social-network-btn mx-2 d-inline-flex justify-content-center align-items-center"
                      target="_blank"
                      :href="particulesInfo.facebook"
                      :style="{ cursor: 'pointer', backgroundColor: 'light' }"
                      pill
                    >
                      <a-icon
                        type="facebook"
                        :theme="'filled'"
                        :style="{ fontSize: '30px', color: '#3b5998' }"
                        fill="#3b5998"
                      />
                    </b-button>
                    <b-button
                      class="social-network-btn mx-2 d-inline-flex justify-content-center align-items-center"
                      target="_blank"
                      :href="particulesInfo.instagram"
                      :style="{ cursor: 'pointer', backgroundColor: 'light' }"
                      pill
                    >
                      <a-icon
                        type="instagram"
                        :theme="'filled'"
                        :style="{ fontSize: '30px', color: '#3b5998' }"
                        fill="#3b5998"
                      />
                    </b-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="4" class="red text-center">
          <b-row cols="1" class="h-100 red" align-v="center" align-h="center">
            <b-col class="pink">
              <b-container>
                <b-row>
                  <b-col cols="2" class="d-flex justify-content-end align-items-center text-primary py-3 green">
                    <img src="~assets/images/icons/newsletter.svg" class="yellow" alt="newsletter" />
                  </b-col>
                  <b-col cols="10" id="call-to-newsletter" class="text-primary py-3" :style="{ fontWeight: '600' }">
                    <span :style="{ lineHeight: '1.3' }">Pour suivre nos futures publications,</span>
                    <span>laissez nous votre email</span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" class="mb-4 ml-4 d-flex justify-content-start" id="mc_embed_signup">
                    <!-- Begin Mailchimp Signup Form -->

                    <!-- <mailchimp-subscribe
                      url="https://particules.us8.list-manage.com/subscribe/post-json"
                      user-id="d44695a488e6e3df588513296"
                      list-id="b4d1952361"
                      @error="onError"
                      @success="onSuccess"
                    > -->
                      <!-- <template v-slot="{ subscribe, setEmail, error, success, loading }"> -->
                        <form
                          @submit.prevent="subscribe"
                          id="my-mailchimp-form"
                          class="d-inline-flex justify-content-start"
                        >
                          <b-form-input
                            type="email"
                            value=""
                            placeholder="Email"
                            name="MERGE0"
                            class="required email"
                            id="MERGE0"
                            @input="setEmail($event)"
                          />
                          <b-button
                            variant="secondary"
                            type="submit"
                            value=">"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                          >
                            <b>
                              <a-icon type="right" />
                            </b>
                          </b-button>

                          <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text" name="b_d44695a488e6e3df588513296_b4d1952361" tabindex="-1" value="" />
                          </div>

                          <!-- //TODO layout
                            //TODO error msg
                            //TODO enlever pink, etc.
                            //TODO push -->
                        </form>
                  </b-col>
                  <b-col class="ml-4 d-flex justify-content-start">
                    <div v-if="error" class="ml-2 text-danger"><b>{{ error }}</b></div>
                    <div v-if="success" class="ml-2 text-success"><b>Merci! Votre email a bien été ajouté</b></div>
                    <div v-if="loading" class="ml-2 text-primary"><b>Email en cours d'ajout...</b></div>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row :style="{ height: '55px' }" class="yellow upper-gray-bar">
        <b-col class="d-flex red justify-content-center align-items-center">
          <span class="blue text-center mx-2">
            &copy; 2020 Particules
          </span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import MailchimpSubscribe from './VueMailchimpSubscribe'
import particulesInfo from '~/data/particules-info.yml'
import { Icon } from 'ant-design-vue'
import { BOverlay } from 'bootstrap-vue'
import jsonp from "jsonp";
import queryString from "query-string";


export default {
  data() {
    return {
      particulesInfo,
      error: '',
      email: '',
      url: "https://particules.us8.list-manage.com/subscribe/post-json",
      userId: "d44695a488e6e3df588513296",
      listId: "b4d1952361",
      success: false,
      error: null,
      loading: false,

    }
  },
  components: {
    AIcon: Icon,
    MailchimpSubscribe,
    'b-overlay': BOverlay
  },
  computed: {
    data() {
      return queryString.stringify({
        u: this.userId,
        id: this.listId,
        EMAIL: this.email
      })
    }
  },
  methods: {
    setEmail(value = '') {
      this.email = value.trim()
    },

    subscribe() {
      if (this.email === null || this.loading) {
        return
      }

      this.success = false
      this.error = null
      this.loading = true

      const url = `${this.url}?${this.data}`

      jsonp(url, { param: 'c' }, this.onResponse)
    },
    onResponse(error, data) {
      this.loading = false

      if (error) {
        this.error = error
      }

      if (data && data.result === 'error') {
        this.error = this.formatErrorMessage(data.msg)
      }

      if (this.error) {
        this.onError();
      } else {
        this.success = true
        this.email = null
        this.onSuccess();

      }
    },

    formatErrorMessage(message) {
      message.replace('0 - ', '')
      if (message.includes('is already subscribed to list')) {
        message = 'Cet email est déjà ajouté'
      }
      return message
    },
    onError() {
      // handle error
    },
    onSuccess() {
      // handle success
    }
  }
}
</script>

<style scoped lang='scss'>
.vertical-blue-bar {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 6px,
    var(--primary) 6px,
    var(--primary) 41px,
    transparent 41px,
    transparent
  );
  background-size: 3px 100%;
  background-repeat: no-repeat;
  background-position: left 33% top 50%;
}

.long-centered-right-border {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 105px,
    #c4c4c4 105px,
    #c4c4c4 255px,
    transparent 255px,
    transparent
  );
  background-size: 1px 100%;
  background-repeat: no-repeat;
  background-position: right;
}

.upper-gray-bar {
  background-image: linear-gradient(to left, #e5e5e5, #e5e5e5);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top;
}

.social-network-btn {
  border-radius: 18px !important;
  border: none;
  width: 50px;
  height: 50px;
  background-color: #f7f7f7;
  &:hover {
    background-color: #d7d5d5;
  }
}

.small-centered-right-border {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 154px,
    #c4c4c4 154px,
    #c4c4c4 206px,
    transparent 206px,
    transparent
  );
  background-size: 1px 100%;
  background-repeat: no-repeat;
  background-position: right;
}

.red {
  // background: red;
}

.pink {
  // background: pink;
}

.blue {
  //  background: blue;
}

.yellow {
  // background: yellow;
}

.green {
  // background: greenyellow;
}

.nav-link {
  margin-left: 0;
  padding-right: 0;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 4px;
  color: var(--primary);
  &.active {
    color: var(--dark-primary);
  }
}

.center-primary-underline {
  color: var(--primary);

  background-image: linear-gradient(to right, var(--primary), var(--primary));
  background-size: 35px 0.2rem;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  padding-bottom: 0.5rem;
}

#call-to-newsletter span {
  display: table;
}

#my-mailchimp-form,
#my-mailchimp-form input {
  background: #f4f4f4;
  width: 340px;
  height: 49.22px;
  left: 1013px;
  top: 183px;
  border: 0 !important;

  background: #f4f4f4;
  border-radius: 18px;
}

#my-mailchimp-form .btn {
  width: 48px;
  height: 49px;
  left: 1305px;
  top: 183px;
  margin-left: -50px;
  border: none;

  background: #d7d5d5;
  &:hover {
    background: #6a6a6a;
  }
  border-radius: 18px;

  b > i {
    font-size: 140%;
  }
}
</style>
