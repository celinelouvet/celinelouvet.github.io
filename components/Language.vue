<template>
  <span class="language">
    <component :is="flag" class="flag" /><span class="language-name">{{ locale.name }}</span>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

type Locale = { code: string; name: string };

@Component
export default class Language extends Vue {
  @Prop({ type: Object, required: true }) readonly locale!: Locale;

  get flag(): string {
    return `flag-${this.locale.code}`;
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
