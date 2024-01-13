<template>
  <div>
    <TheHeader />
  </div>
  <main :class="$style.main">
    <slot />
  </main>
  <div>
    <TheFooter />
  </div>
</template>

<style module>
.main {
}
</style>