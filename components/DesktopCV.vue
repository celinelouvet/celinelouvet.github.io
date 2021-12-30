<template>
  <div class="flex vertical full">
    <div class="main-title">
      <div class="d-flex justify-content-end">
        <b-dropdown right variant="outline-light">
          <template #button-content>
            <Language :locale="$i18n.localeProperties" />
          </template>
          <b-dropdown-item v-for="locale in $i18n.locales" :key="locale.code" @click.prevent.stop="changeLocale(locale)">
            <Language :locale="locale" />
          </b-dropdown-item>
        </b-dropdown>
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
        <ContentDescription class="section" />
        <ContentExperiences class="section" />
        <ContentTalks class="section" />
        <ContentEducations class="section" />
        <ContentCertifications class="section" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LocaleObject } from "@nuxtjs/i18n";
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

const localeCodes: Map<string, string> = new Map([
  ["us", "en-gb"],
  ["fr", "fr"],
]);

@Component
export default class DesktopCV extends Vue {
  created() {
    const localeCode = localeCodes.get(this.$i18n.locale) ?? "fr";
    this.$moment.locale(localeCode);
  }

  get cv(): CV {
    return cv;
  }

  changeLocale({ code }: LocaleObject) {
    this.$i18n.setLocale(code);

    const localeCode = localeCodes.get(code) ?? "fr";
    this.$moment.locale(localeCode);
  }
}
</script>

<style>
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

.content .section {
  margin: 2em 1.5em 0em 1.5em;
}

.content {
  background-color: white;
}
</style>
