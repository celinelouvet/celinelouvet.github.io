<!-- eslint-disable vue/no-v-html -->
<template>
  <p v-if="links.slides || links.video || links.program || links.feedbacks">
    <a v-if="links.slides" :href="links.slides" target="_blank"
      ><span class="link">{{ $t("slides") }}</span></a
    >
    <a v-if="links.video" :href="links.video" target="_blank"
      ><span class="link">{{ $t("video") }}</span></a
    >
    <a v-if="links.program" :href="links.program" target="_blank"
      ><span class="link">{{ $t("program") }}</span></a
    >
    <a v-if="links.feedbacks && isDone(talk)" :href="links.feedbacks" target="_blank"
      ><span class="link">{{ $t("feedbacks") }}</span></a
    >
  </p>
</template>

<i18n locale="fr" lang="json5">
{
  slides: "Slides",
  video: "Vidéo",
  program: "Programme",
  feedbacks: "Retours",
}
</i18n>

<i18n locale="en" lang="json5">
{
  slides: "Slides",
  video: "Video",
  program: "Program",
  feedbacks: "Feedbacks",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { ConventionTalk } from "./conventionTalks";
import { Links } from "~/models";

@Component
export default class TalkLinks extends Vue {
  @Prop() readonly talk!: ConventionTalk;

  get links(): Links {
    return this.talk.links ?? {};
  }

  isDone({ when }: ConventionTalk) {
    return this.$moment(when).isBefore();
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.link {
  color: var(--cv-blue-dark);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  border: 1px solid var(--cv-blue-dark);
}
.link:hover {
  background-color: var(--cv-blue-lighter);
}
</style>
