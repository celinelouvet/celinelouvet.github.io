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

    return to ? this.$moment(to).format("YYYY") : "aujourd'hui";
  }
}
</script>

<style scoped>
.dates {
  padding-left: 0.5em;
  color: var(--bs-gray-600);
}
</style>
