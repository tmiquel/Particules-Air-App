<template>
  <nav
    class="navbar fixed-top navbar-toggleable-sm navbar-expand-md"
  >
    <button
      class="navbar-toggler navbar-toggler-left collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#collapsingNavbar"
    >
      <span> </span>
      <span> </span>
      <span> </span>
    </button>
    <a class="navbar-brand mr-auto ml-auto" href="#">
      PARTICULES <i class="hidden-sm-down"></i>
    </a>
    <div class="collapse navbar-collapse" id="collapsingNavbar">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item d-block d-md-none">
          <a class="nav-link" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">A propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="#">Mode Sombre</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">


// .nav-link:not(:hover):not(:active) {
//   color: #ffffff !important; 
// }




.nav-link{
  color: #fff !important;//$gray-100 !important; 
}

.nav-link:hover {
  // color: blue!important;
  color: gray("300") !important;
  // background-color: var(--left-gradient-color);
}

.nav-link:active  {
  // color: #fff !important; 
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
    font-family: 'Barlow', sans-serif;
}

.navbar-toggler:focus,
.navbar-toggler:active {
    outline: 0;
}

.navbar-toggler span {
   display: block;
   background-color: #ffffff;
   height: 3px;
   width: 25px;
   margin-top: 4px;
   margin-bottom: 4px;
   -webkit-transform: rotate(0deg);
   -moz-transform: rotate(0deg);
   -o-transform: rotate(0deg);
   transform: rotate(0deg);
   position: relative;
   left: 0;
   opacity: 1;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
   -webkit-transition: transform .35s ease-in-out;
   -moz-transition: transform .35s ease-in-out;
   -o-transition: transform .35s ease-in-out;
   transition: transform .35s ease-in-out;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
    position: absolute;
    left: 12px;
    top: 10px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    opacity: 0.9;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
    height: 12px;
    visibility: hidden;
    background-color: transparent;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
    position: absolute;
    left: 12px;
    top: 10px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    opacity: 0.9;
}
</style>