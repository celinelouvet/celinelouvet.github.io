<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ContentCertificationDetails v-for="certification in cv.certifications" :key="certification.when" :certification="certification" />
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

<style scoped></style>
