<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ContentExperienceDetails v-for="xp in cv.experiences" :key="`${xp.company}-${xp.from}`" :job="xp" />
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Expériences",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Experience",
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV, Experience } from "~/models";

@Component
export default class Experiences extends Vue {
  get cv(): CV {
    return cv;
  }

  sort(experiences: Experience[]) {
    return experiences.sort(({ from: from1 }, { from: from2 }) => {
      return -this.$moment(from1).diff(this.$moment(from2));
    });
  }
}
</script>

<style scoped></style>
