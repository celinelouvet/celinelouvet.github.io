<template>
  <div class="flex vertical full">
    <div class="main-title">
      <div v-if="languageFlip" class="d-flex justify-content-end">
        <LanguageSwitcher />
      </div>
      <h1 class="name">{{ cv.firstname }} {{ cv.lastname }}</h1>
      <h2 class="job-title">{{ cv.title }}</h2>
    </div>
    <div class="flex horizontal flex-1">
      <div class="summary">
        <SummaryPicture class="picture" />
        <SummaryInfos class="section" />
        <SummarySkills class="section" />
        <SummarySocials class="section" />
      </div>
      <div class="content flex-1">
        <DetailsLevel class="details-container" @details-change="details = $event" />
        <ContentDescription class="section" />
        <ContentExperiences :details="details" class="section" />
        <ContentTalks class="section" />
        <ContentEducations class="section" />
        <ContentCertifications class="section" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class DesktopLayout extends Vue {
  details: boolean = false;

  languageFlip: boolean = false;

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
  padding: 0.5em 1em 0 var(--summary-width);
  color: white;
}
.main-title .name,
.main-title .job-title {
  text-transform: uppercase;
  font-family: var(--narrow-font);
}
.main-title .name {
  font-size: 3.5em;
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

.content .section {
  margin: 2em 1.5em 0em 1.5em;
}

.details-container {
  margin-top: 1em;
}
</style>
