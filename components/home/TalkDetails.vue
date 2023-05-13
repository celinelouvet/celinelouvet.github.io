<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div class="d-flex flex-row align-items-baseline">
      <h3>
        <span>{{ talk.topic }}</span>
        <span v-if="talk.language">({{ talk.language.toUpperCase() }})</span>
      </h3>
    </div>
    <div>
      <p>
        <span>{{ talk.name }}</span>
        <span v-if="talk.when" class="date">{{ formatDate(talk.when, $t("date")) }}</span>
      </p>
    </div>
    <HomeTalkDescription v-if="talk.description" :talk="talk" />
    <HomeTalkLinks v-if="talk.links" :talk="talk" />
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

import { ConventionTalk } from "./conventionTalks";

@Component
export default class TalkDetails extends Vue {
  @Prop() readonly talk!: ConventionTalk;

  formatDate(date: string, format: string | LocaleMessages) {
    if (typeof format === "object") return "";
    return this.$moment(date).format(format);
  }
}
</script>

<style scoped>
h3,
.h3 {
  font-size: 1.5em;
}
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
