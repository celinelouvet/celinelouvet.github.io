<template>
  <div>
    <h2>Certifications</h2>
    <ContentCertificationDetails v-for="certification in cv.certifications" :key="certification.when" :certification="certification" />
  </div>
</template>

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
