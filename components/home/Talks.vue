<template>
  <div class="talks">
    <h2>{{ $t("title") }}</h2>
    <div class="content">
      <div v-for="talk in talks" :key="talk.topic" class="talk">
        <HomeTalkDetails :talk="talk" />
      </div>
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Conférences & Interviews",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Talks & Interviews",
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
.talk {
  margin-bottom: 2em;
}
</style>
