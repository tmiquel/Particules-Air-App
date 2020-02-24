<template>
  <b-card no-body class="overflow-hidden border-0" title-tag="a">
    <b-row no-gutters>
      <b-col cols="2" class="d-flex justify-content-center align-items-start">
        <b-icon icon="document-text" scale="2" class="mt-2" variant="warning"></b-icon>
      </b-col>
      <b-col cols="10">
        <b-card-body class="py-0 pl-0 pr-1" align="left">
          <h6 class="mb-0">
            <u
              ><strong
                ><b-link
                  href="www.google.fr"
                  class="text text-dark"
                  :style="this.$mq === 'mobile' ? { fontSize: '0.9rem' } : { fontSize: '1.1rem' }"
                  >Mon titre</b-link
                ></strong
              ></u
            >
          </h6>
          <b-card-text>
            <small :style="this.$mq === 'mobile' ? { fontSize: '0.8rem' } : { fontSize: '1rem' }">
              This is a wider card with supporting text as a natural lead-in to additional content. This content is a
              little bit longer.</small
            >
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BIcon, BIconDocumentText } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconDocumentText
  }
}
</script>

