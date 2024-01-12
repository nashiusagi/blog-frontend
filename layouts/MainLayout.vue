<template>
  <div v-sticky="{ zIndex: 1000, stickyTop: 0}">
    <TheHeader />
  </div>
  <main>
    <slot />
  </main>
  <div>
    <TheFooter />
  </div>
</template>