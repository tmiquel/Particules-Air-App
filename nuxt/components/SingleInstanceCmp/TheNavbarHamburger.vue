<template>
  <div id="burger" :class="{ active: isOpen }">
    <slot>
      <span class="burger-button" title="Menu">
        <span class="invisible">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </span>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>


<style scoped>
.burger-button {
  /* margin-left -6px in order to align burger at 16px margin from left border of the screen (including the navbar padding),
   /* and have the same vertical alignement than the banner text's one */ 
  margin-left: -6px;
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 60;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(1);
}

/* Because hover don't work on small devises, Reduce second bar on hovering only on computer, not on tablet or mobiles,
breakpoint set as per https://project-rfs.github.io/docs/4.3/layout/overview/#responsive-breakpoints  */
/* @media only screen and (min-width: 992px)  {
.burger-button:hover .burger-bar--2 {
  transform: scaleX(0.8);
}
} */

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
