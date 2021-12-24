<template>
  <div class="flex horizontal justify-center">
    <b-avatar src="photo.jpg" size="200px" class="photo"></b-avatar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Picture extends Vue {}
</script>

<style>
.photo {
  width: var(--photo-size);
  height: var(--photo-size);
}
</style>
