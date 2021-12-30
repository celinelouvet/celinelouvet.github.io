<template>
  <div class="full">
    <Nuxt />
  </div>
</template>

<style>
:root {
  --photo-size: 200px;
  --summary-width: calc(var(--photo-size) * 1.5);
  --cv-blue: #2a5978;
  --cv-blue-rgb: 42, 89, 120;
  --cv-blue-light: #428cbd;
  --cv-gray: #e3e8ec;

  --default-font: Nunito;
  --narrow-font: "PT Sans Narrow";

  --bs-body-font-family: var(--default-font);
  --bs-body-font-size: 14px;
}

html {
  word-spacing: 1px;
  font-smooth: always;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}

body,
.full {
  min-height: 100vh;
}
a {
  color: var(--cv-blue-light);
  font-weight: 600;
}
a:hover {
  color: var(--cv-blue);
  font-weight: 600;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5 {
  font-family: var(--narrow-font, Nunito);
}

h2,
.h2 {
  text-transform: uppercase;
  font-size: 2.25em;
}

h3,
.h3 {
  font-size: 1.7em;
}

.flex {
  display: flex;
}
.flex.vertical {
  flex-direction: column;
}
.flex.horizontal {
  flex-direction: row;
}
.flex.justify-center {
  justify-content: center;
}
.flex.align-center {
  align-items: center;
}
.flex.align-baseline {
  align-items: baseline;
}

.flex-1 {
  flex: 1;
}
</style>
