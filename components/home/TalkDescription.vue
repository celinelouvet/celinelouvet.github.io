<template>
  <div v-if="talk.description" class="description">
    <p class="small">
      <span>{{ firstLine }}</span>
      <a v-if="!visible && rest.length > 0" class="link" @click="toggle">{{ $t("more") }}</a>
    </p>
    <div v-if="visible">
      <p v-for="(line, index) in rest" :key="line" class="small">
        <span>{{ line }}</span>
        <a v-if="index === rest.length - 1" class="link" @click="toggle">{{ $t("less") }} </a>
      </p>
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  more: "Plus",
  less: "Moins",
}
</i18n>

<i18n locale="en" lang="json5">
{
  more: "More",
  less: "Less",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { ConventionTalk } from "./conventionTalks";

@Component
export default class TalkDescription extends Vue {
  @Prop() readonly talk!: ConventionTalk;

  visible = false;

  get description() {
    if (!this.talk.description) {
      return [];
    }
    return typeof this.talk.description === "string" ? [this.talk.description] : this.talk.description;
  }

  get firstLine() {
    return this.description[0] ?? "";
  }

  get rest() {
    return this.description.length > 1 ? this.description.slice(1) : [];
  }

  toggle() {
    this.visible = !this.visible;
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.link {
  cursor: pointer;
  color: var(--cv-blue-dark);
  padding: 0.25em 0.5em;
}
.description {
  padding-left: 1em;
  border-left: 2px solid var(--cv-blue-dark);
  color: var(--bs-gray-600);
}
</style>
