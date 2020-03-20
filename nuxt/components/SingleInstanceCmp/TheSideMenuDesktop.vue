<template>
  <div id="the-side-menu-desktop" class="pl-3">
    <div v-for="(menu,id) in menuNames" :key="id" class="my-2">
      <nuxt-link
        :to="urlFor(menu)"
        tag="div"
        class="link border border-primary d-flex justify-content-center align-items-center"
      >
        <span class="label font-weight-bold text-truncate">{{nameFor(menu)}}</span>
        <img :src="require(`~/assets/images/icons/${menu}.svg`)" class="img-fluid" />
      </nuxt-link>
    </div>
  </div>
</template>


<script>
// import graphsIcon from '~/assets/images/icons/graphs.svg?inline'
// import stakeholdersIcon from '~/assets/images/icons/stakeholders.svg?inline'
// import definitionsIcon from '~/assets/images/icons/definitions.svg?inline'
// import sourcesIcon from '~/assets/images/icons/sources.svg?inline'
export default {
  data() {
    return {
      menuNames: ['graphs', 'stakeholders', 'definitions', 'sources']
    }
  },
  methods: {
    urlFor(page) {
      return `/posts/${this.$route.params.name ? this.$route.params.name : 'home'}/${page}`
    },
    nameFor(menu) {
      return {
        graphs: 'LES GRAPHES',
        stakeholders: 'LES ACTEURS',
        definitions: 'LE LEXIQUE',
        sources: 'LES SOURCES'
      }[menu]
    }
  }
}
</script>

<style lang="scss">
#the-side-menu-desktop {
  position: fixed;
  top: 33%;
  left: 0;
  min-width: 50px;
  z-index: 1000000001;

  .link {
    height: 40px;
    min-width: 40px;
    border-radius: 20px;
    color: var(--left-navbar-gradient-color);
    background-color: #ffffff;
    cursor: pointer;

    img {
      // https://codepen.io/sosuke/pen/Pjoqqp
      filter: invert(38%) sepia(15%) saturate(1924%) hue-rotate(169deg) brightness(91%) contrast(85%);
      height: 18px;
    }

    .label {
      display: none;
      transition: all 0.5s ease-in 0.2s;
      margin-right: 8px;
    }
    &.nuxt-link-active {
      color: #ffffff;
      background-color: var(--left-navbar-gradient-color);

      img {
        // https://codepen.io/sosuke/pen/Pjoqqp
        filter: invert(100%) sepia(98%) saturate(6%) hue-rotate(305deg) brightness(103%) contrast(100%);
      }
    }
  }
  &:hover {
    .link {
      animation-duration: 0.4s;
      animation-name: expand;
      animation-fill-mode: forwards;
    }
    .label {
      display: flex;
    }
    @keyframes expand {
      from {
        width: 10%;
      }
      to {
        padding: 0 15px;
        width: 100%;
      }
    }
  }
}
</style>
