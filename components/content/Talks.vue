<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <div v-for="talk in cv.talks" :key="talk.from">
      <ContentTalkDetails :talk="talk" />
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Conférences",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Talks",
}
</i18n>

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
