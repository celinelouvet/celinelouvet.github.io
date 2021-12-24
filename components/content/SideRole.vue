<template>
  <div class="siderole">
    <div>
      <span class="h4 company">{{ sideRole.company }}</span>
      <span class="cv-small">{{ dates(sideRole) }}</span>
    </div>
    <p class="description">{{ sideRole.description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Experience, Period } from "~/models";

@Component
export default class SideRole extends Vue {
  @Prop({ default: {} }) readonly sideRole!: Experience;

  dates({ from: fromDate, to: toDate }: Period) {
    const from = this.$moment(fromDate);
    const to = this.$moment(toDate);
    const diff = to.from(from, true);

    const fromString = from.format("MMM YYYY");
    const toString = toDate ? this.$moment(toDate).format("MMM YYYY") : "aujourd'hui";

    return `${fromString} - ${toString} (${diff})`;
  }
}
</script>

<style scoped>
.siderole {
  padding-left: 1.5em;
  font-size: 0.9em;
}

.company {
  font-size: 2.1em;
}

.cv-small {
  font-size: 0.85em;
  color: var(--bs-gray-600);
}

.description {
  margin-bottom: 1em;
}
</style>
