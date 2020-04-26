<template>
  <footer>
    <b-container fluid>
      <b-row class="d-flex blue align-items-center" :style="{ height: '360px' }">
        <b-col cols="2" class="d-flex h-100 justify-content-center red small-centered-right-border">
          <img src="~assets/images/icons/particules-initials-logo.svg" alt="Particules" />
        </b-col>
        <b-col
          cols="2"
          class="red text-center h-100 d-flex justify-content-center align-items-center long-centered-right-border"
        >
          <b-container fluid>
            <b-row class="h-100" no-gutters>
              <b-col class="vertical-blue-bar"></b-col>
              <b-col cols="10">
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
                    class="mx-2"
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
                    class="mx-2"
                      target="_blank"
                      :href="particulesInfo.twitter"
                      :style="{ cursor: 'pointer', backgroundColor: 'light' }"
                      pill
                    >
                      <a-icon type="twitter" :style="{ fontSize: '30px', color: '#00acee' }" fill="#00acee" />
                    </b-button>
                    <b-button
                    class="mx-2"
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
                    class="mx-2"
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
        <b-col cols="4" class="red text-center"> 4 </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex red justify-content-center align-items-center">
          <span class="blue text-center mx-2">
            &copy; 2020 Particules
          </span>
          <span class="blue text-center mx-2">
            &copy; 2020 Particules
          </span>
          <span class="blue text-center mx-2">
            &copy; 2020 Particules
          </span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import particulesInfo from '~/data/particules-info.yml'
import { Icon } from 'ant-design-vue'
export default {
  data() {
    return {
      particulesInfo,
    }
  },
  components: {
    AIcon: Icon
  },

}
</script>

<style scoped lang='scss'>
.vertical-blue-bar {
  background-image: linear-gradient(to bottom, var(--primary), var(--primary) 35px, transparent 35px, transparent);
  background-size: 3px 100%;
  background-repeat: no-repeat;
  background-position: right;
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

.btn {
  border-radius: 18px;
  border: none;
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
  /* background: blue; */
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

  background-image: linear-gradient(
    to right,
    var(--primary),
    var(--primary)
  );
  background-size: 35px 0.2rem;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  padding-bottom: 0.5rem;
}
</style>
