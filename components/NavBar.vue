<template>
  <div class="container-fluid">
    <div class="common-nav">
      <NuxtLink :to="homeLink" exact-active-class="active">{{ $t("home") }}</NuxtLink>
      <NuxtLink :to="resumeLink" exact-active-class="active">{{ $t("resume") }}</NuxtLink>
    </div>
    <div class="container container-lg d-flex justify-content-end align-items-center actions">
      <span v-if="languageFlip"><LanguageSwitcher /></span>
    </div>
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
  languageFlip: boolean = process.env.ACTIVATE_LANGUAGE === "true";

  get homeLink(): string {
    if (this.$i18n.locale === "fr") {
      return "/";
    }

    return "/en";
  }

  get resumeLink(): string {
    if (this.$i18n.locale === "fr") {
      return "/resume";
    }

    return "/en/resume";
  }
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.common-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--cv-size);

  background-image: var(--blue-and-white);
  padding: var(--cv-size-2x);
  color: white;
}
.common-nav > a {
  font-family: var(--narrow-font, Nunito);
  font-size: 1.5em;
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
