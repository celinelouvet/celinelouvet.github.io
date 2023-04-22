<template>
  <div>
    <h3>{{ talk.topic }}</h3>
    <ul>
      <li v-for="convention in conventions" :key="convention">{{ convention }}</li>
    </ul>
    <p v-if="talk.slidesLink || talk.videoLink">
      <a v-if="talk.slidesLink" :href="talk.slidesLink"><span class="link">Slides</span></a>
      <a v-if="talk.videoLink" :href="talk.videoLink"><span class="link">Vidéo</span></a>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Convention, Talk } from "~/models";

@Component
export default class TalkDetails extends Vue {
  @Prop({ default: { topic: "", link: "", where: [] } }) readonly talk!: Talk;

  get conventions() {
    const conventions: Convention[] = this.talk.where ?? [];
    return [...(conventions ?? [])]
      .sort(({ when: when1 }, { when: when2 }) => this.$moment(when1).diff(this.$moment(when2)))
      .map(({ name, when }) => {
        const date = this.$moment(when).format("MMM YYYY");
        return `${name} (${date})`;
      });
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.link {
  color: var(--cv-blue-dark);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  border: 1px solid var(--cv-blue-dark);
}
.link:hover {
  background-color: var(--cv-blue-lighter);
}
</style>
