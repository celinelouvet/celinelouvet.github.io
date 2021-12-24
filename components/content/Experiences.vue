<template>
  <div>
    <h2>Expériences</h2>
    <ContentExperienceDetails v-for="xp in cv.experiences" :key="`${xp.company}-${xp.from}`" :job="xp" />
  </div>
</template>

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
