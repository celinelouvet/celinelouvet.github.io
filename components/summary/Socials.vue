<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled">
      <li v-for="social in cv.socials" :key="social.link" :set="(icon = `b-icon-${social.name}`)">
        <component :is="icon" class="icon" /><span
          ><a :href="social.link">@{{ social.handle }}</a></span
        >
      </li>
    </ul>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Réseaux sociaux",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Social networks",
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Socials extends Vue {
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
