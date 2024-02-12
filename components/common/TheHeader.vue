<template>
  <div>
    <header :class="$style.header">
      <div>header</div>
      <div :class="$style.login_block">
        <a :class="$style.login_link" href="/admin">login</a>
      </div>
    </header>
  </div>
</template>

<style module>
.header {
  height: 50px;
  font-size: 14px;
  padding: 12px 10px;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
}

.login_block {
  padding: 8px;
  font-size: 18px;
}

.login_link {
  text-decoration: none;
  color: #111;
}
</style>
