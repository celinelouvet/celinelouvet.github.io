<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <p v-for="(description, index) in cv.description" :key="index">{{ description }}</p>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Description",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Description",
}
</i18n>

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
