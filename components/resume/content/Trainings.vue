<template>
  <div class="trainings">
    <h2>{{ $t("title") }}</h2>
    <div class="content">
      <ResumeContentTrainingDetails v-for="training in trainings" :key="training.when" :training="training" />
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Formations",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Trainings",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Training } from "~/models";

@Component
export default class Trainings extends Vue {
  @Prop({ default: [] }) readonly trainings!: Training[];
}
</script>

<style scoped>
h2,
.h2 {
  text-transform: uppercase;
}
@media print {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--cv-size-2x);
  }
  .trainings {
    break-inside: avoid-page;
  }
}
</style>
