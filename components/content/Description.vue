<template>
  <div>
    <h2>Description</h2>
    <p>{{ cv.description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Description extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped></style>
