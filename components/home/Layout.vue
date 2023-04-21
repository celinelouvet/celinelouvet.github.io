<template>
  <div>
    <NavBar class="nav-bar" />
    <div class="container-fluid container-lg">
      <div class="home-container">
        <div class="summary">
          <ResumeSummaryPicture class="picture" />
          <div class="main-title">
            <h1 class="name">{{ resume.firstname }} {{ resume.lastname }}</h1>
            <h2 class="job-title">{{ resume.title }}</h2>
          </div>
        </div>
        <div class="content">
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
