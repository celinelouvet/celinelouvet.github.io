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
          <div id="talks">
            <HomeTalks v-if="talksToCome.length > 0" :talks="talksToCome" :title="$t('talksToCome')" class="section" />
            <HomeTalks :talks="talksAlreadyDone" :title="$t('talksAlreadyDone')" class="section" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  talksAlreadyDone: "Conférences & Interviews",
  talksToCome: "Conférences à venir",
}
</i18n>

<i18n locale="en" lang="json5">
{
  talksAlreadyDone: "Talks & Interviews",
  talksToCome: "Incoming talks",
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ConventionTalk, asConventionTalks } from "./conventionTalks";
import { enResume, frResume, Resume } from "~/models";

@Component
export default class Layout extends Vue {
  get resume(): Resume {
    if (this.$i18n.locale === "fr") {
      return frResume;
    }

    return enResume;
  }

  get talksAlreadyDone(): ConventionTalk[] {
    return asConventionTalks(this.resume.talks)
      .filter((talk: ConventionTalk) => this.isDone(talk))
      .sort(({ when: when1 }, { when: when2 }) => this.$moment(when2).diff(this.$moment(when1)));
  }

  get talksToCome(): ConventionTalk[] {
    return asConventionTalks(this.resume.talks)
      .filter((talk: ConventionTalk) => !this.isDone(talk))
      .sort(({ when: when1 }, { when: when2 }) => this.$moment(when2).diff(this.$moment(when1)));
  }

  isDone({ when }: ConventionTalk): boolean {
    return this.isBefore(when);
  }

  isBefore(when?: string) {
    const hasDate = Boolean(when);
    return hasDate && this.$moment(when).isBefore(this.$moment());
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
.section:not(:last-of-type) {
  padding-bottom: var(--cv-size-2x);
}

@media screen and (max-width: 768px) {
  .actions {
    margin-bottom: 1.5em;
  }
}
</style>
