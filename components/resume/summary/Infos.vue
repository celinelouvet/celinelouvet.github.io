<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled list">
      <li :aria-label="$t('email')">
        <b-icon-envelope-fill class="icon" /><span
          ><a :href="`mailto:${resume.email}`">{{ resume.email }}</a></span
        >
      </li>
      <li :aria-label="$t('website')">
        <b-icon-globe class="icon" /><span
          ><a :href="resume.website">{{ resume.website.replace("https://", "") }}</a></span
        >
      </li>
      <li :aria-label="$t('location')">
        <b-icon-geo-alt-fill class="icon" /><span>{{ resume.location }} ({{ resume.zipCode }})</span>
      </li>
      <li :aria-label="$t('experience')">
        <b-icon-hourglass-split class="icon" /><span>{{
          $t("yearsOfExperience", { experience: $moment(resume.firstExperience).fromNow(true) })
        }}</span>
      </li>
      <li :aria-label="$t('experience')">
        <b-icon-bicycle class="icon" /><span>{{ resume.hobbies }}</span>
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

import { Resume } from "~/models";

@Component
export default class Infos extends Vue {
  @Prop({ default: {} }) readonly resume!: Resume;
}
</script>

<style scoped>
.icon {
  font-size: 1.15em;
  margin-right: 0.5em;
  vertical-align: -0.25em;
}

@media print {
  .list {
    margin-bottom: 0;
  }
}
</style>
