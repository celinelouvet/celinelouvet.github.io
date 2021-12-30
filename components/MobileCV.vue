<template>
  <b-container fluid class="d-block d-md-none full">
    <div class="main-title">
      <h1 class="name">{{ cv.firstname }} {{ cv.lastname }}</h1>
      <h2 class="job-title">{{ cv.title }}</h2>
    </div>
    <SummaryInfos />
    <SummarySkills />
    <ContentDescription />
    <ContentExperiences />
    <ContentTalks />
    <ContentEducations />
    <ContentCertifications />
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class MobileCV extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped>
.main-title {
  background: linear-gradient(
    180deg,
    rgba(var(--cv-blue-rgb), 1),
    rgba(var(--cv-blue-rgb), 1) 93%,
    rgba(var(--cv-blue-rgb), 0) 93%,
    rgba(var(--cv-blue-rgb), 0) 96%,
    rgba(var(--cv-blue-rgb), 1) 96%
  );
  color: white;
  text-transform: uppercase;
  font-family: var(--narrow-font);
  padding-left: var(--summary-width);
}
.main-title .name {
  font-size: 3.5em;
  /* font-weight: bold; */
  padding-top: 0.5em;
  padding-bottom: 0.25em;
}
.main-title .job-title {
  font-size: 2.25em;
  padding-bottom: 1em;
}
.summary {
  background-color: var(--cv-gray);
  width: var(--summary-width);
}
.summary .picture {
  margin-top: calc(var(--photo-size) * -0.5);
}
.summary .section {
  margin: 1.5em 1.5em 0em 1.5em;
}

.content {
  background-color: white;
}
</style>
