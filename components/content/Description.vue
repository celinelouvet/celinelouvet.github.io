<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <p v-for="(description, index) in descriptions" :key="index" class="description-content">{{ description }}</p>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Description",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Description",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Description extends Vue {
  @Prop({ default: [] }) readonly descriptions!: string[];
}
</script>

<style scoped>
@media print {
  .description-content:last-child {
    margin-bottom: 0;
  }
}
</style>
