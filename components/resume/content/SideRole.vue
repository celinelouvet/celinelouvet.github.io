<template>
  <div class="siderole">
    <div>
      <span class="h4 company">{{ sideRole.company }}</span>
      <span class="resume-small">{{ from }} - {{ to }}</span>
      <span v-if="diff.years === 0 && diff.months !== 0" class="resume-small">({{ $tc("months", diff.months) }})</span>
      <span v-else-if="diff.years !== 0 && diff.months === 0" class="resume-small">({{ $tc("years", diff.years) }})</span>
      <span v-else class="resume-small">({{ $tc("years", diff.years) }} {{ $tc("months", diff.months) }})</span>
    </div>
    <p class="description">{{ sideRole.description }}</p>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  years: " | 1 an | {n} ans",
  months: " | 1 mois | {n} mois",
  today: "aujourd'hui",
}
</i18n>

<i18n locale="en" lang="json5">
{
  years: " | 1 year | {n} years",
  months: " | 1 month | {n} months",
  today: "today",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Experience } from "~/models";

@Component
export default class SideRole extends Vue {
  @Prop({ default: {} }) readonly sideRole!: Experience;

  get from() {
    const from = this.$moment(this.sideRole.from);
    return from.format("MMM YYYY");
  }

  get to() {
    if (this.sideRole.to) {
      const to = this.$moment(this.sideRole.to);
      return to.format("MMM YYYY");
    }
    return this.$t("today");
  }

  get diff() {
    const from = this.$moment(this.sideRole.from);
    const to = this.$moment(this.sideRole.to);

    const { years, months, days, hours } = this.$moment.preciseDiff(from, to, true);

    const roundedDays = hours >= 12 ? days + 1 : days;
    const roundedMonths = roundedDays >= 15 ? months + 1 : months;
    const roundedYears = roundedMonths === 12 ? years + 1 : years;

    return {
      months: roundedMonths === 12 ? 0 : roundedMonths,
      years: roundedYears,
    };
  }
}
</script>

<style scoped>
.siderole {
  padding-left: var(--cv-size);
  font-size: 0.9em;
}

.company {
  font-size: 2.1em;
}

.resume-small {
  font-size: 0.85em;
  color: var(--bs-gray-600);
}

.description {
  margin-bottom: var(--cv-size);
}
</style>
