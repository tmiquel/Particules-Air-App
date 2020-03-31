<template>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text">
        <b-nav-item href="/">ACCUEIL</b-nav-item>
        <b-nav-item href="/#">ARTICLES</b-nav-item>
        <b-nav-item href="#">CARTE</b-nav-item>
        <b-nav-item href="/about">L'ÉQUIPE</b-nav-item>
        <b-nav-item href="/contact">CONTACT</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-brand variant="faded" type="light" href="/">
      <img src="~/assets/images/icons/desktop/logo.svg" alt="logo" />
    </b-navbar-brand>
  </b-navbar>
</template>

<style scoped>
.navbar {
  background: #ffffff; /*#ffffff later */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 88px;
  left: 0px;
  top: 0px;
}

.text {
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #1680a5;
}
.navbar-dark .navbar-nav .nav-link {
  color: #454545;
}
.navbar-brand {
  position: absolute;
  left: 44.97%;
  right: 44.97%;

  display: block;
}
</style>
