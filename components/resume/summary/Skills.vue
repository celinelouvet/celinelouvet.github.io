<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <ul class="list-unstyled list">
      <li v-for="skill in skills" :key="skill" class="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Compétences",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Main skills",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Skills extends Vue {
  @Prop({ default: [] }) readonly skills!: string[];
}
</script>

<style scoped>
.skill {
  padding-bottom: 0.4em;
}

@media print {
  .list {
    margin-bottom: 0;
  }
}
</style>
