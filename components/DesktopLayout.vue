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
        <SummaryPicture class="section picture" />
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

  languageFlip: boolean = process.env.ACTIVATE_LANGUAGE === "true";

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
  padding: var(--cv-size-2x) var(--cv-size) 0 var(--summary-width);
  color: white;
}
.main-title .name,
.main-title .job-title {
  text-transform: uppercase;
  font-family: var(--narrow-font);
  margin-bottom: 0;
}
.main-title .name {
  font-size: 3.5em;
  padding-bottom: var(--cv-size);
}
.main-title .job-title {
  font-size: 2.25em;
  padding-bottom: var(--cv-size-3x);
}

.summary,
.content {
  padding: var(--cv-size-2x);
}
.section:not(:last-of-type) {
  padding-bottom: var(--cv-size-2x);
}

.summary {
  background-color: var(--cv-gray);
  width: var(--summary-width);
}
.summary .picture {
  margin-top: calc(var(--photo-size) * -0.5 - var(--cv-size-2x));
}

.content {
  background-color: white;
}
</style>
