<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled">
      <li :aria-label="$t('email')">
        <b-icon-envelope-fill class="icon" /><span
          ><a :href="`mailto:${cv.email}`">{{ cv.email }}</a></span
        >
      </li>
      <li :aria-label="$t('website')">
        <b-icon-globe class="icon" /><span
          ><a :href="cv.website">{{ cv.website.replace("https://", "") }}</a></span
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
  website: "Site web",
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
  website: "Website",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { CV } from "~/models";

@Component
export default class Infos extends Vue {
  @Prop({ default: {} }) readonly cv!: CV;
}
</script>

<style scoped>
.icon {
  font-size: 1.15em;
  margin-right: 0.5em;
  vertical-align: -0.25em;
}
</style>
