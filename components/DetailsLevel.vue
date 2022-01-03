<template>
  <div class="d-flex flex-row justify-content-end">
    <div class="form-check form-switch">
      <input
        id="switchDetails"
        :checked="details"
        class="form-check-input details"
        type="checkbox"
        role="switch"
        @click="detailsChange($event.target.checked)"
      />
      <label class="form-check-label" for="switchDetails">{{ $t("label") }}</label>
    </div>
  </div>
</template>

<i18n locale="fr" lang="json5">
{
  label: "Afficher le détail",
}
</i18n>

<i18n locale="en" lang="json5">
{
  label: "Show details",
}
</i18n>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class DetailsLevel extends Vue {
  details: boolean = false;

  @Emit()
  detailsChange(value: boolean) {
    this.details = value;
    return this.details;
  }
}
</script>

<style scoped>
[type="checkbox"].details:checked {
  background-color: var(--cv-blue);
  border-color: var(--cv-blue);
}
[type="checkbox"].details:focus {
  border-color: var(--cv-blue);
  box-shadow: 0 0 0 0.25rem rgba(var(--cv-blue-ultralight-rgb), 30%);
}
[type="checkbox"].details:not(:checked):focus {
  border-color: var(--cv-blue-ultralight);
  background-image: var(--dot-blue-light);
}
</style>
