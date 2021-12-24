<template>
  <div>
    <h2>Formations</h2>
    <ContentEducationDetails v-for="education in cv.educations" :key="education.from" :education="education" />
  </div>
</template>

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

<style scoped></style>
