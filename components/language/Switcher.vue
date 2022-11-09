<template>
  <b-dropdown variant="primary" size="sm" :aria-label="$t('language')">
    <template #button-content>
      <b-icon-translate class="icon icon-language" /> <span class="d-none d-md-inline">{{ $t("language") }}</span>
    </template>
    <b-dropdown-item
      v-for="locale in allLocales"
      :key="locale.code"
      :active="locale.code === $i18n.locale"
      @click.prevent.stop="changeLocale(locale)"
    >
      <span class="language">{{ locale.name }}</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<i18n locale="fr" lang="json5">
{
  language: "Langue",
}
</i18n>

<i18n locale="en" lang="json5">
{
  language: "Language",
}
</i18n>

<script lang="ts">
import { LocaleObject } from "@nuxtjs/i18n";
import { Vue, Component } from "vue-property-decorator";

const localeCodes: Map<string, string> = new Map([
  ["en", "en-gb"],
  ["fr", "fr"],
]);
const defaultCode = "fr";

@Component
export default class LanguageSwitcher extends Vue {
  created() {
    this.$moment.locale(this.localeCode ?? defaultCode);
  }

  get localeProp() {
    return this.$i18n.localeProperties;
  }

  get localeCode() {
    return localeCodes.get(this.$i18n.locale);
  }

  get allLocales() {
    return this.$i18n.locales.map((locale: string | LocaleObject) => {
      if (typeof locale === "string") {
        return { code: locale, name: locale };
      }
      return locale;
    });
  }

  changeLocale({ code }: LocaleObject) {
    this.$i18n.setLocale(code);

    const localeCode = localeCodes.get(code) ?? defaultCode;
    this.$moment.locale(localeCode);
  }
}
</script>

<style scoped>
.icon-language {
  font-size: 1em !important;
  vertical-align: middle !important;
}

.language {
  line-height: 1em;
  font-size: 0.8em;
}
</style>
