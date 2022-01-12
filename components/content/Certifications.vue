<template>
  <div class="certifications">
    <h2>{{ $t("title") }}</h2>
    <div class="content">
      <ContentCertificationDetails v-for="certification in cv.certifications" :key="certification.when" :certification="certification" />
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Certifications",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Certifications",
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Certifications extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped>
@media print {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--cv-size-2x);
  }
  .certifications {
    break-inside: avoid-page;
  }
}
</style>
