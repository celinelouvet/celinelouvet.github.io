<template>
  <div>
    <NavBar class="nav-bar d-print-none" />
    <div class="container-fluid container-lg">
      <div class="resume-container">
        <div class="main-title">
          <div class="d-none d-print-block">
            <ResumeSummaryPicture />
          </div>
          <div>
            <h1 class="name">{{ resume.firstname }} {{ resume.lastname }}</h1>
            <h2 class="job-title">{{ resume.title }}</h2>
          </div>
        </div>
        <div class="summary">
          <ResumeSummaryPicture class="section picture d-none d-lg-block d-print-none" />
          <ResumeSummaryInfos class="section infos" :resume="resume" />
          <ResumeSummaryRemote class="section remote" :remotes="resume.remotes" />
          <ResumeContentDescription class="section d-lg-none description" :descriptions="resume.descriptions" />
          <ResumeSummarySkills class="section skills" :skills="resume.skills" />
          <ResumeSummarySocials class="section socials" :socials="resume.socials" />
        </div>
        <div class="content">
          <div class="d-print-none d-flex justify-content-end align-items-center actions">
            <ResumePdfDownloader />
            <ResumeDetailsLevel @details-change="details = $event" />
          </div>
          <ResumeContentDescription class="section d-none d-lg-block" :descriptions="resume.descriptions" />
          <ResumeContentExperiences :details="details" class="section" :experiences="resume.experiences" />
          <ResumeContentTalks class="section" :talks="resume.talks" />
          <ResumeContentEducations class="section" :educations="resume.educations" />
          <ResumeContentTrainings class="section" :trainings="resume.trainings" />
          <ResumeContentCertifications class="section" :certifications="resume.certifications" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { enResume, frResume, Resume } from "~/models";

@Component
export default class Layout extends Vue {
  details: boolean = false;

  get resume(): Resume {
    if (this.$i18n.locale === "fr") {
      return frResume;
    }

    return enResume;
  }
}
</script>

<style scoped>
h2,
.h2 {
  text-transform: uppercase;
}
@media screen and (max-width: 768px) {
  .resume-container > div {
    grid-column: 1 / span 2;
  }
}

@media screen and (min-width: 769px) {
  .resume-container {
    display: grid;
    grid-template-columns: [col1] var(--summary-width) [line2] auto;
  }
}

.nav-bar {
  margin-bottom: var(--cv-size-2x);
}

.main-title {
  background-image: var(--blue-and-white);
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
  border-bottom: 1px solid white;
}

.actions > * {
  margin-left: 1em;
}

@media print {
  @page {
    size: A4 portrait;
    margin: 10mm 10mm 10mm 10mm;
  }
  .container-fluid {
    width: 100%;
    max-width: 100%;
  }
  .resume-container > div {
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-column-gap: var(--cv-size);
    grid-row-gap: var(--cv-size-2x);
  }

  .infos {
    grid-row: 1;
    grid-column: 1;
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
    grid-column: 1 / span 2;
  }
  .remote {
    grid-row: 3;
    grid-column: 1 / span 2;
  }
}
</style>
