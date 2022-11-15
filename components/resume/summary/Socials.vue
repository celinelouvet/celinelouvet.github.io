<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled list">
      <li v-for="social in socials" :key="social.link">
        <component :is="`b-icon-${social.name}`" class="icon" /><span
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
import { Vue, Component, Prop } from "vue-property-decorator";

import { Social } from "~/models";

@Component
export default class Socials extends Vue {
  @Prop({ default: [] }) readonly socials!: Social[];
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
