<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled">
      <li v-for="(remote, index) in cv.remote" :key="index">{{ $t(`remoteType.${remote.type}`, { location: remote.where }) }}</li>
    </ul>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Télétravail",
  remoteType: {
    FULLTIME: "Télétravail complet en {location}",
    HYBRID: "Télétravail alterné (2-3 jours / semaine) à {location}",
    NONE: "Travail en présentiel",
  },
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Remote",
  remoteType: {
    FULLTIME: "Full-time remote",
    HYBRID: "Part-time remote (2 days / week min.) in {location}",
    NONE: "No remote",
  },
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Infos extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped>
.icon {
  font-size: 1.15em;
  margin-right: 0.5em;
  vertical-align: -0.25em;
}
</style>
