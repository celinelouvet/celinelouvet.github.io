<template>
  <div class="container">
    <DesktopCV class="full" />
    <MobileCV class="full" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesktopCV from "~/components/DesktopCV.vue";
import MobileCV from "~/components/MobileCV.vue";

export default Vue.extend({
  components: { DesktopCV, MobileCV },
});
</script>

<style></style>
