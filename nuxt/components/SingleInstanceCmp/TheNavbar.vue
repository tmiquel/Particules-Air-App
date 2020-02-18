<template>
  <b-navbar toggleable="md" fixed="top" type="dark">
    <b-navbar-toggle 
      target="collapsing-navbar"
      class="border-0 "
    >

    </b-navbar-toggle >
    <b-navbar-brand class="mr-auto ml-auto" href="#">PARTICULES</b-navbar-brand>
    <b-collapse id="collapsing-navbar" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-block d-md-none" href="#">Accueil</b-nav-item>
        <b-nav-item href="#">A propos</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
        <b-nav-item href="#">Mode Sombre</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.navbar-toggler > .navbar-toggler-icon {
  fill: white; 
  color: white;
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

body {
  padding-top: 70px;
  font-family: "Barlow", sans-serif;
}
</style>