<template>
  <div class="talks">
    <h2>{{ title }}</h2>
    <div class="content">
      <HomeTalkDetails v-for="talk in talks" :key="asKey(talk)" :talk="talk" class="talk" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { ConventionTalk } from "./conventionTalks";

@Component
export default class Talks extends Vue {
  @Prop({ default: "" }) readonly title!: string;
  @Prop({ default: [] }) readonly talks!: ConventionTalk[];

  asKey(talk: ConventionTalk) {
    return `${talk.topic}-${talk.name}-${talk.when}`;
  }
}
</script>

<style scoped>
h2,
.h2 {
  font-size: 2em;
}
.talk {
  margin-bottom: 2em;
}

@media screen and (max-width: 768px) {
  .talk {
    margin-bottom: 4em;
  }
}
</style>
