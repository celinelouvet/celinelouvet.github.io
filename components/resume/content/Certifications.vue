<template>
  <div class="certifications">
    <h2>{{ $t("title") }}</h2>
    <div class="content">
      <ResumeContentCertificationDetails v-for="certification in certifications" :key="certification.when" :certification="certification" />
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
import { Vue, Component, Prop } from "vue-property-decorator";

import { Certification } from "~/models";

@Component
export default class Certifications extends Vue {
  @Prop({ default: [] }) readonly certifications!: Certification[];
}
</script>

<style scoped>
h2,
.h2 {
  text-transform: uppercase;
}
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
