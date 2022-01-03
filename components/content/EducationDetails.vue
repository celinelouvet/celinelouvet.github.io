<template>
  <div>
    <div class="flex horizontal align-baseline">
      <h3>{{ education.school }}</h3>
      <span class="dates">{{ from }} - {{ to }}</span>
    </div>
    <p v-if="education.fullname">{{ education.fullname }}</p>
    <p v-if="education.diploma && education.speciality">{{ education.diploma }} - {{ education.speciality }}</p>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  today: "aujourd'hui",
}
</i18n>

<i18n locale="en" lang="json5">
{
  today: "today",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { cv, CV, Education } from "~/models";

@Component
export default class Infos extends Vue {
  @Prop({ default: {} }) readonly education!: Education;

  get cv(): CV {
    return cv;
  }

  get from() {
    const from = this.education.from;
    return this.$moment(from).format("YYYY");
  }

  get to() {
    const to = this.education.to;
    return to ? this.$moment(to).format("YYYY") : this.$t("today");
  }
}
</script>

<style scoped>
.dates {
  padding-left: var(--cv-size);
  color: var(--bs-gray-600);
}
</style>
