<template>
  <div class="experiences">
    <h2>{{ $t("title") }}</h2>
    <ResumeContentExperienceDetails
      v-for="(xp, index) in experiences"
      :key="`${xp.company}-${xp.from}`"
      :job="xp"
      :summarize="xp.summarize"
      :details="details"
      :class="`experience-${index}`"
    />
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
import { Vue, Component, Prop } from "vue-property-decorator";

import { Experience } from "~/models";

@Component
export default class Experiences extends Vue {
  @Prop({ default: [] }) readonly experiences!: Experience[];
  @Prop({ default: false }) readonly details!: boolean;

  sort(experiences: Experience[]) {
    return experiences.sort(({ from: from1 }, { from: from2 }) => {
      return -this.$moment(from1).diff(this.$moment(from2));
    });
  }
}
</script>

<style scoped>
h2,
.h2 {
  text-transform: uppercase;
}
@media print {
  /* Specific print adjustments depending on the content */
  .experience-1,
  .experience-5 {
    break-before: always;
  }
}
</style>
