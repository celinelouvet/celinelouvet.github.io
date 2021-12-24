<template>
  <div>
    <h2>Conférences</h2>
    <div v-for="talk in cv.talks" :key="talk.from">
      <ContentTalkDetails :talk="talk" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Talks extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped></style>
