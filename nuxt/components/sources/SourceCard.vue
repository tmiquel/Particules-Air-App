<template>
  <b-card no-body class="overflow-hidden border-0" title-tag="a">
    <b-row no-gutters>
      <b-col cols="2" class="d-flex justify-content-center align-items-start">
        <b-icon icon="document-text" scale="2" class="mt-2" variant="warning"></b-icon>
      </b-col>
      <b-col cols="10">
        <b-card-body class="py-0 pl-0 pr-1" align="left">
          <h6 class="mb-0">
            <u>
              <strong>
                <b-link
                  :href="source.link"
                  class="text text-dark"
                  :style="$mq === 'mobile' ? { fontSize: '0.9rem' } : { fontSize: '1.1rem' }"
                >{{ source.title }}</b-link>
              </strong>
            </u>
          </h6>
          <b-card-text>
            <small
              class="text-justify"
              :style="$mq === 'mobile' ? { fontSize: '0.8rem' } : { fontSize: '1rem' }"
            >
              {{
              source.description
              }}
            </small>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BIcon, BIconDocumentText } from 'bootstrap-vue'

export default {
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  components: {
    BIcon,
    BIconDocumentText
  }
}
</script>

