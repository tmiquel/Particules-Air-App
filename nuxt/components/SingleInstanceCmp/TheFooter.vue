<template>
  <div>
    <b-nav
      :justified="true"
      :small="true"
      type="dark"
      class="footer-bar d-flex justify-content-between fixed-bottom"
      style="height: 40px;"
      tabs
    >
      <b-button
        squared
        variant="primary"
        class="footer-item flex-grow-1"
        ><span class="d-none d-md-inline">LES GRAPHES<b-icon-pie-chart class="ml-2"
      /></span>
      
      <span class="d-md-none row"> <span class="mobile-footer-text col-6"> GRAPHES </span> <b-icon-pie-chart class="col-6"
      />
      
      
      </span>
      
      </b-button>
      <b-button
        squared
        variant="primary"
        class="footer-item flex-grow-1"
        ><span class="d-none d-md-inline">LES ACTEURS<b-icon-people class="ml-2" /></span>

      <span class="d-md-none  row "> <span class="mobile-footer-text col-6"> ACTEURS</span><b-icon-people class="col-6"
      /> </span>

      </b-button>
      <b-button squared variant="primary" class="footer-item flex-grow-1"
        ><span class="d-none d-md-inline"
          >LE LEXIQUE <b-icon-list-check class="ml-2" scale="1.3" shift-v="-1"/></span
      >
      
            <span class="d-md-none  row "> <span class="mobile-footer-text col-6"> LEXIQUE</span><b-icon-list-check class="col-6"
      /> </span>
      
      </b-button>
      <b-button squared variant="primary" class="footer-item flex-grow-1"
        ><span class="d-none d-md-inline">LES SOURCES<b-icon-documents class="ml-2"
      /></span
        >
        
        <span class="d-md-none  row"> <span class="mobile-footer-text col-6"> SOURCES </span><b-icon-documents class="col-6"
      /> </span>
        
        
        </b-button>
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

.mobile-footer-text {
font-size: 12px;
}

.footer-item span {
  font-family: "Source Sans Pro", sans-serif;
}
</style>


