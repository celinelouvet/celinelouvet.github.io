<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <main v-html="content" />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MarkdownIt from "markdown-it";

// @ts-expect-error
import test from "./posts/test.md";

@Component
export default class Layout extends Vue {
  content: string = "";

  mounted() {
    const md = new MarkdownIt();
    this.content = md.render(test);
  }
}
</script>

<style scoped></style>
