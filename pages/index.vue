<template>
  <div>
    <div class="container d-none d-lg-block">
      <DesktopLayout />
    </div>
    <div class="container-fluid d-lg-none">
      <MobileLayout />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesktopLayout from "~/components/DesktopLayout.vue";
import MobileLayout from "~/components/MobileLayout.vue";

export default Vue.extend({
  components: { DesktopLayout, MobileLayout },
});
</script>

<style></style>
