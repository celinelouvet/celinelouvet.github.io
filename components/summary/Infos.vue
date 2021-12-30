<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled">
      <li :aria-label="$t('email')">
        <b-icon-envelope-fill class="icon" /><span
          ><a :href="`mailto:${cv.email}`">{{ cv.email }}</a></span
        >
      </li>
      <li :aria-label="$t('location')">
        <b-icon-geo-alt-fill class="icon" /><span>{{ cv.location }}</span>
      </li>
      <li>
        {{ $t(`common.remoteType.${cv.remote}`) }}
      </li>
    </ul>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Mes Infos",
  email: "Email",
  location: "Adresse",
  remoteType: {
    FULLTIME: "Télétravail à temps plein",
    "2_DAYS": "Télétravail à temps partiel (minimum 2 jours / semaine)",
    NONE: "Travail en présentiel",
  },
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "My Infos",
  email: "Email",
  location: "Location",
  remoteType: {
    FULLTIME: "Full-time remote",
    "2_DAYS": "Part-time remote (2 days / week min.)",
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
