<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div class="d-flex flex-row align-items-baseline">
      <h3>
        <span>{{ talk.topic }}</span>
        <span v-if="talk.language">({{ talk.language.toUpperCase() }})</span>
      </h3>
      <span v-if="talk.when" class="date">{{ formatDate(talk.when, $t("date")) }}</span>
    </div>
    <p v-for="line in description" :key="line">{{ line }}</p>
    <ul>
      <li v-for="convention in conventions" :key="convention">{{ convention.name }} ({{ formatDate(convention.when, $t("date")) }})</li>
    </ul>
    <p v-if="talk.slidesLink || talk.videoLink">
      <a v-if="talk.slidesLink" :href="talk.slidesLink" target="_blank"><span class="link">Slides</span></a>
      <a v-if="talk.videoLink" :href="talk.videoLink" target="_blank"><span class="link">Vidéo</span></a>
    </p>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  date: "D MMM yyyy",
}
</i18n>

<i18n locale="en" lang="json5">
{
  date: "MMM D yyyy",
}
</i18n>

<script lang="ts">
import { LocaleMessages } from "vue-i18n";
import { Vue, Component, Prop } from "vue-property-decorator";

import { Convention, Talk } from "~/models";

@Component
export default class TalkDetails extends Vue {
  @Prop({ default: { topic: "", link: "", where: [] } }) readonly talk!: Talk;

  get conventions() {
    const conventions: Convention[] = this.talk.where ?? [];
    return [...(conventions ?? [])].sort(({ when: when1 }, { when: when2 }) => this.$moment(when1).diff(this.$moment(when2)));
  }

  get description() {
    return typeof this.talk.description === "string" ? [this.talk.description] : this.talk.description;
  }

  formatDate(date: string, format: string | LocaleMessages) {
    if (typeof format === "object") return "";
    return this.$moment(date).format(format);
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
