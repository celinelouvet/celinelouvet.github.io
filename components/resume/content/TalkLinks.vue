<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <span v-if="links.slides" class="link d-print-none"
      ><a :href="links.slides">{{ $t("slides") }}</a></span
    >
    <span v-if="links.video" class="link d-print-none"
      ><a :href="links.video">{{ $t("video") }}</a></span
    >
  </span>
</template>

<i18n locale="fr" lang="json5">
{
  slides: "Slides",
  video: "Vidéo",
}
</i18n>

<i18n locale="en" lang="json5">
{
  slides: "Slides",
  video: "Video",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Links } from "~/models";

@Component
export default class TalkLinks extends Vue {
  @Prop() readonly links!: Links;
}
</script>

<style scoped>
.link {
  padding-left: var(--cv-size);
}
</style>
