<template>
  <b-navbar toggleable="md" fixed="top" type="dark">
    <b-navbar-toggle class="border-0">
      <the-navbar-hamburger
        :is-open="isCollapseOpen"
        v-b-toggle.collapsing-navbar
      />
    </b-navbar-toggle>
    <nuxt-link tag="b-navbar-brand" class="mr-auto ml-auto" to="/"
      >PARTICULES</nuxt-link
    >
    <b-collapse v-model="isCollapseOpen" id="collapsing-navbar" is-nav>
      <b-navbar-nav class="ml-auto">
        <nuxt-link tag="b-nav-item" class="d-block d-md-none" to="/"
          >Accueil</nuxt-link
        >
        <nuxt-link tag="b-nav-item" to="/about">A propos</nuxt-link>
        <nuxt-link tag="b-nav-item" to="/contact">Contact</nuxt-link>
        <b-nav-item>Mode Sombre</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import TheNavbarHamburger from "@/components/SingleInstanceCmp/TheNavbarHamburger.vue";
export default {
  components: {
    TheNavbarHamburger
  },
  data() {
    return {
      isCollapseOpen: false
    };
  }
};
</script>

<style lang="scss">
.nav-link {
  color: #fff !important; //$gray-100 !important;
}
.nav-link:hover {
  color: gray("300") !important;
}
.nav-link:active {
  background-color: var(--left-gradient-color);
}

.navbar-brand {
  color: #fff !important; //$gray-100 !important;
}
.navbar-brand:hover {
  color: gray("300") !important;
}

nav.navbar {
  background: linear-gradient(
    99.18deg,
    var(--left-gradient-color) 27.29%,
    var(--right-gradient-color) 88.43%
  );
}

.navbar-brand {
  color: #ffffff !important;
  font-weight: 500;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
}
</style>