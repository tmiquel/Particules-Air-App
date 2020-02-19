<template>
  <div>
    <b-nav
      :justified="true"
      :small="true"
      type="dark"
      class="footer-bar w-100 d-flex justify-content-between fixed-bottom flex-nowrap"
      tabs
    >
      <b-button squared variant="primary" class="footer-item flex-grow-1 flex-nowrap">LES GRAPHES<b-icon-pie-chart
      /></b-button>
      <b-button squared variant="primary" class="footer-item flex-grow-1 flex-nowrap"
        ><span class="pr-10"  >LES ACTEkjsbcqkjsURS <b-icon-people/> </span> 
      </b-button>
      <b-button squared variant="primary" class="footer-item flex-grow-1"
        ><span class="pr-1 d-none d-md-block">LE LEXIQUE</span><b-icon-list-check scale="1.3" shift-v="-1"
      /></b-button>
      <b-button squared  variant="primary" class="footer-item flex-grow-1"
        ><span class="pr-1 d-none d-md-block">LES SOURCES</span><b-icon-documents
      /></b-button>
    </b-nav>
  </div>
</template>  

<script>
import {
  BIcon,
  BIconPieChart,
  BIconPeople,
  BIconListCheck,
  BIconDocuments
} from "bootstrap-vue";

export default {
  components: {
    BIcon,
    BIconPieChart,
    BIconPeople,
    BIconListCheck,
    BIconDocuments
  }
};
</script>


<style scoped>
.footer-bar {
  /* background-color: var(--footer-background-color); */
}
.footer-item {
}

.footer-item span {
  font-family: "Source Sans Pro", sans-serif;
}
</style>


