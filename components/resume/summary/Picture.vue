<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <b-avatar src="~/assets/square-gray.png" class="photo" aria-label="photo"></b-avatar>
    </div>
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
  border: 3px solid #fff;
}
</style>
