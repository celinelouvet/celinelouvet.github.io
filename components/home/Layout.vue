<template>
  <div>
    <div class="nav-bar container-fluid container-lg">
      <HomeNavBar />
    </div>
    <div class="container-fluid container-lg">
      <div class="home-container">
        <div class="summary">
          <div class="container d-flex d-lg-none justify-content-end align-items-center actions">
            <span v-if="languageFlip"><ResumeLanguageSwitcher /></span>
          </div>
          <ResumeSummaryPicture class="picture" />
          <div class="main-title">
            <h1 class="name">{{ resume.firstname }} {{ resume.lastname }}</h1>
            <h2 class="job-title">{{ resume.title }}</h2>
          </div>
        </div>
        <div class="content">
          <div class="container d-none d-lg-flex justify-content-end align-items-center actions">
            <span v-if="languageFlip"><ResumeLanguageSwitcher /></span>
          </div>
          <HomeBiography class="section" :biographies="resume.biographies" />
          <HomeSocials class="section" :socials="resume.socials" />
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
  languageFlip: boolean = process.env.ACTIVATE_LANGUAGE === "true";

  get resume(): Resume {
    if (this.$i18n.locale === "fr") {
      return frResume;
    }

    return enResume;
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .home-container > div {
    grid-column: 1 / span 2;
  }
}

@media screen and (min-width: 769px) {
  .home-container {
    --summary-width: calc(var(--photo-size) * 1.75);

    display: grid;
    grid-template-columns: [col1] var(--summary-width) [line2] auto;
  }
}

.nav-bar {
  background-image: linear-gradient(
    180deg,
    rgba(var(--cv-blue-darkest-rgb), 1),
    rgba(var(--cv-blue-darkest-rgb), 1) 93%,
    rgba(var(--cv-blue-darkest-rgb), 0) 93%,
    rgba(var(--cv-blue-darkest-rgb), 0) 96%,
    rgba(var(--cv-blue-darkest-rgb), 1) 96%
  );
  padding: var(--cv-size-2x);
  color: white;
}

.main-title .name,
.main-title .job-title {
  text-align: center;

  font-family: var(--narrow-font);
  margin-bottom: 0;
}
.main-title .name {
  text-transform: uppercase;
  font-size: 2.75em;
  padding-bottom: var(--cv-size);
}
.main-title .job-title {
  font-size: 2em;
  padding-bottom: var(--cv-size-3x);
}

.summary,
.content {
  padding: var(--cv-size-2x);
}

.picture {
  margin-bottom: var(--cv-size);
}

.actions {
  margin-right: 2.5em;
}

@media screen and (max-width: 768px) {
  .actions {
    margin-bottom: 1.5em;
  }
}
</style>
