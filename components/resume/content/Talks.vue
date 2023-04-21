<template>
  <div class="talks">
    <h2>{{ $t("title") }}</h2>
    <div class="content">
      <div v-for="talk in talks" :key="talk.topic">
        <ResumeContentTalkDetails :talk="talk" />
      </div>
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Conférences",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Talks",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Talk } from "~/models";

@Component
export default class Talks extends Vue {
  @Prop({ default: [] }) readonly talks!: Talk[];
}
</script>

<style scoped>
h2,
.h2 {
  text-transform: uppercase;
}
@media print {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--cv-size-2x);
  }
  .talks {
    break-inside: avoid-page;
  }
}
</style>
