<template>
  <div>
    <div class="d-flex flex-row align-items-baseline">
      <h3>{{ certification.topic }}</h3>
      <span class="date">{{ when }}</span>
    </div>
    <p>{{ certification.company }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Certification } from "~/models";

@Component
export default class Certifications extends Vue {
  @Prop({ default: {} }) readonly certification!: Certification;

  get when() {
    return this.$moment(this.certification.when).format("MMM YYYY");
  }
}
</script>

<style scoped></style>
