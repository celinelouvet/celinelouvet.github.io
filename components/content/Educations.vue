<template>
  <div class="educations">
    <h2>{{ $t("title") }}</h2>
    <div class="content">
      <ContentEducationDetails v-for="education in cv.educations" :key="education.from" :education="education" />
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Formation",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Education",
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Infos extends Vue {
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
  .educations {
    break-inside: avoid-page;
  }
}
</style>
