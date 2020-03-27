<template>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav active class="text">
        <b-nav-item href="/about">A propos</b-nav-item>
        <b-nav-item href="/contact">contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-brand class="title" active href="/">Particules</b-navbar-brand>
  </b-navbar>
</template>

<style scoped>
.navbar {
  background: #ffffff; /*#ffffff later */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.title {
  font-family: cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 42px;
  /* identical to box height */

  color: #016fbf !important;
}
.text {
  font-family: cursive;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
}
.navbar-dark .navbar-nav .nav-link {
  color: #454545;
}
.navbar-brand {
  position: absolute;
  left: 44.65%;
  right: 44.65%;
  display: block;
  width: 100%;
}
</style>
