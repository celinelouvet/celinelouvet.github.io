<template>
  <div class="job-container" :class="{ summarize: summarize }">
    <div class="header">
      <span class="h3 company">{{ job.company }}</span>
      <span class="cv-small">{{ from }} - {{ to }}</span>
      <span v-if="diff.years !== 0 && diff.months !== 0" class="cv-small">({{ $tc("years", diff.years) }} {{ $tc("months", diff.months) }})</span>
      <span v-else-if="diff.years === 0 && diff.months !== 0" class="cv-small">({{ $tc("months", diff.months) }})</span>
      <span v-else-if="diff.years !== 0 && diff.months === 0" class="cv-small">({{ $tc("years", diff.years) }})</span>
      <span v-else class="cv-small">({{ $tc("years", diff.years) }} {{ $tc("months", diff.months) }})</span>
      <span class="cv-small">{{ remote }}</span>
    </div>
    <h4 v-if="job.role" class="role">{{ job.role }}</h4>
    <p class="description">{{ job.description }}</p>
    <div class="details">
      <div v-if="job.projects" class="projects">
        <h4 :class="{ 'd-print-none': summarize }">{{ $tc("project", job.projects.length) }}</h4>
        <div class="projects-content" :class="{ one: job.projects.length === 1 }">
          <div v-for="project in job.projects" :key="project.name" class="project">
            <div class="name">{{ project.name }}</div>
            <div class="description">{{ project.description }}</div>
          </div>
        </div>
      </div>
      <div v-if="job.tasks" class="tasks hidden d-print-none" :class="{ show: details && !summarize }">
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
      <div v-if="job.sideRoles" class="sideroles hidden d-print-none" :class="{ show: details }">
        <ContentSideRole v-for="sideRole in job.sideRoles" :key="`${sideRole.company}-${sideRole.from}`" :side-role="sideRole" />
      </div>
      <div v-if="!summarize">
        <div v-if="job.stacks" class="stacks hidden" :class="{ show: details }">
          <h4>{{ $t("stacks") }}</h4>
          <div v-if="job.stacks.length === 1">{{ job.stacks[0].technos.join(", ") }}</div>

          <div v-else class="stacks-content" :class="{ one: job.stacks.length === 1 }">
            <div v-for="stack in job.stacks" :key="stack.type" class="stack">
              <div class="type">{{ stack.type }}</div>
              <div class="technos">{{ stack.technos.join(", ") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="job.jobs" class="subjobs">
      <ContentExperienceDetails
        v-for="(subjob, index) in job.jobs"
        :key="`${subjob.company}-${subjob.from}`"
        :job="subjob"
        :details="details"
        :summarize="summarize || subjob.summarize"
        :class="`subjob subjob-${index}`"
      />
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
export default class ExperienceDetails extends Vue {
  @Prop({ default: {} }) readonly job!: Experience;
  @Prop({ default: false }) readonly details!: boolean;
  @Prop({ default: false }) readonly summarize!: boolean;

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
.job-container:not(.summarize) {
  margin-bottom: var(--cv-size-3x);
}
.job-container.summarize:not(.subjob) {
  margin-bottom: var(--cv-size-2x);
}

.subjobs {
  border-left: 2px solid var(--cv-blue);
}

.subjob {
  padding-left: var(--cv-size-2x);
  font-size: 0.9em;
}

.subjob > .header .company::before {
  font-size: 30px;
  margin-left: calc(var(--cv-size-2x) * -1 - 10px);
  padding-right: var(--cv-size);

  content: "●";
  font-family: "Glyphicons Halflings";
  color: var(--cv-blue);
}

.cv-small {
  font-size: 0.85em;
  color: var(--bs-gray-600);
}

.job-container > .description,
.projects,
.tasks,
.sideroles,
.stacks {
  margin-bottom: var(--cv-size);
}

@media screen {
  .company {
    font-size: 2.1em;
  }

  @media screen and (max-width: 576px) {
    .project .name,
    .project .description,
    .stack .type,
    .stack .technos {
      grid-column: 1 / span 2;
    }
  }

  .project,
  .stack {
    display: grid;
    grid-template-columns: 110px auto;
    gap: var(--cv-size);
    padding-left: var(--cv-size-2x);
    margin-bottom: var(--cv-size);
  }
}

.project .name,
.stack .type {
  font-weight: 700;
}

@media screen {
  .hidden {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: height 0s 5s, opacity 1s 0s;
  }

  .show {
    height: auto;
    opacity: 1;
  }
}

@media print {
  .job-container:not(.summarize) {
    margin-bottom: var(--cv-size-2x);
  }
  .job-container.summarize:not(.subjob) {
    margin-bottom: var(--cv-size-2x);
  }
  .job-container.summarize {
    margin-bottom: var(--cv-size-2x);
  }

  .projects-content,
  .stacks-content {
    padding-left: var(--cv-size-2x);
  }

  .projects-content:not(.one),
  .stacks-content:not(.one) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--cv-size-2x);
    row-gap: var(--cv-size);
  }

  .project .name,
  .stack .type {
    padding-bottom: var(--cv-size-05x);
  }

  .summarize .project .name,
  .summarize .project .description {
    grid-column: 1 / span 2;
  }

  .job-container > .header {
    break-after: avoid;
  }
  .job-container > .role {
    break-after: avoid;
  }
  .job-container > .description {
    break-after: avoid;
  }

  /* .job-container .stacks {
    break-inside: avoid-page;
  } */

  /* .job-container > .details {
    break-after: avoid-page;
  } */

  /* .projects {
    break-after: avoid-page;
  } */
  /* .subjobs {
    break-before: avoid-page;
  } */

  .subjob {
    break-inside: avoid-page;
  }

  .subjob-0 {
    break-before: avoid-page;
  }
}

@media (prefers-color-scheme: dark) {
  .subjob > .header .company::before {
    color: var(--cv-blue-light);
  }
}
</style>
