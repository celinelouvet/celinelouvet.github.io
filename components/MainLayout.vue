<template>
  <div class="container-fluid container-lg">
    <div class="grid cv-container">
      <div class="main-title">
        <div v-if="languageFlip" class="d-flex justify-content-end">
          <LanguageSwitcher />
        </div>
        <h1 class="name">{{ cv.firstname }} {{ cv.lastname }}</h1>
        <h2 class="job-title">{{ cv.title }}</h2>
      </div>
      <div class="summary">
        <SummaryPicture class="section picture d-none d-lg-block" />
        <SummaryInfos class="section" />
        <ContentDescription class="section d-lg-none" />
        <SummarySkills class="section" />
        <SummarySocials class="section" />
      </div>
      <div class="content">
        <DetailsLevel class="details-container" @details-change="details = $event" />
        <ContentDescription class="section d-none d-lg-block" />
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
export default class MainLayout extends Vue {
  details: boolean = false;

  languageFlip: boolean = process.env.ACTIVATE_LANGUAGE === "true";

  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .cv-container > div {
    grid-column: 1 / span 2;
  }
}

@media (min-width: 769px) {
  .cv-container {
    grid-template-columns: [col1] var(--summary-width) [line2] auto;
  }
}

.main-title {
  background: linear-gradient(
    180deg,
    rgba(var(--cv-blue-rgb), 1),
    rgba(var(--cv-blue-rgb), 1) 93%,
    rgba(var(--cv-blue-rgb), 0) 93%,
    rgba(var(--cv-blue-rgb), 0) 96%,
    rgba(var(--cv-blue-rgb), 1) 96%
  );
  padding: var(--cv-size-2x) var(--cv-size-2x) 0 var(--cv-size-2x);
  color: white;
}

@media (min-width: 769px) {
  .main-title {
    padding: var(--cv-size-2x) var(--cv-size-2x) 0 calc(var(--summary-width) + var(--cv-size-2x));
    grid-column: 1 / span 2;
  }
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
}
.summary .picture {
  margin-top: calc(var(--photo-size) * -0.5 - var(--cv-size-2x));
}

.content {
  background-color: white;
}

@media print {
  .cv-container {
    width: 100%;
  }
}
</style>
