<template>
  <b-button variant="primary" size="sm" :href="file" target="_blank" download="LOUVET_Celine.pdf"
    ><b-icon-file-earmark-pdf-fill class="icon icon-pdf" /> <span>PDF</span></b-button
  >
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PdfDownloader extends Vue {
  get file() {
    const root = "https://storage.googleapis.com/celinelouvet-cv.appspot.com/CV";

    return `${root}/LOUVET_Celine_${this.$i18n.locale.toUpperCase()}.pdf`;
  }
}
</script>

<style scoped>
.icon-pdf {
  font-size: 0.9em !important;
  vertical-align: middle !important;
}
</style>
