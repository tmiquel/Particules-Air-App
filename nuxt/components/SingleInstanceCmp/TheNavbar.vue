<template>
  <b-navbar toggleable="md" fixed="top" type="dark">
    <b-navbar-toggle class="border-0" target="collapsing-navbar" />
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
export default {
  data() {
    return {
      isCollapseOpen: false
    };
  }
};
</script>

<style lang="scss">


$custom-navbar-toggle-color: #fff;
$custom-navbar-toggler-icon-bg: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$custom-navbar-toggle-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
.navbar-dark .navbar-toggler-icon {
  background-image: escape-svg($custom-navbar-toggler-icon-bg);
}    

// remove blue outline when the burger is selected
.navbar-dark > button:focus {
  outline: 0;
} 


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