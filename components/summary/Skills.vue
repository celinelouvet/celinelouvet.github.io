<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled">
      <li v-for="skill in cv.skills" :key="skill" class="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Compétences",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Main skills",
}
</i18n>

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
