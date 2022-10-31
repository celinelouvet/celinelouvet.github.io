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
        <b-icon-geo-alt-fill class="icon" /><span>{{ cv.location }} ({{ cv.zipCode }})</span>
      </li>
      <li :aria-label="$t('experience')">
        <b-icon-hourglass-split class="icon" /><span>{{ $t("yearsOfExperience", { experience: $moment(cv.firstExperience).fromNow(true) }) }}</span>
      </li>
      <li :aria-label="$t('experience')">
        <b-icon-bicycle class="icon" /><span>{{ cv.hobbies }}</span>
      </li>
    </ul>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Mes Infos",
  email: "Email",
  location: "Adresse",
  experience: "Expérience",
  yearsOfExperience: "{experience} d'expérience",
  hobbies: "Loisirs",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "My Infos",
  email: "Email",
  location: "Location",
  experience: "Experience",
  yearsOfExperience: "{experience} of experience",
  hobbies: "Hobbies",
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
