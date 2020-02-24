<template>
  <b-navbar id="navbar" toggleable="md" fixed="top" type="dark">
    <b-navbar-toggle id="the-navbar-toggler" class="border-0 align-top" target="collapsing-navbar">
      <the-navbar-hamburger :is-open="isCollapseOpen"></the-navbar-hamburger>
    </b-navbar-toggle>
    <nuxt-link tag="b-navbar-brand" class="mr-auto ml-auto" to="/">PARTICULES</nuxt-link>
    <b-collapse v-model="isCollapseOpen" id="collapsing-navbar" is-nav>
      <b-navbar-nav class="ml-auto">
        <nuxt-link tag="b-nav-item" class="d-block d-md-none" to="/">Accueil</nuxt-link>
        <nuxt-link tag="b-nav-item" to="/about">A propos</nuxt-link>
        <nuxt-link tag="b-nav-item" to="/contact">Contact</nuxt-link>
        <b-nav-item>Mode Sombre</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import TheNavbarHamburger from '~/components/SingleInstanceCmp/TheNavbarHamburger.vue'
export default {
  data() {
    return {
      isCollapseOpen: false
    }
  },
  components: {
    TheNavbarHamburger
  },
  // computed: {
  //   // fixedHeightUnlessCollapse() {
  //   //   if (!this.isCollapseOpen) {
  //   //     return {height: "49px !important"}
  //   //   } else return null
  //   // }
  //   //  :style="fixedHeightUnlessCollapse"
  // }
}
</script>

<style lang="scss">
#navbar {
  background: linear-gradient(99.18deg, var(--left-navbar-gradient-color) 27.29%, var(--right-navbar-gradient-color) 88.43%);

  button:focus {
    outline: 0;
  }

  #the-navbar-toggler {
    position: absolute;
    top: 5px;
    padding-left: 0rem !important;
  }

  .nav-link {
    color: var(--gray-100) !important; //$gray-100 !important;
  }
  .nav-link:hover {
    color: var(--gray-300) !important;
  }
  .nav-link:active {
    background-color: var(--left-navbar-gradient-color);
  }

  .navbar-brand {
    color: var(--gray-100) !important; //$gray-100 !important;
  }
  .navbar-brand:hover {
    color: var(--gray-300) !important;
  }

  .navbar-brand {
    color: #ffffff !important;
    font-weight: 500;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
  }
}
</style>
