<template>
  <div class="job-container">
    <div class="header">
      <span class="h3 company">{{ job.company }}</span>
      <span class="cv-small">{{ from }} - {{ to }}</span>
      <span v-if="diff.years === 0 && diff.months !== 0" class="cv-small">({{ $tc("months", diff.months) }})</span>
      <span v-if="diff.years !== 0 && diff.months === 0" class="cv-small">({{ $tc("years", diff.years) }})</span>
      <span v-else class="cv-small">({{ $tc("years", diff.years) }} {{ $tc("months", diff.months) }})</span>
      <span class="cv-small">{{ remote }}</span>
    </div>
    <h4 v-if="job.role">{{ job.role }}</h4>
    <p class="description">{{ job.description }}</p>
    <div v-if="job.projects" class="projects">
      <h4>{{ $tc("project", job.projects.length) }}</h4>
      <div class="grid">
        <div v-for="item in projects" :key="item" class="grid-item">
          {{ item }}
        </div>
      </div>
    </div>
    <div v-if="job.tasks" class="tasks">
      <h4>{{ $t("tasks") }}</h4>
      <ul>
        <li v-for="task in job.tasks" :key="task.name">
          {{ task.name }}
          <ul v-if="task.subtasks">
            <li v-for="subtask in task.subtasks" :key="subtask.name">
              {{ subtask.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="job.sideRoles" class="sideroles">
      <ContentSideRole v-for="sideRole in job.sideRoles" :key="`${sideRole.company}-${sideRole.from}`" :side-role="sideRole" />
    </div>
    <div v-if="job.stacks" class="stacks">
      <h4>{{ $t("stacks") }}</h4>
      <div v-if="job.stacks.length === 1" :set="(stack = job.stacks[0])">
        {{ stack.technos.join(", ") }}
      </div>
      <div v-else class="grid">
        <div v-for="item in technos" :key="item" class="grid-item">
          {{ item }}
        </div>
      </div>
    </div>
    <div v-if="job.jobs" class="subjobs">
      <ContentExperienceDetails v-for="subjob in job.jobs" :key="`${subjob.company}-${subjob.from}`" :job="subjob" class="subjob" />
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  project: "Projet|Projets",
  tasks: "Tâches",
  stacks: "Technos",
  years: " | 1 an | {n} ans",
  months: " | 1 mois | {n} mois",
  remote: "Télétravail à temps plein",
  today: "aujourd'hui",
}
</i18n>

<i18n locale="en" lang="json5">
{
  project: "Project|Projects",
  tasks: "Tasks",
  stacks: "Stacks",
  years: " | 1 year | {n} years",
  months: " | 1 month | {n} months",
  remote: "Full-time remote",
  today: "today",
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Experience } from "~/models";

@Component
export default class TalkDetails extends Vue {
  @Prop({ default: {} }) readonly job!: Experience;

  get remote() {
    return this.job.remote ? `- ${this.$t("remote")}` : "";
  }

  get projects() {
    return this.job.projects?.map(({ name, description }) => [name, description]).flat() ?? [];
  }

  get technos() {
    return this.job.stacks?.map(({ type, technos }) => [type, technos.join(", ")]).flat() ?? [];
  }

  get from() {
    const from = this.$moment(this.job.from);
    return from.format("MMM YYYY");
  }

  get to() {
    if (this.job.to) {
      const to = this.$moment(this.job.to);
      return to.format("MMM YYYY");
    }
    return this.$t("today");
  }

  get diff() {
    const from = this.$moment(this.job.from);
    const to = this.$moment(this.job.to);

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
h4,
.h4 {
  font-size: 1.6em;
}

.job-container {
  margin-bottom: 3em;
}

.company {
  font-size: 2.1em;
}

.subjob > .header .company::before {
  content: "●";
  margin-left: -1.28em;
  padding-right: 0.7em;
  font-family: "Glyphicons Halflings";
  color: var(--bs-gray-400);
}

.cv-small {
  font-size: 0.85em;
  color: var(--bs-gray-600);
}

.description,
.projects,
.tasks,
.sideroles,
.stacks {
  margin-bottom: 1em;
}

.grid {
  display: grid;
  grid-template-columns: 110px auto;
  gap: 0.75em;
  padding-left: 1.5em;
}

.grid-item:nth-child(2n + 1) {
  font-weight: 700;
}

.subjobs {
  border-left: 2px solid var(--bs-gray-400);
}

.subjob {
  padding-left: 2em;
  font-size: 0.9em;
}
</style>
