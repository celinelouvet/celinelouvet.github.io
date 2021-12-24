<template>
  <div>
    <h2>Spécialités</h2>
    <ul class="list-unstyled">
      <li v-for="skill in cv.skills" :key="skill" class="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Skills extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped>
.skill {
  padding-bottom: 0.4em;
}
</style>
