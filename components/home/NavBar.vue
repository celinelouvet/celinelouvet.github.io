<template>
  <div class="common-nav">
    <NuxtLink to="/" active-class="active">{{ $t("home") }}</NuxtLink>
    <NuxtLink :to="resumeLink" active-class="active">{{ $t("resume") }}</NuxtLink>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  home: "Accueil",
  resume: "CV",
}
</i18n>

<i18n locale="en" lang="json5">
{
  home: "Home",
  resume: "Resume",
}
</i18n>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
  get resumeLink(): string {
    if (this.$i18n.locale === "fr") {
      return "/resume";
    }

    return "/en/resume";
  }
}
</script>

<style scoped>
.common-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.common-nav > a {
  font-family: var(--narrow-font, Nunito);
  font-size: 1.75em;
  font-weight: 400;
  padding-right: 1em;
}

a {
  color: #fff;
  text-decoration: none;
}
a.active {
  text-decoration: underline;
}
</style>
