<template>
  <b-dropdown right variant="outline-light">
    <template #button-content>
      <span class="language" :set="(flag = `language-flag-${$i18n.locale}`)">
        <component :is="flag" class="flag" /><span class="language-name">{{ $i18n.localeProperties.name }}</span>
      </span>
    </template>
    <b-dropdown-item v-for="locale in $i18n.locales" :key="locale.code" @click.prevent.stop="changeLocale(locale)">
      <span class="language" :set="(flag = `language-flag-${locale.code}`)">
        <component :is="flag" class="flag" /><span class="language-name">{{ locale.name }}</span>
      </span>
    </b-dropdown-item>
  </b-dropdown>
</template>

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

  changeLocale({ code }: LocaleObject) {
    this.$i18n.setLocale(code);

    const localeCode = localeCodes.get(code) ?? defaultCode;
    this.$moment.locale(localeCode);
  }
}
</script>

<style scoped>
.language {
  line-height: 1em;
  font-size: 0.85em;
}

.flag {
  height: 1em;
  vertical-align: -0.1em;
}

.language-name {
  padding-left: 0.5em;
}
</style>
