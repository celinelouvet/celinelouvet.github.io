<template>
  <div>
    <div class="d-flex flex-row align-items-baseline">
      <h3>{{ training.topic }}</h3>
      <span class="date">{{ when }}</span>
    </div>
    <p>{{ training.company }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Training } from "~/models";

@Component
export default class TrainingDetails extends Vue {
  @Prop({ default: {} }) readonly training!: Training;

  get when() {
    return this.$moment(this.training.when).format("YYYY");
  }
}
</script>

<style scoped></style>
