<template>
  <div class="talk">
    <div class="d-flex flex-row align-items-baseline">
      <div class="h3">
        {{ talk.topic }} <span v-if="talk.language">({{ talk.language.toUpperCase() }})</span>
      </div>
      <span v-if="talk.when" class="date">{{ formatDate(talk.when, "MMM YYYY") }}</span>
      <ResumeContentTalkLinks v-if="talk.links" :links="talk.links" />
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
        const date = this.formatDate(when, "MMM YYYY");
        return `${name} (${date})`;
      })
      .join(", ");
  }

  formatDate(date: string, format: string) {
    return this.$moment(date).format(format);
  }
}
</script>

<style scoped>
.link {
  padding-left: var(--cv-size);
}

@media print {
  .talk {
    break-inside: avoid-page;
  }
}
</style>
