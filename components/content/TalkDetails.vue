<template>
  <div>
    <div class="d-flex flex-row align-items-baseline">
      <div class="h3">{{ talk.topic }}</div>
      <span v-if="talk.link !== ''" class="link"><a :href="talk.link">Slides</a></span>
    </div>
    <p>{{ conventions }}</p>
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
      })
      .join(", ");
  }
}
</script>

<style scoped>
.link {
  padding-left: var(--cv-size);
}
</style>
