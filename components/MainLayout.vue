<template>
  <div class="container-fluid container-lg">
    <div class="cv-container">
      <div class="main-title">
        <div class="d-none d-print-block">
          <SummaryPicture />
        </div>
        <div>
          <h1 class="name">{{ cv.firstname }} {{ cv.lastname }}</h1>
          <h2 class="job-title">{{ cv.title }}</h2>
        </div>
      </div>
      <div class="summary">
        <SummaryPicture class="section picture d-none d-lg-block d-print-none" />
        <SummaryInfos class="section infos" :cv="cv" />
        <SummaryRemote class="section remote" :remotes="cv.remotes" />
        <ContentDescription class="section d-lg-none description" :descriptions="cv.descriptions" />
        <SummarySkills class="section skills" :skills="cv.skills" />
        <SummarySocials class="section socials" :socials="cv.socials" />
      </div>
      <div class="content">
        <div class="d-print-none d-flex justify-content-end align-items-center actions">
          <span v-if="languageFlip"><LanguageSwitcher /></span>
          <PdfDownloader />
          <DetailsLevel @details-change="details = $event" />
        </div>
        <ContentDescription class="section d-none d-lg-block" :descriptions="cv.descriptions" />
        <ContentExperiences :details="details" class="section" :experiences="cv.experiences" />
        <ContentTalks class="section" :talks="cv.talks" />
        <ContentEducations class="section" :educations="cv.educations" />
        <ContentCertifications class="section" :certifications="cv.certifications" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { enCv, frCv, CV } from "~/models";

@Component
export default class MainLayout extends Vue {
  details: boolean = false;

  languageFlip: boolean = process.env.ACTIVATE_LANGUAGE === "true";

  get cv(): CV {
    if (this.$i18n.locale === "fr") {
      return frCv;
    }

    return enCv;
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .cv-container > div {
    grid-column: 1 / span 2;
  }
}

@media screen and (min-width: 769px) {
  .cv-container {
    display: grid;
    grid-template-columns: [col1] var(--summary-width) [line2] auto;
  }
}

.main-title {
  background-image: linear-gradient(
    180deg,
    rgba(var(--cv-blue-darkest-rgb), 1),
    rgba(var(--cv-blue-darkest-rgb), 1) 93%,
    rgba(var(--cv-blue-darkest-rgb), 0) 93%,
    rgba(var(--cv-blue-darkest-rgb), 0) 96%,
    rgba(var(--cv-blue-darkest-rgb), 1) 96%
  );
  padding: var(--cv-size-2x) var(--cv-size-2x) 0 var(--cv-size-2x);
  color: white;
}

@media screen and (min-width: 769px) {
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

.actions {
  margin-right: 2.5em;
}

@media screen and (max-width: 768px) {
  .actions {
    margin-bottom: 1.5em;
  }
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

.actions > * {
  margin-left: 1em;
}

@media print {
  @page {
    size: A4 portrait;
    margin: 10mm 10mm 10mm 10mm;
  }
  .container-fluid.container-lg {
    width: 100%;
    max-width: 100%;
  }
  .cv-container > div {
    grid-column: 1 / span 2;
  }
  .summary .section,
  .summary .section:not(:last-of-type) {
    padding-bottom: 0;
  }
  .main-title {
    --photo-size: 100px;
    --summary-width: calc(var(--photo-size) * 2);

    padding: var(--cv-size-2x) var(--cv-size-2x) 0 var(--cv-size-2x);
    display: grid;
    grid-template-columns: [col1] var(--summary-width) [line2] auto;
  }
  .summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: var(--cv-size);
    grid-row-gap: var(--cv-size);
  }
  .skills {
    grid-row: 1 / span 3;
    grid-column: 2;
  }
  .description {
    grid-row: 1 / span 3;
    grid-column: 3;
  }
  .socials {
    grid-row: 2;
    grid-column: 1;
  }
  .remote {
    grid-row: 3;
    grid-column: 1 / span 2;
  }
}
</style>
