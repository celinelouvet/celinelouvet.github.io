<template>
  <div>
    <h2>{{ $t("title") }}</h2>
    <p v-for="(biography, index) in biographies" :key="index" class="biography-content">{{ biography }}</p>
    <p>
      <NuxtLink :to="resumeLink">{{ $t("seeDetails") }}</NuxtLink>
    </p>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  title: "Biographie",
  seeDetails: "Voir mon CV complet",
}
</i18n>

<i18n locale="en" lang="json5">
{
  title: "Biography",
  seeDetails: "See my full CV",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Biography extends Vue {
  @Prop({ default: [] }) readonly biographies!: string[];

  get resumeLink(): string {
    if (this.$i18n.locale === "fr") {
      return "/resume";
    }

    return "/en/resume";
  }
}
</script>

<style scoped>
h2,
.h2 {
  font-size: 2em;
}
@media print {
  .biography-content:last-child {
    margin-bottom: 0;
  }
}
</style>
