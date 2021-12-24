<template>
  <div class="job-container">
    <div class="header">
      <span class="h3 company">{{ job.company }}</span>
      <span class="cv-small">{{ dates(job) }}</span>
    </div>
    <h4 v-if="job.role">{{ job.role }}</h4>
    <p class="description">{{ job.description }}</p>
    <div v-if="job.projects" class="projects">
      <h4 v-if="job.projects.length === 1">Projet</h4>
      <h5 v-else>Projets</h5>
      <div class="grid">
        <div v-for="item in projects" :key="item" class="grid-item">
          {{ item }}
        </div>
      </div>
    </div>
    <div v-if="job.tasks" class="tasks">
      <h4>Tâches</h4>
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
      <h4>Technos</h4>
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

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Experience, Period } from "~/models";

@Component
export default class TalkDetails extends Vue {
  @Prop({ default: {} }) readonly job!: Experience;

  get projects() {
    return this.job.projects?.map(({ name, description }) => [name, description]).flat() ?? [];
  }

  get technos() {
    return this.job.stacks?.map(({ type, technos }) => [type, technos.join(", ")]).flat() ?? [];
  }

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
