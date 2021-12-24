<template>
  <div>
    <h2>Mes infos</h2>
    <ul class="list-unstyled">
      <li>
        <b-icon-envelope-fill class="icon" /><span
          ><a :href="`mailto:${cv.email}`">{{ cv.email }}</a></span
        >
      </li>
      <li>
        <b-icon-geo-alt-fill class="icon" /><span>{{ cv.location }}</span>
      </li>
      <li>
        {{ cv.remote }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { cv, CV } from "~/models";

@Component
export default class Infos extends Vue {
  get cv(): CV {
    return cv;
  }
}
</script>

<style scoped>
.icon {
  font-size: 1.15em;
  margin-right: 0.5em;
  vertical-align: -0.25em;
}
</style>
