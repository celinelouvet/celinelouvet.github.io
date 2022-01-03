<template>
  <div class="container">
    <DesktopLayout class="full" />
    <MobileCV class="full" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesktopLayout from "~/components/DesktopLayout.vue";
import MobileCV from "~/components/MobileCV.vue";

export default Vue.extend({
  components: { DesktopLayout, MobileCV },
});
</script>

<style></style>
