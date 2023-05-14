<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <h3>
      <span>{{ talk.topic }}</span>
      <span v-if="talk.language">({{ talk.language.toUpperCase() }})</span>
    </h3>
    <p>
      <span>{{ talk.name }}</span>
      <span v-if="talk.when" class="date">{{ formatDate(talk.when, $t("date")) }}</span>
    </p>
    <div v-if="talk.description" class="talk-description">
      <div>
        <HomeTalkDescription v-if="talk.description" :talk="talk" />
        <HomeTalkLinks v-if="talk.links" :talk="talk" />
      </div>
      <div class="picture-container">
        <img v-if="talk.pictureId" :src="require(`~/assets/talks/${talk.pictureId}.png`)" :alt="$t('cover')" class="picture" />
      </div>
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  date: "D MMM yyyy",
  cover: "Couverture",
}
</i18n>

<i18n locale="en" lang="json5">
{
  date: "MMM D yyyy",
  cover: "Cover",
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

.picture {
  max-width: 100%;
  max-height: 200px;
}

.picture-container {
  text-align: center;
}

@media screen and (min-width: 769px) {
  .picture {
    max-width: 200px;
    max-height: 120px;
  }
}

@media screen and (min-width: 1024px) {
  .talk-description {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-gap: 4em;
  }
}
</style>
